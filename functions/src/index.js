import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { createHandler } from './handler.js';
import { createMemoryStore } from './memoryStore.js';

const ALREADY_EXISTS = 6;
const READ_TIMEOUT_MS = 3000;

function withTimeout(promise, ms) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('store timeout')), ms); })])
    .finally(() => clearTimeout(timer));
}

function firestoreStore() {
  initializeApp();
  const collection = () => getFirestore().collection('shareLinks');
  return {
    async get(id) {
      const snapshot = await withTimeout(collection().doc(id).get(), READ_TIMEOUT_MS);
      return snapshot.exists ? snapshot.data() : null;
    },
    async create(id, record, now) {
      try {
        await collection().doc(id).create({ ...record, createdAt: now });
      } catch (error) {
        if (error?.code !== ALREADY_EXISTS) throw error;
      }
    },
    async saveMeta(id, meta, now) {
      await collection().doc(id).set({ meta, metaFetchedAt: now }, { merge: true });
    },
  };
}

// The Functions emulator would otherwise talk to production Firestore when no
// Firestore emulator is running (it needs Java), so fall back to memory there.
const useMemoryStore = process.env.FUNCTIONS_EMULATOR === 'true' && !process.env.FIRESTORE_EMULATOR_HOST;
const store = useMemoryStore ? createMemoryStore() : firestoreStore();

// minInstances stays 0: Hosting's CDN serves repeat hits, so a warm instance is not worth paying for.
export const shares = onRequest(
  { region: 'us-central1', memory: '256MiB', timeoutSeconds: 20, maxInstances: 10, concurrency: 40, minInstances: 0 },
  createHandler({ store }),
);
