/** In-process store for tests and for the Functions emulator without a Firestore emulator. */
export function createMemoryStore() {
  const docs = new Map();
  return {
    docs,
    async get(id) { return docs.get(id) ?? null; },
    async create(id, record, now) { if (!docs.has(id)) docs.set(id, { ...record, createdAt: now }); },
    async saveMeta(id, meta, now) { docs.set(id, { ...docs.get(id), meta, metaFetchedAt: now }); },
  };
}
