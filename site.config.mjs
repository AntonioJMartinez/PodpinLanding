// SITE_URL can override the production origin for previews or alternate deployments.
const siteUrl = (process.env.SITE_URL ?? 'https://getpodpin.com').trim();

const sharedContent = {
  appStoreUrl: 'https://apps.apple.com/app/id6760191862',
  appStoreId: '6760191862',
  privacyPolicyUrl: 'https://www.notion.so/31f34bbaf0bc80f9a4dbcdc5e5dc6f91',
  ogImage: '/assets/screenshot-extra.jpg',
  ogImageWidth: 1024,
  ogImageHeight: 640,
  heroImages: [
    {
      src: '/assets/podcast-detail-dark.png',
      alt: {
        en: 'Podpin podcast detail view',
        es: 'Vista de detalle del podcast en Podpin',
        fr: 'Vue détail du podcast dans Podpin',
        it: 'Vista dettaglio podcast in Podpin',
        de: 'Podcast-Detailansicht in Podpin',
        pt: 'Vista de detalhes do podcast no Podpin',
        zh: 'Podpin 播客详情页面',
      },
    },
    {
      src: '/assets/player.png',
      alt: {
        en: 'Podpin now playing screen',
        es: 'Pantalla de reproducción en Podpin',
        fr: 'Écran de lecture Podpin',
        it: 'Schermata di riproduzione di Podpin',
        de: 'Podpin Wiedergabebildschirm',
        pt: 'Tela de reprodução do Podpin',
        zh: 'Podpin 正在播放页面',
      },
    },
    {
      src: '/assets/library-dark.png',
      alt: {
        en: 'Podpin library view',
        es: 'Vista de biblioteca en Podpin',
        fr: 'Vue bibliothèque dans Podpin',
        it: 'Vista libreria di Podpin',
        de: 'Podpin Mediatheksansicht',
        pt: 'Vista da biblioteca do Podpin',
        zh: 'Podpin 资料库页面',
      },
    },
  ],
};

export default {
  siteName: 'Podpin',
  siteUrl,
  defaultLocale: 'en',
  organizationName: 'Podpin',
  slogan: 'Listen. Learn. Remember.',
  appCategory: 'MultimediaApplication',
  operatingSystem: 'iOS, iPadOS, macOS',
  keywords: {
    en: 'AI podcast player, podcast transcripts, podcast summaries, podcast highlights, podcast app, iPhone podcast app, Mac podcast app',
    es: 'reproductor de podcasts con IA, transcripciones de podcasts, resúmenes de podcasts, app de podcasts para iPhone, app de podcasts para Mac',
    fr: 'lecteur de podcasts IA, transcription de podcasts, résumés de podcasts, application podcast iPhone, application podcast Mac',
    it: 'lettore podcast con IA, trascrizioni podcast, riassunti podcast, app podcast per iPhone, app podcast per Mac',
    de: 'KI Podcast Player, Podcast Transkripte, Podcast Zusammenfassungen, Podcast App für iPhone, Podcast App für Mac',
    pt: 'player de podcast com IA, transcrições de podcast, resumos de podcast, aplicativo de podcast para iPhone, aplicativo de podcast para Mac',
    zh: 'AI播客播放器, 播客转录, 播客摘要, 播客高亮, iPhone播客应用, Mac播客应用',
  },
  ...sharedContent,
  locales: [
    {
      code: 'en',
      path: '',
      htmlLang: 'en',
      ogLocale: 'en_US',
      label: 'English',
      nativeLabel: 'English',
      title: 'Podpin — AI Podcast Player | Listen. Learn. Remember.',
      description:
        'Podpin is the AI podcast player that helps you listen, learn, and remember with transcripts, summaries, highlights, chapters, and native apps for iPhone, iPad, and Mac.',
      appName: 'AI Podcast Player : Podpin',
      appSubtitle: 'Summaries, Bookmarks, Notes',
      nav: {
        features: 'Features',
        transcripts: 'Transcripts',
        insights: 'Insights',
        platforms: 'Platforms',
        download: 'Download',
        language: 'Language',
      },
      hero: {
        title: ['Listen.', 'Learn.', 'Remember.'],
        subtitle:
          'The AI-powered podcast player that turns every episode into memorable, pinnable knowledge.',
        badgeNote: 'Native on iPhone, iPad, and Mac',
      },
      transcripts: {
        label: 'AI Transcripts',
        title: ['Every Word,', 'Written for You'],
        description:
          'Automatic on-device transcripts so you can read along, search, and jump to any moment in an episode.',
        bullets: [
          'Real-time transcription while you listen',
          'Search across all your transcripts instantly',
          'AI-generated episode summaries',
          '100% on-device — your data stays private',
        ],
        summaryTitle: 'Episode Summary',
        summaryText:
          'This episode explores how on-device AI is making podcast features faster and more private.',
        searchTitle: 'Search',
        searchText: '"neural networks" found in 3 episodes',
        imageAlt: 'Episode detail with transcript',
      },
      insights: {
        label: 'Smart Insights',
        title: ['Episodes That', 'Explain Themselves'],
        description:
          'AI auto-generates key insights, chapter breakdowns, and tracks books, films, and references mentioned in each episode.',
        bullets: [
          'Auto-generated chapters with topics',
          'Key insights extracted and tagged',
          'Books, films, and links mentioned — tracked',
          'Smart tags for deeper exploration',
        ],
        referencesTitle: 'References',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Key Insight',
        keyInsightText:
          'Neural networks process language similarly to how humans develop understanding.',
        imageAlt: 'Podcast detail page',
      },
      highlights: {
        label: 'Highlights & Pins',
        title: ['Pin Your Moments.', 'Connect Your Dots.'],
        description:
          'Bookmark the moments that matter. Add notes, color-code, and build your personal knowledge base from every podcast you listen to.',
        bullets: [
          'One-tap bookmarks while listening',
          'Personal notes on any highlight',
          'Color-coded organization',
          'AI-powered highlight recaps',
        ],
        pinnedTitle: 'Pinned',
        pinnedText:
          '"There are a couple brain regions that do this, and these brain regions are very special..."',
        recapTitle: 'AI Recap',
        recapText: '3 highlights summarized into key takeaways',
        imageAlt: 'Library light mode',
      },
      stats: [
        {
          icon: 'AI',
          title: 'AI-Powered',
          description: 'On-device transcription, summaries, and insights',
        },
        {
          icon: 'Private',
          title: 'Private',
          description: 'All processing happens locally on your device',
        },
        {
          icon: 'Devices',
          title: 'Universal',
          description: 'iPhone, iPad, and Mac — one app, everywhere',
        },
        {
          icon: 'Swift',
          title: 'Fast',
          description: 'Built with Swift for native performance',
        },
      ],
      platforms: {
        label: 'All Your Devices',
        title: ['One App.', 'Everywhere You Listen.'],
        description:
          'Beautiful on iPhone. Powerful on Mac. Your library, highlights, and progress sync seamlessly across all your Apple devices.',
        tags: ['iPhone', 'iPad', 'Mac', 'CloudKit Sync', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin on iPhone — Dark Mode', 'Podpin podcast detail', 'Podpin player'],
      },
      cta: {
        title: ['Start Listening', 'Smarter'],
        subtitle:
          'Turn every podcast into knowledge you can search, pin, and revisit. Download Podpin free today.',
      },
      footer: {
        privacy: 'Privacy Policy',
        appStore: 'App Store',
        download: 'Download',
        copyright: '© 2026 Podpin. All rights reserved.',
      },
    },
    {
      code: 'es',
      path: 'es',
      htmlLang: 'es',
      ogLocale: 'es_ES',
      label: 'Spanish',
      nativeLabel: 'Español',
      title: 'Podpin — Reproductor de podcasts con IA | Escucha. Aprende. Recuerda.',
      description:
        'Podpin es el reproductor de podcasts con IA que te ayuda a escuchar, aprender y recordar con transcripciones, resúmenes, destacados, capítulos y apps nativas para iPhone, iPad y Mac.',
      appName: 'Reproductor Podcast : Podpin',
      appSubtitle: 'AI Transcripción y Resúmenes',
      nav: {
        features: 'Funciones',
        transcripts: 'Transcripciones',
        insights: 'Ideas clave',
        platforms: 'Plataformas',
        download: 'Descargar',
        language: 'Idioma',
      },
      hero: {
        title: ['Escucha.', 'Aprende.', 'Recuerda.'],
        subtitle:
          'El reproductor de podcasts con IA que convierte cada episodio en conocimiento buscable y guardable.',
        badgeNote: 'Nativo en iPhone, iPad y Mac',
      },
      transcripts: {
        label: 'Transcripciones con IA',
        title: ['Cada palabra,', 'escrita para ti'],
        description:
          'Transcripciones automáticas en el dispositivo para que leas, busques y saltes a cualquier momento del episodio.',
        bullets: [
          'Transcripción en tiempo real mientras escuchas',
          'Busca en todas tus transcripciones al instante',
          'Resúmenes de episodios generados por IA',
          '100 % en el dispositivo: tus datos siguen siendo privados',
        ],
        summaryTitle: 'Resumen del episodio',
        summaryText:
          'Este episodio explora cómo la IA en el dispositivo hace que las funciones de podcast sean más rápidas y privadas.',
        searchTitle: 'Buscar',
        searchText: '"redes neuronales" encontrado en 3 episodios',
        imageAlt: 'Detalle del episodio con transcripción',
      },
      insights: {
        label: 'Ideas clave inteligentes',
        title: ['Episodios que', 'se explican solos'],
        description:
          'La IA genera ideas clave, capítulos y rastrea libros, películas y referencias mencionadas en cada episodio.',
        bullets: [
          'Capítulos generados automáticamente por tema',
          'Ideas clave extraídas y etiquetadas',
          'Libros, películas y enlaces mencionados, registrados',
          'Etiquetas inteligentes para profundizar',
        ],
        referencesTitle: 'Referencias',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Idea clave',
        keyInsightText:
          'Las redes neuronales procesan el lenguaje de forma similar a como los humanos desarrollan comprensión.',
        imageAlt: 'Página de detalle del podcast',
      },
      highlights: {
        label: 'Destacados y pines',
        title: ['Fija tus momentos.', 'Conecta tus ideas.'],
        description:
          'Guarda los momentos que importan. Añade notas, organiza por colores y crea tu base de conocimiento personal con cada podcast.',
        bullets: [
          'Marcadores con un toque mientras escuchas',
          'Notas personales en cualquier destacado',
          'Organización por colores',
          'Recaps de destacados impulsados por IA',
        ],
        pinnedTitle: 'Fijado',
        pinnedText:
          '"Hay un par de regiones cerebrales que hacen esto, y son regiones muy especiales..."',
        recapTitle: 'Recap IA',
        recapText: '3 destacados resumidos en ideas clave',
        imageAlt: 'Biblioteca en modo claro',
      },
      stats: [
        {
          icon: 'IA',
          title: 'Con IA',
          description: 'Transcripción, resúmenes e ideas clave en el dispositivo',
        },
        {
          icon: 'Privado',
          title: 'Privado',
          description: 'Todo el procesamiento ocurre localmente en tu dispositivo',
        },
        {
          icon: 'Dispositivos',
          title: 'Universal',
          description: 'iPhone, iPad y Mac: una sola app en todas partes',
        },
        {
          icon: 'Swift',
          title: 'Rápido',
          description: 'Hecho con Swift para rendimiento nativo',
        },
      ],
      platforms: {
        label: 'Todos tus dispositivos',
        title: ['Una app.', 'Escucha en cualquier lugar.'],
        description:
          'Bonita en iPhone. Potente en Mac. Tu biblioteca, destacados y progreso se sincronizan sin fricción en todos tus dispositivos Apple.',
        tags: ['iPhone', 'iPad', 'Mac', 'Sincronización CloudKit', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin en iPhone — modo oscuro', 'Detalle del podcast en Podpin', 'Reproductor de Podpin'],
      },
      cta: {
        title: ['Empieza a escuchar', 'mejor'],
        subtitle:
          'Convierte cada podcast en conocimiento que puedes buscar, fijar y revisitar. Descarga Podpin gratis hoy.',
      },
      footer: {
        privacy: 'Política de privacidad',
        appStore: 'App Store',
        download: 'Descargar',
        copyright: '© 2026 Podpin. Todos los derechos reservados.',
      },
    },
    {
      code: 'fr',
      path: 'fr',
      htmlLang: 'fr',
      ogLocale: 'fr_FR',
      label: 'French',
      nativeLabel: 'Français',
      title: 'Podpin — Lecteur de podcasts avec IA | Écoutez. Apprenez. Retenez.',
      description:
        "Podpin est le lecteur de podcasts IA qui vous aide à écouter, apprendre et retenir grâce aux transcriptions, résumés, passages enregistrés, chapitres et apps natives pour iPhone, iPad et Mac.",
      appName: 'Lecteur podcast : Podpin',
      appSubtitle: 'Transcription et signets',
      nav: {
        features: 'Fonctions',
        transcripts: 'Transcriptions',
        insights: 'Analyses',
        platforms: 'Plateformes',
        download: 'Télécharger',
        language: 'Langue',
      },
      hero: {
        title: ['Écoutez.', 'Apprenez.', 'Retenez.'],
        subtitle:
          "Le lecteur de podcasts propulsé par l'IA qui transforme chaque épisode en connaissance consultable et épinglable.",
        badgeNote: 'Natif sur iPhone, iPad et Mac',
      },
      transcripts: {
        label: 'Transcriptions IA',
        title: ['Chaque mot,', 'rédigé pour vous'],
        description:
          "Des transcriptions automatiques sur l'appareil pour lire, rechercher et accéder à n'importe quel moment d'un épisode.",
        bullets: [
          'Transcription en temps réel pendant l’écoute',
          'Recherche instantanée dans toutes vos transcriptions',
          "Résumés d'épisodes générés par IA",
          '100 % sur l’appareil : vos données restent privées',
        ],
        summaryTitle: "Résumé de l'épisode",
        summaryText:
          "Cet épisode explique comment l'IA embarquée rend les fonctions podcast plus rapides et plus privées.",
        searchTitle: 'Recherche',
        searchText: '"réseaux neuronaux" trouvé dans 3 épisodes',
        imageAlt: "Détail d'épisode avec transcription",
      },
      insights: {
        label: 'Analyses intelligentes',
        title: ["Des épisodes qui", "s'expliquent d'eux-mêmes"],
        description:
          "L'IA génère automatiquement les idées clés, les chapitres et les références de livres, films et liens cités dans chaque épisode.",
        bullets: [
          'Chapitres générés automatiquement par sujet',
          'Idées clés extraites et étiquetées',
          'Livres, films et liens mentionnés suivis',
          'Tags intelligents pour approfondir',
        ],
        referencesTitle: 'Références',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Idée clé',
        keyInsightText:
          'Les réseaux neuronaux traitent le langage d’une manière proche du développement de la compréhension humaine.',
        imageAlt: 'Page de détail du podcast',
      },
      highlights: {
        label: 'Signets et repères',
        title: ['Épinglez vos moments.', 'Reliez vos idées.'],
        description:
          'Enregistrez les moments qui comptent. Ajoutez des notes, classez par couleur et créez votre base de connaissances personnelle à partir de chaque podcast.',
        bullets: [
          'Signets en un geste pendant l’écoute',
          'Notes personnelles sur chaque passage',
          'Organisation par code couleur',
          'Récaps des passages générés par IA',
        ],
        pinnedTitle: 'Épinglé',
        pinnedText:
          '"Il existe quelques régions du cerveau qui font cela, et ces régions sont très particulières..."',
        recapTitle: 'Récap IA',
        recapText: '3 passages résumés en idées clés',
        imageAlt: 'Bibliothèque en mode clair',
      },
      stats: [
        {
          icon: 'IA',
          title: 'Propulsé par IA',
          description: 'Transcription, résumés et analyses sur l’appareil',
        },
        {
          icon: 'Privé',
          title: 'Privé',
          description: 'Tout le traitement se fait localement sur votre appareil',
        },
        {
          icon: 'Appareils',
          title: 'Universel',
          description: 'iPhone, iPad et Mac : une seule app partout',
        },
        {
          icon: 'Swift',
          title: 'Rapide',
          description: 'Conçu en Swift pour des performances natives',
        },
      ],
      platforms: {
        label: 'Tous vos appareils',
        title: ['Une seule app.', 'Partout où vous écoutez.'],
        description:
          'Superbe sur iPhone. Puissante sur Mac. Votre bibliothèque, vos signets et votre progression se synchronisent sur tous vos appareils Apple.',
        tags: ['iPhone', 'iPad', 'Mac', 'Synchronisation CloudKit', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin sur iPhone — mode sombre', 'Détail du podcast dans Podpin', 'Lecteur Podpin'],
      },
      cta: {
        title: ['Commencez à écouter', 'plus intelligemment'],
        subtitle:
          'Transformez chaque podcast en connaissance que vous pouvez rechercher, épingler et retrouver. Téléchargez Podpin gratuitement dès aujourd’hui.',
      },
      footer: {
        privacy: 'Politique de confidentialité',
        appStore: 'App Store',
        download: 'Télécharger',
        copyright: '© 2026 Podpin. Tous droits réservés.',
      },
    },
    {
      code: 'it',
      path: 'it',
      htmlLang: 'it',
      ogLocale: 'it_IT',
      label: 'Italian',
      nativeLabel: 'Italiano',
      title: 'Podpin — Lettore podcast con IA | Ascolta. Impara. Ricorda.',
      description:
        'Podpin è il lettore podcast con IA che ti aiuta ad ascoltare, imparare e ricordare con trascrizioni, riassunti, evidenziazioni, capitoli e app native per iPhone, iPad e Mac.',
      appName: 'Lettore Podcast : Podpin',
      appSubtitle: 'Trascrizioni e segnalibri',
      nav: {
        features: 'Funzioni',
        transcripts: 'Trascrizioni',
        insights: 'Insight',
        platforms: 'Piattaforme',
        download: 'Scarica',
        language: 'Lingua',
      },
      hero: {
        title: ['Ascolta.', 'Impara.', 'Ricorda.'],
        subtitle:
          'Il lettore podcast con IA che trasforma ogni episodio in conoscenza ricercabile e appuntabile.',
        badgeNote: 'Nativo su iPhone, iPad e Mac',
      },
      transcripts: {
        label: 'Trascrizioni IA',
        title: ['Ogni parola,', 'scritta per te'],
        description:
          "Trascrizioni automatiche sul dispositivo per leggere, cercare e saltare a qualsiasi momento di un episodio.",
        bullets: [
          'Trascrizione in tempo reale mentre ascolti',
          'Ricerca istantanea in tutte le trascrizioni',
          'Riassunti degli episodi generati con IA',
          '100% on-device: i tuoi dati restano privati',
        ],
        summaryTitle: "Riassunto dell'episodio",
        summaryText:
          "Questo episodio esplora come l'IA on-device renda le funzioni podcast più veloci e più private.",
        searchTitle: 'Cerca',
        searchText: '"reti neurali" trovato in 3 episodi',
        imageAlt: 'Dettaglio episodio con trascrizione',
      },
      insights: {
        label: 'Insight intelligenti',
        title: ['Episodi che', 'si spiegano da soli'],
        description:
          'L’IA genera automaticamente insight chiave, capitoli e tiene traccia di libri, film e riferimenti citati in ogni episodio.',
        bullets: [
          'Capitoli generati automaticamente per argomento',
          'Insight chiave estratti e taggati',
          'Libri, film e link citati, tracciati',
          'Tag intelligenti per approfondire',
        ],
        referencesTitle: 'Riferimenti',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Insight chiave',
        keyInsightText:
          'Le reti neurali elaborano il linguaggio in modo simile a come gli esseri umani sviluppano comprensione.',
        imageAlt: 'Pagina dettaglio podcast',
      },
      highlights: {
        label: 'Highlight e pin',
        title: ['Fissa i momenti.', 'Collega le idee.'],
        description:
          'Salva i momenti che contano. Aggiungi note, usa i colori e costruisci la tua base di conoscenza personale da ogni podcast.',
        bullets: [
          'Segnalibri con un tocco durante l’ascolto',
          'Note personali su qualsiasi highlight',
          'Organizzazione per colori',
          'Recap degli highlight con IA',
        ],
        pinnedTitle: 'Fissato',
        pinnedText:
          '"Ci sono un paio di regioni cerebrali che fanno questo, e queste regioni sono molto speciali..."',
        recapTitle: 'Recap IA',
        recapText: '3 highlight riassunti in punti chiave',
        imageAlt: 'Libreria in modalità chiara',
      },
      stats: [
        {
          icon: 'IA',
          title: 'Con IA',
          description: 'Trascrizione, riassunti e insight sul dispositivo',
        },
        {
          icon: 'Privato',
          title: 'Privato',
          description: 'Tutta l’elaborazione avviene localmente sul tuo dispositivo',
        },
        {
          icon: 'Dispositivi',
          title: 'Universale',
          description: 'iPhone, iPad e Mac: una sola app ovunque',
        },
        {
          icon: 'Swift',
          title: 'Veloce',
          description: 'Costruita in Swift per prestazioni native',
        },
      ],
      platforms: {
        label: 'Tutti i tuoi dispositivi',
        title: ['Una sola app.', 'Ovunque ascolti.'],
        description:
          'Bellissima su iPhone. Potente su Mac. Libreria, highlight e progressi si sincronizzano senza attriti su tutti i tuoi dispositivi Apple.',
        tags: ['iPhone', 'iPad', 'Mac', 'Sync CloudKit', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin su iPhone — modalità scura', 'Dettaglio podcast in Podpin', 'Player Podpin'],
      },
      cta: {
        title: ['Inizia ad ascoltare', 'meglio'],
        subtitle:
          'Trasforma ogni podcast in conoscenza che puoi cercare, fissare e ritrovare. Scarica Podpin gratis oggi.',
      },
      footer: {
        privacy: 'Privacy policy',
        appStore: 'App Store',
        download: 'Scarica',
        copyright: '© 2026 Podpin. Tutti i diritti riservati.',
      },
    },
    {
      code: 'de',
      path: 'de',
      htmlLang: 'de',
      ogLocale: 'de_DE',
      label: 'German',
      nativeLabel: 'Deutsch',
      title: 'Podpin — KI-Podcast-Player | Hören. Lernen. Merken.',
      description:
        'Podpin ist der KI-Podcast-Player, mit dem du mit Transkripten, Zusammenfassungen, Highlights, Kapiteln und nativen Apps für iPhone, iPad und Mac besser hören, lernen und behalten kannst.',
      appName: 'Podcast Player : Podpin',
      appSubtitle: 'Transkript & Lesezeichen',
      nav: {
        features: 'Funktionen',
        transcripts: 'Transkripte',
        insights: 'Insights',
        platforms: 'Plattformen',
        download: 'Laden',
        language: 'Sprache',
      },
      hero: {
        title: ['Hören.', 'Lernen.', 'Merken.'],
        subtitle:
          'Der KI-gestützte Podcast-Player, der jede Episode in durchsuchbares, anheftbares Wissen verwandelt.',
        badgeNote: 'Nativ auf iPhone, iPad und Mac',
      },
      transcripts: {
        label: 'KI-Transkripte',
        title: ['Jedes Wort,', 'für dich festgehalten'],
        description:
          'Automatische On-Device-Transkripte, damit du mitlesen, suchen und zu jedem Moment einer Episode springen kannst.',
        bullets: [
          'Echtzeit-Transkription während des Hörens',
          'Sofortige Suche in all deinen Transkripten',
          'KI-generierte Episodenzusammenfassungen',
          '100 % auf dem Gerät – deine Daten bleiben privat',
        ],
        summaryTitle: 'Episodenzusammenfassung',
        summaryText:
          'Diese Episode zeigt, wie On-Device-KI Podcast-Funktionen schneller und privater macht.',
        searchTitle: 'Suche',
        searchText: '"neuronale netze" in 3 Episoden gefunden',
        imageAlt: 'Episodendetail mit Transkript',
      },
      insights: {
        label: 'Smarte Insights',
        title: ['Episoden, die', 'sich selbst erklären'],
        description:
          'Die KI erstellt automatisch Kernaussagen, Kapitel und erfasst Bücher, Filme und Referenzen aus jeder Episode.',
        bullets: [
          'Automatisch generierte Kapitel nach Themen',
          'Extrahierte und markierte Kernaussagen',
          'Erwähnte Bücher, Filme und Links im Blick',
          'Smarte Tags für tiefere Erkundung',
        ],
        referencesTitle: 'Referenzen',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Kernaussage',
        keyInsightText:
          'Neuronale Netze verarbeiten Sprache ähnlich wie Menschen Verständnis aufbauen.',
        imageAlt: 'Podcast-Detailseite',
      },
      highlights: {
        label: 'Highlights & Pins',
        title: ['Markiere Momente.', 'Verbinde Gedanken.'],
        description:
          'Speichere die Momente, die wichtig sind. Füge Notizen hinzu, organisiere per Farbe und baue aus jedem Podcast deine persönliche Wissensbasis auf.',
        bullets: [
          'Lesezeichen mit einem Tippen beim Hören',
          'Persönliche Notizen zu jedem Highlight',
          'Farbkodierte Organisation',
          'KI-gestützte Highlight-Zusammenfassungen',
        ],
        pinnedTitle: 'Angepinnt',
        pinnedText:
          '"Es gibt ein paar Hirnregionen, die das tun, und diese Regionen sind sehr besonders..."',
        recapTitle: 'KI-Recap',
        recapText: '3 Highlights in zentrale Erkenntnisse zusammengefasst',
        imageAlt: 'Mediathek im Hellmodus',
      },
      stats: [
        {
          icon: 'KI',
          title: 'Mit KI',
          description: 'On-Device-Transkription, Zusammenfassungen und Insights',
        },
        {
          icon: 'Privat',
          title: 'Privat',
          description: 'Die gesamte Verarbeitung findet lokal auf deinem Gerät statt',
        },
        {
          icon: 'Geräte',
          title: 'Universell',
          description: 'iPhone, iPad und Mac – eine App überall',
        },
        {
          icon: 'Swift',
          title: 'Schnell',
          description: 'Für native Performance in Swift gebaut',
        },
      ],
      platforms: {
        label: 'Alle deine Geräte',
        title: ['Eine App.', 'Überall, wo du hörst.'],
        description:
          'Großartig auf dem iPhone. Leistungsstark auf dem Mac. Deine Mediathek, Highlights und dein Fortschritt synchronisieren sich nahtlos über alle Apple-Geräte.',
        tags: ['iPhone', 'iPad', 'Mac', 'CloudKit-Sync', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin auf dem iPhone – Dunkelmodus', 'Podcast-Detail in Podpin', 'Podpin-Player'],
      },
      cta: {
        title: ['Jetzt intelligenter', 'hören'],
        subtitle:
          'Mach aus jedem Podcast Wissen, das du suchen, anpinnen und wiederfinden kannst. Lade Podpin noch heute kostenlos herunter.',
      },
      footer: {
        privacy: 'Datenschutz',
        appStore: 'App Store',
        download: 'Laden',
        copyright: '© 2026 Podpin. Alle Rechte vorbehalten.',
      },
    },
    {
      code: 'pt',
      path: 'pt',
      htmlLang: 'pt',
      ogLocale: 'pt_BR',
      label: 'Portuguese',
      nativeLabel: 'Português',
      title: 'Podpin — Player de podcast com IA | Ouça. Aprenda. Lembre.',
      description:
        'Podpin é o player de podcast com IA que ajuda você a ouvir, aprender e lembrar com transcrições, resumos, destaques, capítulos e apps nativos para iPhone, iPad e Mac.',
      appName: 'Player de podcast : Podpin',
      appSubtitle: 'Transcrição e destaques',
      nav: {
        features: 'Recursos',
        transcripts: 'Transcrições',
        insights: 'Insights',
        platforms: 'Plataformas',
        download: 'Baixar',
        language: 'Idioma',
      },
      hero: {
        title: ['Ouça.', 'Aprenda.', 'Lembre.'],
        subtitle:
          'O player de podcast com IA que transforma cada episódio em conhecimento memorável e fácil de fixar.',
        badgeNote: 'Nativo no iPhone, iPad e Mac',
      },
      transcripts: {
        label: 'Transcrições com IA',
        title: ['Cada palavra,', 'escrita para você'],
        description:
          'Transcrições automáticas no dispositivo para ler, pesquisar e ir direto para qualquer momento do episódio.',
        bullets: [
          'Transcrição em tempo real enquanto você ouve',
          'Pesquise em todas as suas transcrições instantaneamente',
          'Resumos de episódios gerados por IA',
          '100% no dispositivo — seus dados continuam privados',
        ],
        summaryTitle: 'Resumo do episódio',
        summaryText:
          'Este episódio explora como a IA no dispositivo está tornando os recursos de podcast mais rápidos e mais privados.',
        searchTitle: 'Buscar',
        searchText: '"redes neurais" encontrado em 3 episódios',
        imageAlt: 'Detalhe do episódio com transcrição',
      },
      insights: {
        label: 'Insights inteligentes',
        title: ['Episódios que', 'se explicam sozinhos'],
        description:
          'A IA gera automaticamente insights principais, capítulos e acompanha livros, filmes e referências mencionados em cada episódio.',
        bullets: [
          'Capítulos gerados automaticamente por assunto',
          'Insights principais extraídos e organizados',
          'Livros, filmes e links mencionados rastreados',
          'Tags inteligentes para explorar mais a fundo',
        ],
        referencesTitle: 'Referências',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: 'Insight principal',
        keyInsightText:
          'Redes neurais processam linguagem de forma parecida com a maneira como humanos desenvolvem compreensão.',
        imageAlt: 'Página de detalhe do podcast',
      },
      highlights: {
        label: 'Destaques e pins',
        title: ['Fixe momentos.', 'Conecte ideias.'],
        description:
          'Salve os momentos que importam. Adicione notas, organize por cor e construa sua base de conhecimento pessoal a partir de cada podcast.',
        bullets: [
          'Favoritos com um toque enquanto você ouve',
          'Notas pessoais em qualquer destaque',
          'Organização por cores',
          'Recaps de destaques com IA',
        ],
        pinnedTitle: 'Fixado',
        pinnedText:
          '"Existem algumas regiões do cérebro que fazem isso, e essas regiões são muito especiais..."',
        recapTitle: 'Recap IA',
        recapText: '3 destaques resumidos em aprendizados principais',
        imageAlt: 'Biblioteca em modo claro',
      },
      stats: [
        {
          icon: 'IA',
          title: 'Com IA',
          description: 'Transcrição, resumos e insights no dispositivo',
        },
        {
          icon: 'Privado',
          title: 'Privado',
          description: 'Todo o processamento acontece localmente no seu dispositivo',
        },
        {
          icon: 'Dispositivos',
          title: 'Universal',
          description: 'iPhone, iPad e Mac — um app em todos os lugares',
        },
        {
          icon: 'Swift',
          title: 'Rápido',
          description: 'Feito em Swift para desempenho nativo',
        },
      ],
      platforms: {
        label: 'Todos os seus dispositivos',
        title: ['Um app.', 'Onde você ouvir.'],
        description:
          'Bonito no iPhone. Poderoso no Mac. Sua biblioteca, destaques e progresso sincronizam perfeitamente em todos os seus dispositivos Apple.',
        tags: ['iPhone', 'iPad', 'Mac', 'Sincronização CloudKit', 'Apple Watch', 'CarPlay'],
        imageAlts: ['Podpin no iPhone — modo escuro', 'Detalhe do podcast no Podpin', 'Player do Podpin'],
      },
      cta: {
        title: ['Comece a ouvir', 'melhor'],
        subtitle:
          'Transforme cada podcast em conhecimento que você pode buscar, fixar e revisitar. Baixe o Podpin grátis hoje.',
      },
      footer: {
        privacy: 'Política de privacidade',
        appStore: 'App Store',
        download: 'Baixar',
        copyright: '© 2026 Podpin. Todos os direitos reservados.',
      },
    },
    {
      code: 'zh',
      path: 'zh',
      htmlLang: 'zh-Hans',
      ogLocale: 'zh_CN',
      label: 'Chinese',
      nativeLabel: '中文',
      title: 'Podpin — AI 播客播放器 | 听见重点，学会记住。',
      description:
        'Podpin 是一款 AI 播客播放器，帮助你通过转录、摘要、高亮、章节和原生 iPhone、iPad、Mac 应用更好地收听、学习和记住内容。',
      appName: 'AI播客播放器 : Podpin',
      appSubtitle: '转录、书签、摘要',
      nav: {
        features: '功能',
        transcripts: '转录',
        insights: '洞察',
        platforms: '平台',
        download: '下载',
        language: '语言',
      },
      hero: {
        title: ['收听。', '学习。', '记住。'],
        subtitle:
          '这是一款 AI 播客播放器，可将每一期节目变成更容易记住、也更方便收藏的知识。',
        badgeNote: '原生支持 iPhone、iPad 和 Mac',
      },
      transcripts: {
        label: 'AI 转录',
        title: ['每一句话，', '都为你写下'],
        description:
          '自动设备端转录，让你可以边听边读、快速搜索，并跳转到节目的任意片段。',
        bullets: [
          '收听时实时转录',
          '即时搜索你的全部转录内容',
          'AI 生成节目摘要',
          '100% 本地处理，你的数据保持私密',
        ],
        summaryTitle: '节目摘要',
        summaryText: '这一期节目探讨了设备端 AI 如何让播客功能更快、更注重隐私。',
        searchTitle: '搜索',
        searchText: '“神经网络”在 3 期节目中出现',
        imageAlt: '带转录的节目详情页',
      },
      insights: {
        label: '智能洞察',
        title: ['让节目内容', '自己讲清楚'],
        description:
          'AI 会自动生成关键洞察、章节拆分，并追踪每期节目中提到的书籍、电影和参考资料。',
        bullets: [
          '按主题自动生成章节',
          '提取并标记关键洞察',
          '追踪提到的书籍、电影和链接',
          '用智能标签继续深入探索',
        ],
        referencesTitle: '参考资料',
        referencesText: 'Thinking, Fast and Slow · Ex Machina · arxiv.org',
        keyInsightTitle: '关键洞察',
        keyInsightText: '神经网络处理语言的方式，与人类逐步形成理解的过程有相似之处。',
        imageAlt: '播客详情页面',
      },
      highlights: {
        label: '高亮与标记',
        title: ['标记重要时刻。', '连接你的想法。'],
        description:
          '收藏重要片段，添加笔记，用颜色整理，从每一期播客中建立你自己的知识库。',
        bullets: [
          '收听时一键收藏',
          '为任意高亮添加个人笔记',
          '按颜色分类整理',
          'AI 生成高亮回顾',
        ],
        pinnedTitle: '已标记',
        pinnedText: '“有几个大脑区域会执行这项工作，而这些区域非常特别……”',
        recapTitle: 'AI 回顾',
        recapText: '3 个高亮被总结为关键收获',
        imageAlt: '浅色模式下的资料库',
      },
      stats: [
        {
          icon: 'AI',
          title: 'AI 驱动',
          description: '设备端转录、摘要与洞察',
        },
        {
          icon: '隐私',
          title: '更私密',
          description: '所有处理都在你的设备本地完成',
        },
        {
          icon: '设备',
          title: '全平台',
          description: 'iPhone、iPad 和 Mac，一款应用全覆盖',
        },
        {
          icon: 'Swift',
          title: '更快',
          description: '基于 Swift 构建，提供原生性能',
        },
      ],
      platforms: {
        label: '你的所有设备',
        title: ['一款应用。', '随处可听。'],
        description:
          '在 iPhone 上优雅，在 Mac 上强大。你的资料库、高亮和进度可在所有 Apple 设备间无缝同步。',
        tags: ['iPhone', 'iPad', 'Mac', 'CloudKit 同步', 'Apple Watch', 'CarPlay'],
        imageAlts: ['iPhone 上的 Podpin 深色模式', 'Podpin 播客详情', 'Podpin 播放器'],
      },
      cta: {
        title: ['现在开始', '更聪明地收听'],
        subtitle:
          '把每一期播客变成你可以搜索、标记并反复回看的知识。现在免费下载 Podpin。',
      },
      footer: {
        privacy: '隐私政策',
        appStore: 'App Store',
        download: '下载',
        copyright: '© 2026 Podpin。保留所有权利。',
      },
    },
  ],
};
