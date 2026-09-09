// Progressive enhancement only: reading, navigation, and FAQs work without JS.
(() => {
  'use strict';
  const element = document.getElementById('podpin-config');
  if (!element) return;
  const config = JSON.parse(element.textContent);
  const menu = document.querySelector('.nav-disclosure');
  const mobile = window.matchMedia('(max-width: 768px)');
  const syncMenu = () => { if (menu) menu.open = !mobile.matches; };
  syncMenu();
  mobile.addEventListener('change', syncMenu);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  menu?.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) menu.open = false;
  });

  let consent = false;
  let loaded = false;
  const preferenceKey = 'podpin-analytics-consent';
  const storedChoice = () => { try { return localStorage.getItem(preferenceKey); } catch { return null; } };
  const saveChoice = value => { try { localStorage.setItem(preferenceKey, value); } catch { /* Still honor the in-memory choice. */ } };
  const privacySignal = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1';
  const analyticsEnabled = /^G-[A-Z0-9]+$/.test(config.gaId || '') && !privacySignal;
  function emit(name, details = {}) {
    const properties = { page_path: config.page, page_type: config.group, locale: config.locale, ...details };
    // A local, storage-free instrumentation seam is testable without sending data.
    window.dispatchEvent(new CustomEvent('podpin:analytics', { detail: { name, properties } }));
    if (analyticsEnabled && consent && loaded) window.gtag('event', name, properties);
  }
  function enableAnalytics() {
    if (!analyticsEnabled || loaded) return;
    consent = true;
    loaded = true;
    window[`ga-disable-${config.gaId}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    let referrer = '';
    try { referrer = document.referrer ? new URL(document.referrer).origin : ''; } catch { /* Ignore invalid referrers. */ }
    window.gtag('config', config.gaId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: `${location.origin}${config.page}`,
      page_referrer: referrer,
      cookie_flags: 'SameSite=Lax;Secure',
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.gaId)}`;
    document.head.appendChild(script);
    emit('page_view');
  }
  function disableAnalytics() {
    consent = false;
    window[`ga-disable-${config.gaId}`] = true;
    if (loaded) window.gtag('consent', 'update', { analytics_storage: 'denied' });
    // Remove GA cookies at host and parent-domain scopes, not unrelated cookies.
    for (const item of document.cookie.split(';')) {
      const name = item.trim().split('=')[0];
      if (name === '_ga' || name.startsWith('_ga_')) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
        const parts = location.hostname.split('.');
        for (let index = 0; index < parts.length - 1; index++) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${parts.slice(index).join('.')}; SameSite=Lax`;
      }
    }
  }
  const labels = {
    en: ['Optional analytics', 'Allow Google Analytics cookies to measure website usage and help improve Podpin? No analytics loads until you accept. Your choice can be changed in the footer.', 'Accept analytics', 'Decline analytics', 'Analytics settings'],
    es: ['Analítica opcional', '¿Permites medir el uso de esta web para mejorar Podpin? No se carga analítica hasta que aceptes. Puedes cambiar tu decisión en el pie de página.', 'Aceptar analítica', 'Rechazar analítica', 'Ajustes de analítica'],
    fr: ['Statistiques facultatives', 'Autoriser la mesure de l’utilisation du site pour améliorer Podpin ? Aucun outil statistique ne se charge avant votre accord. Modifiez votre choix en bas de page.', 'Accepter', 'Refuser', 'Réglages des statistiques'],
    de: ['Optionale Nutzungsanalyse', 'Website-Nutzung messen, um Podpin zu verbessern? Analysesoftware wird erst nach Zustimmung geladen. Die Auswahl lässt sich in der Fußzeile ändern.', 'Analyse erlauben', 'Analyse ablehnen', 'Analyse-Einstellungen'],
    it: ['Analisi facoltativa', 'Consenti la misurazione dell’uso del sito per migliorare Podpin? Non viene caricata prima del consenso. Puoi cambiare scelta nel piè di pagina.', 'Accetta', 'Rifiuta', 'Impostazioni analisi'],
    pt: ['Análise opcional', 'Permitir a medição do uso do site para melhorar o Podpin? A análise só é carregada após sua aceitação. Altere sua escolha no rodapé.', 'Aceitar', 'Recusar', 'Configurações de análise'],
    zh: ['可选的网站分析', '是否允许统计网站使用情况以改进 Podpin？在你同意之前不会加载分析工具。你可以在页脚更改选择。', '允许分析', '拒绝分析', '分析设置'],
  }[config.locale] || [];
  let panel;
  function showPreferences() {
    if (panel) { panel.hidden = false; panel.querySelector('button').focus(); return; }
    panel = document.createElement('section');
    panel.className = 'consent-panel';
    panel.setAttribute('aria-label', labels[0]);
    const message = document.createElement('p');
    message.textContent = labels[1];
    const privacy = document.createElement('a');
    privacy.href = '/privacy/';
    privacy.textContent = 'Google Analytics · Privacy (EN)';
    privacy.lang = 'en';
    privacy.className = 'text-link';
    const actions = document.createElement('div');
    actions.className = 'consent-actions';
    for (const [text, value] of [[labels[2], 'granted'], [labels[3], 'denied']]) {
      const button = document.createElement('button');
      button.className = 'button button-secondary';
      button.type = 'button';
      button.textContent = text;
      button.addEventListener('click', () => {
        saveChoice(value);
        if (value === 'granted') { consent = true; enableAnalytics(); }
        else disableAnalytics();
        panel.hidden = true;
        document.querySelector('.consent-settings')?.focus();
        // Unload an already-running vendor after revocation. No script before consent.
        if (loaded && value === 'denied') location.reload();
      });
      actions.appendChild(button);
    }
    panel.append(message, privacy, actions);
    document.body.appendChild(panel);
  }
  if (analyticsEnabled) {
    const settings = document.createElement('button');
    settings.className = 'consent-settings';
    settings.type = 'button';
    settings.textContent = labels[4];
    settings.addEventListener('click', showPreferences);
    document.querySelector('.site-footer')?.appendChild(settings);
    if (storedChoice() === 'granted') enableAnalytics();
    else if (storedChoice() !== 'denied') showPreferences();
  }
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[data-event="app_store_clicked"]');
    if (anchor) emit('app_store_clicked', { placement: anchor.dataset.placement || 'body' });
  });
  for (const item of document.querySelectorAll('.faq-item')) item.addEventListener('toggle', () => {
    if (item.open) emit('faq_opened', { faq_index: [...document.querySelectorAll('.faq-item')].indexOf(item) + 1 });
  });
})();
