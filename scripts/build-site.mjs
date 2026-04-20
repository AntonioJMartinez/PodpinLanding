import fs from 'node:fs/promises';
import path from 'node:path';

import site from '../site.config.mjs';

const rootDir = process.cwd();

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function localePath(locale) {
  return locale.code === site.defaultLocale ? '/' : `/${locale.path}/`;
}

function maybeAbsoluteUrl(pathname) {
  if (!site.siteUrl) return pathname;
  return new URL(pathname, site.siteUrl).toString();
}

function schemaId(pathname, fragment) {
  const base = maybeAbsoluteUrl(pathname);
  return fragment ? `${base}#${fragment}` : base;
}

function renderAlternates(currentLocale) {
  const tags = site.locales
    .map((locale) => {
      const href = maybeAbsoluteUrl(localePath(locale));
      return `  <link rel="alternate" hreflang="${locale.htmlLang}" href="${escapeHtml(href)}" />`;
    })
    .join('\n');

  return `${tags}\n  <link rel="alternate" hreflang="x-default" href="${escapeHtml(
    maybeAbsoluteUrl('/')
  )}" />`;
}

function renderOgAlternates(currentLocale) {
  return site.locales
    .filter((locale) => locale.code !== currentLocale.code)
    .map((locale) => `  <meta property="og:locale:alternate" content="${locale.ogLocale}" />`)
    .join('\n');
}

function renderSchema(locale, pathname) {
  const organization = {
    '@type': 'Organization',
    name: site.organizationName,
    privacyPolicy: site.privacyPolicyUrl,
  };

  const website = {
    '@type': 'WebSite',
    name: site.siteName,
    inLanguage: locale.htmlLang,
  };

  const app = {
    '@type': 'SoftwareApplication',
    name: locale.appName,
    applicationCategory: site.appCategory,
    operatingSystem: site.operatingSystem,
    description: locale.description,
    downloadUrl: site.appStoreUrl,
    installUrl: site.appStoreUrl,
    inLanguage: locale.htmlLang,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: site.appStoreUrl,
    },
  };

  if (site.siteUrl) {
    organization['@id'] = schemaId('/', 'organization');
    organization.url = maybeAbsoluteUrl('/');

    website['@id'] = schemaId('/', 'website');
    website.url = maybeAbsoluteUrl('/');

    app['@id'] = schemaId(pathname, 'app');
    app.url = maybeAbsoluteUrl(pathname);
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, app],
  };

  return JSON.stringify(graph, null, 2).replaceAll('<', '\\u003c');
}

function renderLocaleMenu(locale) {
  const currentPath = localePath(locale);

  return `
      <details class="locale-switcher">
        <summary class="locale-current" aria-label="${escapeHtml(locale.nav.language)}">
          <span>${escapeHtml(locale.nativeLabel)}</span>
          <span aria-hidden="true">▾</span>
        </summary>
        <div class="locale-menu" role="list">
${site.locales
  .map((item) => {
    const href = localePath(item);
    const activeClass = item.code === locale.code ? ' locale-link-active' : '';
    const label = item.code === locale.code ? `${item.nativeLabel} · ${item.label}` : item.nativeLabel;
    return `          <a class="locale-link${activeClass}" role="listitem" href="${href}" lang="${item.htmlLang}" data-locale-link="${item.code}" ${
      href === currentPath ? 'aria-current="page"' : ''
    }>${escapeHtml(label)}</a>`;
  })
  .join('\n')}
        </div>
      </details>`;
}

function renderStatIcon(label) {
  return escapeHtml(label);
}

function renderPage(locale) {
  const pathname = localePath(locale);
  const canonical = maybeAbsoluteUrl(pathname);
  const ogImage = maybeAbsoluteUrl(site.ogImage);
  const smartBannerContent = [`app-id=${site.appStoreId}`];
  const localeMapScript =
    locale.code === site.defaultLocale
      ? `
  <script>
    window.PODPIN_LOCALE_MAP = ${JSON.stringify(
      Object.fromEntries(site.locales.map((item) => [item.code, localePath(item)]))
    )};
  </script>`
      : '';
  const ogUrlTag = site.siteUrl
    ? `\n  <meta property="og:url" content="${escapeHtml(canonical)}" />`
    : '';

  return `<!DOCTYPE html>
<html lang="${locale.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(locale.title)}</title>
  <meta name="description" content="${escapeHtml(locale.description)}" />
  <meta name="keywords" content="${escapeHtml(site.keywords[locale.code] ?? site.keywords.en)}" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <meta name="theme-color" content="#0a0a0a" />
  <meta name="apple-itunes-app" content="${smartBannerContent.join(', ')}" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />
${renderAlternates(locale)}
  <meta property="og:title" content="${escapeHtml(locale.title)}" />
  <meta property="og:description" content="${escapeHtml(locale.description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${escapeHtml(site.siteName)}" />
  <meta property="og:locale" content="${locale.ogLocale}" />
${renderOgAlternates(locale)}
  <meta property="og:image" content="${escapeHtml(ogImage)}" />
  <meta property="og:image:width" content="${site.ogImageWidth}" />
  <meta property="og:image:height" content="${site.ogImageHeight}" />
${ogUrlTag}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(locale.title)}" />
  <meta name="twitter:description" content="${escapeHtml(locale.description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="${pathname === '/' ? 'styles.css' : '../styles.css'}" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📌</text></svg>" />
${localeMapScript}
  <script type="application/ld+json">
${renderSchema(locale, pathname)}
  </script>
</head>
<body>
  <nav class="nav" id="nav">
    <a href="${pathname}" class="nav-logo" aria-label="${escapeHtml(site.siteName)}">
      <div class="nav-logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2C12 2 7 8 7 13a5 5 0 0 0 10 0c0-5-5-11-5-11z"></path>
          <line x1="12" y1="17" x2="12" y2="22"></line>
        </svg>
      </div>
      ${escapeHtml(site.siteName)}
    </a>

    <div class="nav-meta">
      <div class="nav-links" id="nav-links">
        <a href="#features">${escapeHtml(locale.nav.features)}</a>
        <a href="#transcripts">${escapeHtml(locale.nav.transcripts)}</a>
        <a href="#insights">${escapeHtml(locale.nav.insights)}</a>
        <a href="#platforms">${escapeHtml(locale.nav.platforms)}</a>
        <a href="#download" class="nav-cta">${escapeHtml(locale.nav.download)}</a>
      </div>
    </div>

    <button class="nav-hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">☰</button>
  </nav>

  <section class="hero" id="hero">
    <h1>
      <span>${escapeHtml(locale.hero.title[0])}</span>
      <span>${escapeHtml(locale.hero.title[1])}</span>
      <span>${escapeHtml(locale.hero.title[2])}</span>
    </h1>

    <p class="subtitle">
      ${escapeHtml(locale.hero.subtitle)}
    </p>

    <div class="hero-devices">
      <div class="phone-mockup phone-left">
        <img src="${pathname === '/' ? 'assets' : '../assets'}/podcast-detail-dark.png" alt="${escapeHtml(
          site.heroImages[0].alt[locale.code]
        )}" loading="eager" />
      </div>
      <div class="phone-mockup phone-center">
        <img src="${pathname === '/' ? 'assets' : '../assets'}/player.png" alt="${escapeHtml(
          site.heroImages[1].alt[locale.code]
        )}" loading="eager" fetchpriority="high" />
      </div>
      <div class="phone-mockup phone-right">
        <img src="${pathname === '/' ? 'assets' : '../assets'}/library-dark.png" alt="${escapeHtml(
          site.heroImages[2].alt[locale.code]
        )}" loading="eager" />
      </div>
    </div>

    <div class="hero-cta-group">
      <a href="${site.appStoreUrl}" aria-label="Download on the App Store">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="app-store-badge" />
      </a>
      <p class="platform-note">${escapeHtml(locale.hero.badgeNote)}</p>
    </div>
  </section>

  <section class="section" id="transcripts">
    <div class="section-inner">
      <div class="feature-row reveal">
        <div class="feature-text">
          <h2>${escapeHtml(locale.transcripts.title[0])}<br/>${escapeHtml(locale.transcripts.title[1])}</h2>
          <p>${escapeHtml(locale.transcripts.description)}</p>
          <ul class="feature-list">
            <li><span class="feature-list-icon">🎙️</span>${escapeHtml(locale.transcripts.bullets[0])}</li>
            <li><span class="feature-list-icon">🔍</span>${escapeHtml(locale.transcripts.bullets[1])}</li>
            <li><span class="feature-list-icon">✨</span>${escapeHtml(locale.transcripts.bullets[2])}</li>
            <li><span class="feature-list-icon">🔒</span>${escapeHtml(locale.transcripts.bullets[3])}</li>
          </ul>
        </div>

        <div class="feature-visual">
          <div class="feature-phone">
            <img src="${pathname === '/' ? 'assets' : '../assets'}/episode-detail.png" alt="${escapeHtml(
              locale.transcripts.imageAlt
            )}" loading="lazy" />
          </div>

          <div class="floating-card card-top-right">
            <h4>✨ ${escapeHtml(locale.transcripts.summaryTitle)}</h4>
            <p>${escapeHtml(locale.transcripts.summaryText)}</p>
          </div>

          <div class="floating-card card-bottom-left">
            <h4>🔍 ${escapeHtml(locale.transcripts.searchTitle)}</h4>
            <p>${escapeHtml(locale.transcripts.searchText)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="insights">
    <div class="section-inner">
      <div class="feature-row reversed reveal">
        <div class="feature-text">
          <h2>${escapeHtml(locale.insights.title[0])}<br/>${escapeHtml(locale.insights.title[1])}</h2>
          <p>${escapeHtml(locale.insights.description)}</p>
          <ul class="feature-list">
            <li><span class="feature-list-icon">📑</span>${escapeHtml(locale.insights.bullets[0])}</li>
            <li><span class="feature-list-icon">💡</span>${escapeHtml(locale.insights.bullets[1])}</li>
            <li><span class="feature-list-icon">📚</span>${escapeHtml(locale.insights.bullets[2])}</li>
            <li><span class="feature-list-icon">🏷️</span>${escapeHtml(locale.insights.bullets[3])}</li>
          </ul>
        </div>

        <div class="feature-visual">
          <div class="feature-phone">
            <img src="${pathname === '/' ? 'assets' : '../assets'}/podcast-page.png" alt="${escapeHtml(
              locale.insights.imageAlt
            )}" loading="lazy" />
          </div>

          <div class="floating-card card-top-right">
            <h4>📚 ${escapeHtml(locale.insights.referencesTitle)}</h4>
            <p>${escapeHtml(locale.insights.referencesText)}</p>
          </div>

          <div class="floating-card card-bottom-left">
            <h4>💡 ${escapeHtml(locale.insights.keyInsightTitle)}</h4>
            <p>${escapeHtml(locale.insights.keyInsightText)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="features">
    <div class="section-inner">
      <div class="feature-row reveal">
        <div class="feature-text">
          <h2>${escapeHtml(locale.highlights.title[0])}<br/>${escapeHtml(locale.highlights.title[1])}</h2>
          <p>${escapeHtml(locale.highlights.description)}</p>
          <ul class="feature-list">
            <li><span class="feature-list-icon">🔖</span>${escapeHtml(locale.highlights.bullets[0])}</li>
            <li><span class="feature-list-icon">🗒️</span>${escapeHtml(locale.highlights.bullets[1])}</li>
            <li><span class="feature-list-icon">🎨</span>${escapeHtml(locale.highlights.bullets[2])}</li>
            <li><span class="feature-list-icon">🤖</span>${escapeHtml(locale.highlights.bullets[3])}</li>
          </ul>
        </div>

        <div class="feature-visual">
          <div class="feature-phone">
            <img src="${pathname === '/' ? 'assets' : '../assets'}/library-light.png" alt="${escapeHtml(
              locale.highlights.imageAlt
            )}" loading="lazy" />
          </div>

          <div class="floating-card card-top-right">
            <h4>📌 ${escapeHtml(locale.highlights.pinnedTitle)}</h4>
            <p>${escapeHtml(locale.highlights.pinnedText)}</p>
          </div>

          <div class="floating-card card-bottom-left">
            <h4>🤖 ${escapeHtml(locale.highlights.recapTitle)}</h4>
            <p>${escapeHtml(locale.highlights.recapText)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="stats-strip">
    <div class="stats-grid">
${locale.stats
  .map(
    (item, index) => `      <div class="stat-item reveal${index ? ` reveal-delay-${index}` : ''}">
        <span class="stat-icon">${renderStatIcon(item.icon)}</span>
        <span class="stat-title">${escapeHtml(item.title)}</span>
        <span class="stat-desc">${escapeHtml(item.description)}</span>
      </div>`
  )
  .join('\n')}
    </div>
  </div>

  <section class="section macos-showcase" id="platforms">
    <div class="section-inner">
      <div class="section-header reveal">
        <h2>${escapeHtml(locale.platforms.title[0])}<br/>${escapeHtml(locale.platforms.title[1])}</h2>
        <p>${escapeHtml(locale.platforms.description)}</p>
      </div>

      <div class="device-showcase-row reveal">
        <div class="device-showcase-phone">
          <img src="${pathname === '/' ? 'assets' : '../assets'}/library-dark.png" alt="${escapeHtml(
            locale.platforms.imageAlts[0]
          )}" loading="lazy" />
        </div>
        <div class="device-showcase-phone">
          <img src="${pathname === '/' ? 'assets' : '../assets'}/podcast-detail-dark.png" alt="${escapeHtml(
            locale.platforms.imageAlts[1]
          )}" loading="lazy" />
        </div>
        <div class="device-showcase-phone">
          <img src="${pathname === '/' ? 'assets' : '../assets'}/player.png" alt="${escapeHtml(
            locale.platforms.imageAlts[2]
          )}" loading="lazy" />
        </div>
      </div>

      <div class="platform-tags reveal">
${locale.platforms.tags.map((tag) => `        <span class="platform-tag">${escapeHtml(tag)}</span>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="cta-section" id="download">
    <h2 class="reveal">${escapeHtml(locale.cta.title[0])}<br/><span class="gradient-text">${escapeHtml(
      locale.cta.title[1]
    )}</span></h2>
    <p class="subtitle reveal reveal-delay-1">${escapeHtml(locale.cta.subtitle)}</p>

    <div class="cta-badges reveal reveal-delay-2">
      <a href="${site.appStoreUrl}" aria-label="Download on the App Store">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="app-store-badge" />
      </a>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-brand">${escapeHtml(site.siteName)}</span>
      <div class="footer-links">
        <a href="${site.privacyPolicyUrl}" rel="noopener noreferrer">${escapeHtml(locale.footer.privacy)}</a>
        <a href="${site.appStoreUrl}" rel="noopener noreferrer">${escapeHtml(locale.footer.appStore)}</a>
        <a href="#download">${escapeHtml(locale.footer.download)}</a>
      </div>
${renderLocaleMenu(locale)}
      <span class="footer-copy">${escapeHtml(locale.footer.copyright)}</span>
    </div>
  </footer>

  <script src="${pathname === '/' ? 'script.js' : '../script.js'}"></script>
</body>
</html>`;
}

function renderRobotsTxt() {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: anthropic-ai',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    'User-agent: Applebot',
    'Allow: /',
  ];

  if (site.siteUrl) {
    lines.push('', `Sitemap: ${maybeAbsoluteUrl('/sitemap.xml')}`);
  }

  return `${lines.join('\n')}\n`;
}

function renderSitemapXml() {
  if (!site.siteUrl) return null;

  const urls = site.locales
    .map((locale) => {
      const loc = maybeAbsoluteUrl(localePath(locale));
      return `  <url>
    <loc>${escapeHtml(loc)}</loc>
${site.locales
  .map((altLocale) => {
    const href = maybeAbsoluteUrl(localePath(altLocale));
    return `    <xhtml:link rel="alternate" hreflang="${altLocale.htmlLang}" href="${escapeHtml(href)}" />`;
  })
  .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(
      maybeAbsoluteUrl('/')
    )}" />
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

async function writeFile(relativePath, content) {
  const outputPath = path.join(rootDir, relativePath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content);
}

async function build() {
  for (const locale of site.locales) {
    const relativePath = locale.code === site.defaultLocale ? 'index.html' : `${locale.path}/index.html`;
    await writeFile(relativePath, renderPage(locale));
  }

  await writeFile('robots.txt', renderRobotsTxt());

  const sitemap = renderSitemapXml();
  if (sitemap) {
    await writeFile('sitemap.xml', sitemap);
  }
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
