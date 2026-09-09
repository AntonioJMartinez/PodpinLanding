const appStoreUrl = 'https://apps.apple.com/app/id6760191862';

export default [
  {
    slug: 'private-ai-podcast-player',
    locale: 'es',
    group: 'features',
    title: 'Reproductor de podcasts con IA privada para iPhone, iPad y Mac | Podpin',
    heading: 'Escucha podcasts con IA y conserva el control',
    description:
      'Podpin combina transcripciones en el dispositivo con resúmenes, capítulos, ideas clave y referencias para que puedas escuchar y recordar tus podcasts en iPhone, iPad y Mac.',
    intro:
      'Podpin es un reproductor de podcasts pensado para las personas que quieren algo más que darle al botón de reproducir. Puedes seguir un episodio, consultar su transcripción y guardar las ideas que merecen una segunda escucha. La transcripción se procesa en el dispositivo cuando la función está disponible; los resúmenes, capítulos e ideas clave pueden generarse en el dispositivo o mediante IA en la nube opcional, según el modo que elijas, el idioma, el dispositivo y la configuración.',
    image: 'episode-detail',
    imageAlt: 'Detalle de un episodio de podcast con transcripción en Podpin',
    sections: [
      {
        heading: 'Lee el episodio mientras lo escuchas',
        paragraphs: [
          'Cuando una conversación es densa, volver a encontrar una frase concreta puede ser tan importante como escucharla por primera vez. Podpin crea una transcripción del episodio en tu dispositivo para que puedas leer el contexto, buscar términos y saltar al momento que quieres revisar. Así no tienes que confiar solo en la memoria ni avanzar a ciegas por la barra de reproducción.',
          'La transcripción es una ayuda para orientarte, no una promesa de reconocimiento perfecto. La calidad puede variar con el idioma, los acentos, el ruido, la mezcla de audio y el modelo disponible en tu dispositivo. Si una palabra no aparece exactamente como la recuerdas, prueba con una parte de la frase o con un término relacionado.'
        ],
        bullets: [
          'Consulta el texto del episodio desde la vista de detalle.',
          'Busca nombres, conceptos y expresiones dentro de tus episodios.',
          'Vuelve a reproducir el fragmento que acompaña a una línea de la transcripción.',
          'Usa la transcripción como punto de partida para tus propias notas.'
        ]
      },
      {
        heading: 'Convierte una escucha en contexto útil',
        paragraphs: [
          'Podpin puede ayudarte a ver la estructura de un episodio con resúmenes, capítulos e ideas clave. En lugar de recibir una lista genérica, puedes combinar esas señales con tus propios destacados: guarda una afirmación, identifica el tema del capítulo y anota por qué te importa. Las referencias mencionadas en la conversación también pueden darte un mapa para continuar investigando.',
          'Estas funciones de IA dependen del modo de procesamiento disponible y seleccionado. El modo en el dispositivo prioriza el procesamiento local cuando tu hardware y el idioma lo permiten; la IA en la nube opcional puede ser necesaria para algunas funciones o configuraciones. Revisa el modo elegido y la información de privacidad antes de procesar contenido sensible.'
        ],
        bullets: [
          'Obtén un resumen para decidir qué merece una escucha completa.',
          'Usa capítulos para ubicar el cambio de tema en un episodio largo.',
          'Revisa ideas clave y referencias junto con tus propios marcadores.',
          'Compara el resumen con el audio y conserva tu interpretación.'
        ]
      },
      {
        heading: 'Qué significa «privada» en Podpin',
        paragraphs: [
          'La parte más clara de este enfoque es la transcripción en el dispositivo: el audio puede procesarse localmente en los equipos compatibles. Eso no significa que todas las funciones de IA utilicen siempre el mismo recorrido. Los resúmenes, capítulos e ideas clave pueden usar el modo en el dispositivo o el servicio de IA en la nube que hayas elegido y que esté disponible para tu idioma y configuración.',
          'Las descargas de episodios y la sincronización entre dispositivos necesitan conexión de red. La mejor manera de usar Podpin con criterio es elegir el modo de IA que encaje con cada episodio, consultar la política de privacidad y comprobar la compatibilidad de tu dispositivo. Tendrás una explicación más honesta de lo que ocurre con cada función y podrás cambiar de enfoque cuando cambien tus necesidades.'
        ],
        steps: [
          'Comprueba el idioma y la compatibilidad de tu dispositivo antes de empezar.',
          'Selecciona el modo de procesamiento de IA que prefieras para las funciones disponibles.',
          'Descarga o reproduce el episodio, revisa la transcripción y guarda los momentos importantes.',
          'Consulta la información de privacidad si vas a trabajar con una conversación delicada.'
        ]
      },
      {
        heading: 'Un reproductor para aprender a tu ritmo',
        paragraphs: [
          'Podpin no intenta sustituir tu criterio por una respuesta automática. Su valor está en acortar la distancia entre escuchar, entender y volver a encontrar. Puedes empezar por un episodio, localizar el pasaje que te interesa, fijarlo con una etiqueta de color y añadir una nota breve. Con el tiempo, tus destacados forman una biblioteca personal de ideas que puedes revisar en iPhone, iPad o Mac.',
          'Descarga Podpin desde el App Store y prueba el flujo con los episodios que ya escuchas. La disponibilidad de determinadas funciones puede cambiar según el sistema operativo, el hardware, el idioma y la configuración de IA.'
        ]
      }
    ],
    faq: [
      {
        q: '¿La transcripción de Podpin se realiza en el dispositivo?',
        a: 'Sí, la transcripción está diseñada para procesarse en el dispositivo cuando la función y el hardware son compatibles. La calidad y la disponibilidad pueden variar según el idioma, el audio y la configuración.'
      },
      {
        q: '¿Los resúmenes y las ideas clave son siempre locales?',
        a: 'No necesariamente. Puedes encontrar un modo de IA en el dispositivo y, cuando está disponible o resulta necesario, una opción de IA en la nube. El recorrido depende del modo seleccionado, del dispositivo, del idioma y de la configuración.'
      },
      {
        q: '¿Necesito conexión para usar Podpin?',
        a: 'Las descargas de episodios y la sincronización requieren red. Algunas funciones de procesamiento en el dispositivo pueden funcionar sin enviar el contenido a la nube, pero la disponibilidad concreta depende de tu configuración.'
      }
    ],
    related: ['podcast-app-with-notes', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin en el App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-with-notes',
    locale: 'es',
    group: 'features',
    title: 'App de podcasts con notas y destacados | Podpin',
    heading: 'Tus podcasts, tus notas, tus ideas',
    description:
      'Guarda destacados, añade notas y organiza tus ideas con etiquetas de color en una app de podcasts para iPhone, iPad y Mac.',
    intro:
      'Escuchar un podcast puede darte una idea útil en el momento menos esperado: durante un paseo, entre reuniones o mientras preparas la cena. Podpin te permite marcar ese momento sin convertir la escucha en una tarea pesada. Guarda un destacado, añade el contexto que quieras recordar y vuelve a encontrarlo más tarde junto con la transcripción, el resumen y los capítulos del episodio.',
    image: 'library-dark',
    imageAlt: 'Biblioteca de podcasts con destacados y notas en Podpin',
    sections: [
      {
        heading: 'Marca el momento antes de que se pierda',
        paragraphs: [
          'Un buen sistema de notas empieza por capturar la idea cuando todavía la tienes fresca. En Podpin puedes guardar un momento del episodio y regresar a él desde tu biblioteca. El destacado mantiene su relación con el audio para que recuerdes de dónde salió la idea, no solo una frase aislada copiada en otro sitio.',
          'No hace falta decidir en ese instante si el pasaje es importante para siempre. Puedes fijarlo primero y clasificarlo después, cuando tengas tiempo para escucharlo de nuevo. Ese pequeño gesto reduce la presión de tomar notas perfectas mientras sigues la conversación.'
        ],
        bullets: [
          'Guarda un momento del episodio para revisarlo más tarde.',
          'Conserva el vínculo entre el destacado y la parte correspondiente del audio.',
          'Vuelve a la transcripción para comprobar el contexto de una frase.',
          'Agrupa varios momentos de una misma conversación.'
        ]
      },
      {
        heading: 'Añade una nota que explique por qué importa',
        paragraphs: [
          'Un destacado sin contexto puede perder significado después de unos días. Añade una nota personal con la pregunta que te provocó, la acción que quieres probar o la relación con otro tema que ya conoces. No necesitas escribir un resumen largo: una línea precisa suele ser suficiente para que tu yo del futuro entienda por qué lo guardaste.',
          'Las notas también te ayudan a separar la voz del invitado de tu propia interpretación. Puedes registrar una duda, una objeción o una aplicación práctica sin confundirla con una afirmación del episodio. Esa distinción convierte la biblioteca en un espacio de pensamiento, no en un almacén de frases.'
        ],
        bullets: [
          'Escribe una reflexión breve junto al pasaje guardado.',
          'Anota una pregunta para investigar después.',
          'Registra una acción concreta que quieras poner a prueba.',
          'Distingue la cita original de tu interpretación personal.'
        ]
      },
      {
        heading: 'Usa colores para encontrar el tipo de idea',
        paragraphs: [
          'Las etiquetas de color funcionan como una señal visual rápida. Puedes reservar un color para ideas que quieres aplicar, otro para citas que quieres compartir en una conversación y otro para preguntas abiertas. No existe una taxonomía correcta: lo importante es que tus colores respondan a la forma en que revisas información.',
          'Cuando vuelvas a tu biblioteca, el color te permitirá reconocer patrones antes de leerlo todo. Quizá descubras que guardas muchas ideas de un mismo tema o que varias preguntas aparecen en episodios distintos. Podpin te da la estructura; tú decides qué significa cada grupo.'
        ],
        steps: [
          'Guarda el momento del episodio que quieres conservar.',
          'Añade una nota que describa su utilidad, duda o siguiente paso.',
          'Asigna una etiqueta de color con un significado estable para ti.',
          'Revisa varios destacados juntos y busca conexiones entre episodios.'
        ]
      },
      {
        heading: 'Un archivo personal que puedes revisar',
        paragraphs: [
          'La combinación de audio, transcripción, notas y colores hace que volver a un podcast sea más fácil. Puedes escuchar un episodio por curiosidad y regresar semanas después con una pregunta concreta. En iPhone y iPad resulta práctico capturar ideas durante el día; en Mac puedes sentarte a revisarlas con más calma. La sincronización entre dispositivos necesita red y depende de tu configuración.',
          'Descarga Podpin desde el App Store para crear tu propio método. Empieza con una sola etiqueta de color y una nota de una frase. Un sistema pequeño que usas con frecuencia suele ser más valioso que uno complejo que abandonas.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Puedo añadir mis propias notas a un destacado?',
        a: 'Sí. Podpin combina el momento guardado con una nota personal para que puedas registrar contexto, preguntas o acciones relacionadas con el episodio.'
      },
      {
        q: '¿Para qué sirven las etiquetas de color?',
        a: 'Sirven para crear una clasificación visual que puedas reconocer al revisar tu biblioteca. Puedes asignar a cada color el significado que mejor encaje con tu forma de pensar.'
      },
      {
        q: '¿Mis notas se sincronizan entre iPhone, iPad y Mac?',
        a: 'Podpin está pensado para acompañarte en iPhone, iPad y Mac. La sincronización y las descargas necesitan conexión de red, y la disponibilidad depende de tu configuración y compatibilidad.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin en el App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-for-mac',
    locale: 'es',
    group: 'features',
    title: 'App de podcasts para Mac con transcripciones | Podpin',
    heading: 'Una app de podcasts para pensar mejor en Mac',
    description:
      'Usa Podpin en Mac para escuchar podcasts, consultar transcripciones, revisar capítulos y organizar destacados y notas junto con tu biblioteca.',
    intro:
      'El Mac es un lugar natural para volver a una conversación con atención. Podpin lleva tu biblioteca de podcasts a una app pensada para el ecosistema Apple y te ayuda a pasar de la reproducción a la revisión sin perder el hilo. Consulta la transcripción, explora el resumen y guarda las ideas que quieres convertir en una referencia personal.',
    image: 'player',
    imageAlt: 'Reproductor de podcasts de Podpin en una vista de escritorio',
    sections: [
      {
        heading: 'Escucha y revisa con más espacio',
        paragraphs: [
          'En una pantalla grande es más cómodo tener delante el reproductor, la información del episodio y el texto que acompaña al audio. Puedes escuchar una entrevista completa y después volver a los capítulos para localizar una parte concreta. La vista de detalle mantiene el contexto para que una búsqueda no se convierta en una colección de fragmentos sin origen.',
          'Podpin no te obliga a tratar cada episodio como un proyecto. Úsalo de forma ligera para seguir tu lista habitual o profundiza cuando el tema lo merezca. La misma biblioteca puede servir para una escucha casual, una investigación personal o una sesión de repaso.'
        ],
        bullets: [
          'Consulta la transcripción y la información del episodio desde Mac.',
          'Navega por capítulos para orientarte en conversaciones largas.',
          'Guarda destacados y añade notas mientras revisas una idea.',
          'Organiza momentos con etiquetas de color para encontrarlos después.'
        ]
      },
      {
        heading: 'Continúa lo que empezaste en iPhone o iPad',
        paragraphs: [
          'A menudo descubres un episodio en el teléfono y lo revisas con calma en el Mac. Podpin está disponible para iPhone, iPad y Mac para que puedas cambiar de contexto sin abandonar tu biblioteca. El progreso, los destacados y las notas dependen de la sincronización configurada, que necesita conexión de red.',
          'La continuidad no significa que todos los dispositivos procesen el contenido de la misma manera. La transcripción y las funciones de IA pueden depender del hardware, del idioma y del modo de procesamiento disponible en cada equipo. Si una función se comporta de forma distinta, comprueba su compatibilidad y la configuración de IA.'
        ],
        steps: [
          'Guarda un episodio o un destacado en iPhone o iPad.',
          'Abre Podpin en Mac cuando quieras escucharlo o revisarlo con más espacio.',
          'Comprueba que la sincronización tenga conexión para actualizar tu biblioteca.',
          'Ajusta el modo de IA según el dispositivo, el idioma y el tipo de contenido.'
        ]
      },
      {
        heading: 'Elige cómo quieres usar la IA',
        paragraphs: [
          'Podpin separa la transcripción de las funciones generativas. La transcripción se procesa en el dispositivo cuando es compatible. Los resúmenes, capítulos e ideas clave pueden estar disponibles mediante procesamiento en el dispositivo o mediante IA en la nube opcional, según la configuración que elijas. Esa diferencia importa si escuchas contenido de trabajo, entrevistas privadas o material que prefieres mantener dentro de un modo concreto.',
          'Antes de comenzar una sesión de revisión, consulta qué funciones están disponibles en tu Mac y en el idioma del episodio. El resultado de una transcripción o un resumen puede cambiar con el audio y el modelo; úsalo para orientarte y vuelve al episodio cuando una decisión dependa de una frase exacta.'
        ]
      },
      {
        heading: 'Un escritorio para volver a las ideas',
        paragraphs: [
          'Una app de podcasts para Mac es más útil cuando te ayuda a volver, no solo a reproducir. Puedes crear una pequeña colección de destacados sobre un tema, añadir una nota a cada uno y reconocerlos por color. Después, tu biblioteca se convierte en un punto de partida para pensar, escribir o preparar una conversación sin tener que recordar en qué episodio escuchaste cada idea.',
          'Descarga Podpin desde el App Store y prueba el flujo en tus propios episodios. La compatibilidad concreta depende de la versión de macOS, el hardware, el idioma y las funciones disponibles en tu configuración.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Podpin está disponible para Mac?',
        a: 'Sí. Podpin ofrece una experiencia para Mac además de sus apps para iPhone y iPad. Comprueba la compatibilidad actual en el App Store y en tu dispositivo.'
      },
      {
        q: '¿Puedo pasar de iPhone a Mac con mi biblioteca?',
        a: 'Podpin está diseñado para acompañar tu biblioteca, progreso, destacados y notas en los dispositivos Apple compatibles. La sincronización necesita conexión de red y depende de tu configuración.'
      },
      {
        q: '¿La IA funciona igual en todos los Mac?',
        a: 'No necesariamente. La disponibilidad y el resultado pueden variar según el hardware, el idioma, el sistema operativo y el modo de procesamiento en el dispositivo o en la nube que hayas seleccionado.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin en el App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'guides/find-a-podcast-quote',
    locale: 'es',
    group: 'guides',
    title: 'Cómo encontrar una cita en un podcast | Guía de Podpin',
    heading: 'Cómo encontrar una cita en un podcast sin rebobinar a ciegas',
    description:
      'Aprende a buscar una cita en un podcast con la transcripción, confirmar el contexto y guardar el momento en Podpin.',
    intro:
      'Encontrar una cita que escuchaste en un podcast suele ser más difícil que recordarla. Quizá recuerdes una idea, el nombre de una persona o dos palabras exactas, pero no el episodio ni el minuto. Con Podpin puedes usar la transcripción como mapa: busca un término, revisa el fragmento de audio y guarda la cita con una nota que conserve su contexto.',
    image: 'episode-detail',
    imageAlt: 'Transcripción de un episodio para buscar una cita en Podpin',
    sections: [
      {
        heading: 'Antes de buscar, acota lo que recuerdas',
        paragraphs: [
          'Empieza por identificar cualquier pista fiable. Puede ser el nombre del programa, el invitado, el tema del episodio o una palabra poco común de la conversación. Si recuerdas una frase completa, anota dos o tres términos distintivos en lugar de depender de la puntuación exacta. Las transcripciones automáticas pueden separar palabras, omitir signos o interpretar de otra forma un nombre propio.',
          'También ayuda recordar el contexto. Una cita sobre hábitos puede aparecer en un capítulo sobre rutinas, pero no necesariamente en el título del episodio. Pensar en el tema reduce el número de resultados y te prepara para confirmar que has encontrado la conversación correcta.'
        ],
        bullets: [
          'Anota nombres, términos técnicos y palabras poco frecuentes.',
          'Recuerda el tema o el capítulo en el que pudo aparecer la cita.',
          'Prueba una palabra clave cada vez si la frase completa no da resultado.',
          'Ten en cuenta variantes de idioma, nombres y pronunciación.'
        ]
      },
      {
        heading: 'Busca en la transcripción y escucha el contexto',
        paragraphs: [
          'Abre el episodio en Podpin y utiliza la búsqueda de la transcripción con la pista más específica. Cuando aparezca una coincidencia, lee las líneas que la rodean y reproduce el audio desde unos segundos antes. Así puedes comprobar quién habla, si la frase continúa y si el sentido cambia con la pregunta o la respuesta anterior.',
          'La transcripción es una herramienta de navegación, no una prueba definitiva de cada palabra. El audio puede contener nombres propios, varios hablantes, música o ruido. Si la cita es importante, escucha el pasaje completo y conserva la formulación que realmente se pronunció.'
        ],
        steps: [
          'Abre el episodio y entra en su vista de detalle.',
          'Busca un término distintivo dentro de la transcripción.',
          'Lee el párrafo alrededor de la coincidencia y reproduce el audio cercano.',
          'Prueba sinónimos o una palabra más corta si no encuentras el pasaje.'
        ]
      },
      {
        heading: 'Guarda la cita con una nota útil',
        paragraphs: [
          'Cuando confirmes el momento, guárdalo como destacado. Después añade una nota con el nombre del episodio, la persona que habla y el motivo por el que quieres volver a la cita. Si la conservarás para una conversación, puedes anotar la pregunta que la originó; si la estás estudiando, escribe qué idea te gustaría contrastar.',
          'Una etiqueta de color te ayuda a distinguir citas, ideas para aplicar y preguntas pendientes. Con el tiempo, tus destacados forman un índice personal que es más fácil de revisar que una lista de enlaces sin contexto. Mantén la nota fiel a lo que escuchaste y separa tus conclusiones de las palabras del invitado.'
        ],
        bullets: [
          'Guarda el momento después de verificarlo con el audio.',
          'Añade el episodio, el hablante y el contexto en tu nota.',
          'Usa un color estable para reconocer las citas al revisar tu biblioteca.',
          'Vuelve a escuchar el pasaje antes de usarlo como referencia.'
        ]
      },
      {
        heading: 'Si la búsqueda no encuentra la frase',
        paragraphs: [
          'No des por hecho que el episodio no contiene la cita. Prueba una palabra más corta, busca el nombre del invitado o revisa los capítulos relacionados. También puede haber una diferencia entre el idioma hablado y el idioma de la transcripción disponible. La calidad depende del audio, del idioma y del modelo compatible con tu dispositivo.',
          'Las funciones de IA de Podpin pueden ayudarte a orientarte con capítulos, resúmenes o ideas clave, pero no sustituyen la comprobación del audio. La transcripción se procesa en el dispositivo cuando es compatible; otras funciones pueden usar el modo de IA en el dispositivo o la IA en la nube opcional que hayas seleccionado. La descarga del episodio y la sincronización de tus destacados entre dispositivos necesitan conexión de red.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Puedo buscar una palabra dentro de un episodio?',
        a: 'Sí. La vista de detalle de Podpin permite consultar la transcripción y buscar términos para localizar un momento del episodio, siempre que la transcripción esté disponible.'
      },
      {
        q: '¿Por qué la cita aparece escrita de otra manera?',
        a: 'Las transcripciones automáticas pueden variar con los acentos, el ruido, los nombres propios y el idioma. Escucha el fragmento y usa la transcripción como guía para encontrarlo, no como sustituto del audio.'
      },
      {
        q: '¿Cómo conservo una cita para volver a ella?',
        a: 'Guarda el momento como destacado, añade una nota con el contexto y asigna una etiqueta de color si quieres reconocerlo rápidamente en tu biblioteca.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'podcast-app-for-mac'],
    sources: [{ label: 'Podpin en el App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'private-ai-podcast-player',
    locale: 'fr',
    group: 'features',
    title: 'Lecteur de podcasts avec IA privée pour iPhone, iPad et Mac | Podpin',
    heading: 'Écoutez avec l’IA, en gardant la main sur le traitement',
    description:
      'Podpin associe transcription sur l’appareil, résumés, chapitres, idées clés et références pour écouter et retenir vos podcasts sur iPhone, iPad et Mac.',
    intro:
      'Podpin est un lecteur de podcasts conçu pour aller plus loin que la lecture audio. Vous pouvez suivre un épisode, consulter sa transcription et conserver les idées auxquelles vous souhaitez revenir. La transcription est traitée sur l’appareil lorsque la fonction est disponible. Les résumés, chapitres et idées clés peuvent être générés sur l’appareil ou avec une IA cloud facultative, selon le mode choisi, la langue, l’appareil et la configuration.',
    image: 'episode-detail',
    imageAlt: 'Détail d’un épisode de podcast avec transcription dans Podpin',
    sections: [
      {
        heading: 'Lisez l’épisode au fil de l’écoute',
        paragraphs: [
          'Dans une conversation dense, retrouver une phrase précise peut être aussi utile que l’écouter une première fois. Podpin crée une transcription de l’épisode sur votre appareil afin que vous puissiez lire le contexte, rechercher un terme et revenir directement au passage qui vous intéresse. Vous n’avez plus besoin de faire défiler la barre de lecture au hasard ou de vous fier uniquement à votre mémoire.',
          'La transcription sert de repère et non de garantie d’une reconnaissance parfaite. La qualité peut varier selon la langue, les accents, le bruit de fond, le mixage audio et le modèle disponible sur votre appareil. Si un nom ou un mot n’apparaît pas exactement comme vous vous en souvenez, essayez une partie de la phrase ou un terme associé.'
        ],
        bullets: [
          'Consultez le texte depuis la fiche détaillée de l’épisode.',
          'Recherchez des noms, des concepts et des expressions dans vos épisodes.',
          'Relancez la lecture à l’endroit correspondant à une ligne de transcription.',
          'Servez-vous du texte comme point de départ pour vos propres notes.'
        ]
      },
      {
        heading: 'Passez de l’écoute à un contexte exploitable',
        paragraphs: [
          'Podpin peut vous aider à comprendre la structure d’un épisode grâce aux résumés, aux chapitres et aux idées clés. Vous pouvez associer ces repères à vos propres passages enregistrés : gardez une affirmation, repérez le thème du chapitre et notez pourquoi il compte pour vous. Les références citées dans la conversation offrent aussi une piste pour poursuivre votre exploration.',
          'Ces fonctions d’IA dépendent du mode de traitement disponible et sélectionné. Le mode sur l’appareil privilégie le traitement local lorsque le matériel et la langue le permettent. L’IA cloud facultative peut être nécessaire pour certaines fonctions ou configurations. Vérifiez le mode choisi et les informations de confidentialité avant de traiter un contenu sensible.'
        ],
        bullets: [
          'Utilisez un résumé pour décider si un épisode mérite une écoute complète.',
          'Appuyez-vous sur les chapitres pour vous orienter dans une longue conversation.',
          'Relisez les idées clés et les références à côté de vos propres repères.',
          'Comparez toujours le résumé avec l’audio lorsque la formulation exacte compte.'
        ]
      },
      {
        heading: 'Ce que signifie « privée » dans Podpin',
        paragraphs: [
          'Le point le plus clair de cette approche est la transcription sur l’appareil : l’audio peut être traité localement sur les appareils compatibles. Cela ne signifie pas que toutes les fonctions d’IA suivent toujours le même parcours. Les résumés, chapitres et idées clés peuvent utiliser le mode sur l’appareil ou le service d’IA cloud que vous avez choisi et qui est disponible pour votre langue et votre configuration.',
          'Les téléchargements d’épisodes et la synchronisation entre appareils nécessitent une connexion réseau. Pour utiliser Podpin en connaissance de cause, choisissez le mode d’IA adapté à chaque épisode, consultez la politique de confidentialité et vérifiez la compatibilité de votre appareil. Vous saurez ainsi quelle fonction utilise quel mode, au lieu de supposer que tout le traitement est local.'
        ],
        steps: [
          'Vérifiez la langue et la compatibilité de votre appareil avant de commencer.',
          'Choisissez le mode de traitement d’IA proposé pour les fonctions dont vous avez besoin.',
          'Téléchargez ou lisez l’épisode, puis enregistrez les moments importants.',
          'Consultez les informations de confidentialité avant de traiter une conversation délicate.'
        ]
      },
      {
        heading: 'Un lecteur pour apprendre à votre rythme',
        paragraphs: [
          'Podpin ne cherche pas à remplacer votre jugement par une réponse automatique. L’application réduit la distance entre écouter, comprendre et retrouver. Commencez par un épisode, repérez le passage qui vous intéresse, attribuez-lui une couleur et ajoutez une courte note. Au fil du temps, vos passages enregistrés forment une bibliothèque personnelle d’idées à revoir sur iPhone, iPad ou Mac.',
          'Téléchargez Podpin sur l’App Store et testez ce flux avec les épisodes que vous écoutez déjà. La disponibilité de certaines fonctions peut varier selon le système, le matériel, la langue et la configuration d’IA.'
        ]
      }
    ],
    faq: [
      {
        q: 'La transcription de Podpin est-elle traitée sur l’appareil ?',
        a: 'Oui, la transcription est conçue pour être traitée sur l’appareil lorsque la fonction et le matériel sont compatibles. La disponibilité et la qualité peuvent varier selon la langue, l’audio et la configuration.'
      },
      {
        q: 'Les résumés et les idées clés sont-ils toujours locaux ?',
        a: 'Pas nécessairement. Podpin peut proposer un mode d’IA sur l’appareil et, lorsqu’il est disponible ou nécessaire, une option d’IA cloud. Le parcours dépend du mode sélectionné, de l’appareil, de la langue et de la configuration.'
      },
      {
        q: 'Faut-il une connexion pour utiliser Podpin ?',
        a: 'Les téléchargements d’épisodes et la synchronisation nécessitent le réseau. Certaines fonctions traitées sur l’appareil peuvent éviter l’envoi du contenu vers le cloud, mais la disponibilité concrète dépend de votre configuration.'
      }
    ],
    related: ['podcast-app-with-notes', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin sur l’App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-with-notes',
    locale: 'fr',
    group: 'features',
    title: 'Application de podcasts avec notes et passages enregistrés | Podpin',
    heading: 'Vos podcasts, vos notes, vos idées',
    description:
      'Enregistrez des passages, ajoutez des notes et organisez vos idées avec des repères de couleur dans Podpin pour iPhone, iPad et Mac.',
    intro:
      'Un podcast peut faire naître une idée utile au moment où vous ne pouvez pas encore l’examiner : pendant une promenade, entre deux rendez-vous ou en préparant le dîner. Podpin vous permet d’enregistrer ce moment sans transformer l’écoute en devoir. Gardez un passage, ajoutez le contexte dont vous voulez vous souvenir et retrouvez-le ensuite avec la transcription, le résumé et les chapitres de l’épisode.',
    image: 'library-dark',
    imageAlt: 'Bibliothèque de podcasts avec passages enregistrés et notes dans Podpin',
    sections: [
      {
        heading: 'Enregistrez le moment avant de le perdre',
        paragraphs: [
          'Un bon système de notes commence par une capture simple, pendant que l’idée est encore fraîche. Dans Podpin, vous pouvez enregistrer un moment de l’épisode puis y revenir depuis votre bibliothèque. Le passage reste lié à l’audio afin que vous vous souveniez de son origine, et pas seulement d’une phrase isolée dans une liste de notes.',
          'Vous n’avez pas besoin de décider immédiatement si ce passage sera important pour toujours. Enregistrez-le d’abord, puis classez-le lorsque vous aurez le temps de le réécouter. Ce geste réduit la pression de rédiger une note parfaite tout en suivant la conversation.'
        ],
        bullets: [
          'Enregistrez un moment de l’épisode pour le revoir plus tard.',
          'Conservez le lien entre le passage et la partie correspondante de l’audio.',
          'Revenez à la transcription pour vérifier le contexte d’une phrase.',
          'Regroupez plusieurs moments issus d’une même conversation.'
        ]
      },
      {
        heading: 'Ajoutez une note qui explique pourquoi cela compte',
        paragraphs: [
          'Un passage enregistré sans contexte peut perdre son sens après quelques jours. Ajoutez une note personnelle avec la question qu’il a fait naître, l’action que vous voulez essayer ou le lien avec un sujet que vous connaissez déjà. Une seule phrase précise suffit souvent à rappeler à votre futur vous pourquoi vous aviez gardé ce moment.',
          'Les notes vous aident aussi à séparer la voix de l’invité de votre propre interprétation. Vous pouvez écrire un doute, une objection ou une application pratique sans la confondre avec une affirmation entendue dans l’épisode. Votre bibliothèque devient ainsi un espace de réflexion, pas un simple entrepôt de citations.'
        ],
        bullets: [
          'Écrivez une réflexion courte à côté du passage.',
          'Notez une question à approfondir plus tard.',
          'Inscrivez une action concrète à mettre à l’épreuve.',
          'Distinguez les mots prononcés de votre interprétation personnelle.'
        ]
      },
      {
        heading: 'Utilisez les couleurs pour reconnaître le type d’idée',
        paragraphs: [
          'Les repères de couleur servent de signal visuel rapide. Vous pouvez réserver une couleur aux idées à appliquer, une autre aux citations utiles dans une conversation et une troisième aux questions ouvertes. Il n’y a pas de taxonomie imposée : vos couleurs doivent correspondre à votre manière de relire l’information.',
          'En revenant dans votre bibliothèque, une couleur vous permet de voir des motifs avant de tout relire. Vous remarquerez peut-être beaucoup d’idées autour d’un même sujet ou une question qui revient dans plusieurs épisodes. Podpin fournit la structure ; c’est vous qui donnez un sens à chaque groupe.'
        ],
        steps: [
          'Enregistrez le moment de l’épisode que vous voulez conserver.',
          'Ajoutez une note qui décrit son utilité, votre doute ou l’étape suivante.',
          'Attribuez une couleur dont la signification restera claire pour vous.',
          'Relisez plusieurs passages ensemble et cherchez les liens entre épisodes.'
        ]
      },
      {
        heading: 'Une archive personnelle à revisiter',
        paragraphs: [
          'L’association de l’audio, de la transcription, des notes et des couleurs rend le retour à un podcast plus naturel. Vous pouvez écouter un épisode par curiosité puis y revenir plusieurs semaines plus tard avec une question précise. L’iPhone et l’iPad sont pratiques pour capturer une idée au fil de la journée ; le Mac convient à une relecture posée. La synchronisation entre appareils nécessite le réseau et dépend de votre configuration.',
          'Téléchargez Podpin sur l’App Store pour créer votre propre méthode. Commencez par une seule couleur et une note d’une phrase. Un système discret que vous utilisez souvent a généralement plus de valeur qu’une organisation complexe que vous finissez par abandonner.'
        ]
      }
    ],
    faq: [
      {
        q: 'Puis-je ajouter mes propres notes à un passage enregistré ?',
        a: 'Oui. Podpin associe le moment enregistré à une note personnelle afin de conserver un contexte, une question ou une action liée à l’épisode.'
      },
      {
        q: 'À quoi servent les repères de couleur ?',
        a: 'Ils créent une classification visuelle que vous pouvez reconnaître en parcourant votre bibliothèque. Donnez à chaque couleur le sens qui correspond à votre façon de penser.'
      },
      {
        q: 'Mes notes se synchronisent-elles entre iPhone, iPad et Mac ?',
        a: 'Podpin est conçu pour vous accompagner sur iPhone, iPad et Mac. Les téléchargements et la synchronisation nécessitent une connexion réseau, et la disponibilité dépend de votre configuration et de la compatibilité de vos appareils.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin sur l’App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-for-mac',
    locale: 'fr',
    group: 'features',
    title: 'Application de podcasts pour Mac avec transcription | Podpin',
    heading: 'Un lecteur de podcasts pour réfléchir sur Mac',
    description:
      'Utilisez Podpin sur Mac pour écouter des podcasts, consulter les transcriptions, parcourir les chapitres et organiser vos passages et vos notes.',
    intro:
      'Le Mac est un endroit naturel pour revenir à une conversation avec attention. Podpin apporte votre bibliothèque de podcasts dans une application conçue pour l’écosystème Apple et vous aide à passer de la lecture à la relecture sans perdre le fil. Consultez la transcription, explorez le résumé et gardez les idées que vous souhaitez transformer en repères personnels.',
    image: 'player',
    imageAlt: 'Lecteur de podcasts Podpin affiché dans une vue de bureau',
    sections: [
      {
        heading: 'Écoutez et relisez avec davantage d’espace',
        paragraphs: [
          'Sur un grand écran, il est plus facile de garder sous les yeux le lecteur, les informations de l’épisode et le texte qui accompagne l’audio. Vous pouvez écouter une interview entière, puis revenir aux chapitres pour localiser une partie précise. La fiche détaillée conserve le contexte afin qu’une recherche ne produise pas une collection de fragments sans origine.',
          'Podpin ne vous oblige pas à transformer chaque épisode en projet. Utilisez-le simplement pour votre liste habituelle ou approfondissez un sujet lorsqu’il le mérite. La même bibliothèque peut servir à une écoute détendue, à une recherche personnelle ou à une séance de révision.'
        ],
        bullets: [
          'Consultez la transcription et les informations de l’épisode sur Mac.',
          'Parcourez les chapitres pour vous orienter dans les longues conversations.',
          'Enregistrez des passages et ajoutez des notes pendant la relecture.',
          'Organisez les moments avec des couleurs pour les retrouver ensuite.'
        ]
      },
      {
        heading: 'Poursuivez ce que vous avez commencé sur iPhone ou iPad',
        paragraphs: [
          'Vous découvrez souvent un épisode sur votre téléphone et le relisez plus calmement sur Mac. Podpin est disponible sur iPhone, iPad et Mac afin que vous puissiez changer de contexte sans quitter votre bibliothèque. La progression, les passages et les notes dépendent de la synchronisation configurée, qui nécessite une connexion réseau.',
          'La continuité ne signifie pas que chaque appareil traite le contenu de la même façon. La transcription et les fonctions d’IA peuvent dépendre du matériel, de la langue et du mode disponible sur chaque appareil. Si une fonction se comporte différemment, vérifiez sa compatibilité et les réglages d’IA.'
        ],
        steps: [
          'Enregistrez un épisode ou un passage sur iPhone ou iPad.',
          'Ouvrez Podpin sur Mac lorsque vous voulez l’écouter ou le relire avec plus d’espace.',
          'Vérifiez que la synchronisation dispose du réseau pour actualiser votre bibliothèque.',
          'Adaptez le mode d’IA à l’appareil, à la langue et au type de contenu.'
        ]
      },
      {
        heading: 'Choisissez la façon dont l’IA intervient',
        paragraphs: [
          'Podpin distingue la transcription des fonctions génératives. La transcription est traitée sur l’appareil lorsqu’elle est compatible. Les résumés, chapitres et idées clés peuvent être disponibles grâce au traitement sur l’appareil ou à une IA cloud facultative, selon la configuration choisie. Cette différence compte si vous écoutez des échanges professionnels, des interviews privées ou un contenu que vous souhaitez traiter dans un mode précis.',
          'Avant une séance de relecture, vérifiez les fonctions disponibles sur votre Mac et dans la langue de l’épisode. Le résultat d’une transcription ou d’un résumé peut changer selon l’audio et le modèle ; utilisez-le pour vous orienter et revenez à l’enregistrement lorsqu’une décision dépend d’une formulation exacte.'
        ]
      },
      {
        heading: 'Un bureau pour revenir aux idées',
        paragraphs: [
          'Une application de podcasts pour Mac est utile lorsqu’elle facilite le retour, pas seulement la lecture. Vous pouvez créer une petite collection de passages autour d’un sujet, ajouter une note à chacun et les reconnaître par couleur. Votre bibliothèque devient ensuite un point de départ pour réfléchir, écrire ou préparer une discussion, sans devoir vous rappeler dans quel épisode vous aviez entendu chaque idée.',
          'Téléchargez Podpin sur l’App Store et testez ce flux avec vos propres épisodes. La compatibilité concrète dépend de la version de macOS, du matériel, de la langue et des fonctions disponibles dans votre configuration.'
        ]
      }
    ],
    faq: [
      {
        q: 'Podpin est-il disponible sur Mac ?',
        a: 'Oui. Podpin propose une expérience sur Mac en plus de ses apps pour iPhone et iPad. Vérifiez la compatibilité actuelle dans l’App Store et sur votre appareil.'
      },
      {
        q: 'Puis-je passer de l’iPhone au Mac avec ma bibliothèque ?',
        a: 'Podpin est conçu pour accompagner votre bibliothèque, votre progression, vos passages et vos notes sur les appareils Apple compatibles. La synchronisation nécessite une connexion réseau et dépend de votre configuration.'
      },
      {
        q: 'L’IA fonctionne-t-elle de la même façon sur tous les Mac ?',
        a: 'Pas nécessairement. La disponibilité et le résultat peuvent varier selon le matériel, la langue, le système et le mode de traitement sur l’appareil ou dans le cloud que vous avez sélectionné.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin sur l’App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'guides/find-a-podcast-quote',
    locale: 'fr',
    group: 'guides',
    title: 'Comment retrouver une citation dans un podcast | Guide Podpin',
    heading: 'Retrouver une citation dans un podcast sans rembobiner au hasard',
    description:
      'Apprenez à rechercher une citation dans un podcast avec la transcription, à vérifier son contexte et à conserver le passage dans Podpin.',
    intro:
      'Retrouver une citation entendue dans un podcast est souvent plus difficile que s’en souvenir. Vous avez peut-être en tête une idée, le nom d’une personne ou deux mots exacts, mais pas l’épisode ni la minute. Avec Podpin, utilisez la transcription comme une carte : recherchez un terme, vérifiez le passage dans l’audio et enregistrez la citation avec une note qui conserve son contexte.',
    image: 'episode-detail',
    imageAlt: 'Transcription d’un épisode utilisée pour retrouver une citation dans Podpin',
    sections: [
      {
        heading: 'Avant la recherche, réduisez le champ',
        paragraphs: [
          'Commencez par identifier chaque indice fiable. Il peut s’agir du nom du podcast, de l’invité, du thème de l’épisode ou d’un mot peu courant de la conversation. Si vous vous souvenez d’une phrase entière, notez deux ou trois termes distinctifs plutôt que de compter sur la ponctuation exacte. Les transcriptions automatiques peuvent découper les mots, omettre la ponctuation ou interpréter différemment un nom propre.',
          'Le contexte aide aussi. Une citation sur les habitudes peut se trouver dans un chapitre consacré aux routines, sans apparaître dans le titre de l’épisode. Réfléchir au sujet réduit le nombre de résultats et vous prépare à confirmer que vous avez retrouvé la bonne conversation.'
        ],
        bullets: [
          'Notez les noms, les termes techniques et les mots peu fréquents.',
          'Souvenez-vous du thème ou du chapitre où la citation a pu apparaître.',
          'Essayez un mot-clé à la fois si la phrase entière ne donne rien.',
          'Prévoyez des variantes de langue, de nom et de prononciation.'
        ]
      },
      {
        heading: 'Recherchez dans la transcription, puis écoutez autour',
        paragraphs: [
          'Ouvrez l’épisode dans Podpin et lancez la recherche avec l’indice le plus spécifique. Lorsqu’une occurrence apparaît, lisez les lignes voisines et démarrez l’audio quelques secondes avant. Vous pourrez vérifier qui parle, si la phrase continue et si la question ou la réponse précédente modifie son sens.',
          'La transcription est un outil de navigation, pas une preuve définitive de chaque mot. L’audio peut comporter des noms propres, plusieurs voix, de la musique ou du bruit. Si la citation compte, écoutez le passage complet et fiez-vous à l’enregistrement pour sa formulation finale.'
        ],
        steps: [
          'Ouvrez l’épisode et accédez à sa fiche détaillée.',
          'Recherchez un terme distinctif dans la transcription.',
          'Lisez le paragraphe autour de l’occurrence et écoutez l’audio proche.',
          'Essayez un synonyme ou un mot plus court si le passage ne ressort pas.'
        ]
      },
      {
        heading: 'Conservez la citation avec une note utile',
        paragraphs: [
          'Lorsque vous avez confirmé le moment, enregistrez-le comme passage. Ajoutez ensuite une note avec le nom de l’épisode, la personne qui parle et la raison pour laquelle vous voulez y revenir. Si vous gardez la citation pour une discussion, notez la question qui l’a provoquée ; si vous l’étudiez, écrivez l’idée que vous voulez confronter à une autre source.',
          'Un repère de couleur permet de distinguer les citations, les idées à appliquer et les questions en attente. Au fil du temps, vos passages enregistrés forment un index personnel plus facile à relire qu’une liste de liens sans contexte. Restez fidèle à ce qui a été dit et séparez vos conclusions des paroles de l’invité.'
        ],
        bullets: [
          'Enregistrez le passage après l’avoir vérifié avec l’audio.',
          'Ajoutez l’épisode, l’intervenant et le contexte dans votre note.',
          'Utilisez une couleur constante pour reconnaître les citations.',
          'Réécoutez le passage avant de l’utiliser comme référence.'
        ]
      },
      {
        heading: 'Si la recherche ne retrouve pas la phrase',
        paragraphs: [
          'Ne concluez pas trop vite que l’épisode ne contient pas la citation. Essayez un mot plus court, recherchez le nom de l’invité ou consultez les chapitres associés. Il peut aussi y avoir un écart entre la langue parlée et la langue de transcription disponible. La qualité dépend de l’audio, de la langue et du modèle compatible avec votre appareil.',
          'Les fonctions d’IA de Podpin peuvent vous orienter avec des chapitres, des résumés ou des idées clés, mais elles ne remplacent pas la vérification de l’audio. La transcription est traitée sur l’appareil lorsqu’elle est compatible ; les autres fonctions peuvent utiliser le mode sur l’appareil ou l’IA cloud facultative que vous avez sélectionnée. Le téléchargement de l’épisode et la synchronisation de vos passages entre appareils nécessitent une connexion réseau.'
        ]
      }
    ],
    faq: [
      {
        q: 'Puis-je rechercher un mot dans un épisode ?',
        a: 'Oui. La fiche détaillée de Podpin permet de consulter la transcription et de rechercher des termes pour localiser un moment, lorsqu’une transcription est disponible.'
      },
      {
        q: 'Pourquoi la citation est-elle écrite autrement ?',
        a: 'Les transcriptions automatiques peuvent varier selon les accents, le bruit, les noms propres et la langue. Écoutez le passage et utilisez le texte comme guide pour le retrouver, pas comme remplacement de l’audio.'
      },
      {
        q: 'Comment conserver une citation pour y revenir ?',
        a: 'Enregistrez le moment comme passage, ajoutez une note avec son contexte et attribuez-lui une couleur pour le reconnaître rapidement dans votre bibliothèque.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'podcast-app-for-mac'],
    sources: [{ label: 'Podpin sur l’App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'private-ai-podcast-player',
    locale: 'de',
    group: 'features',
    title: 'Privater KI-Podcast-Player für iPhone, iPad und Mac | Podpin',
    heading: 'Podcasts mit KI hören und die Verarbeitung bewusst wählen',
    description:
      'Podpin verbindet Transkription auf dem Gerät mit Zusammenfassungen, Kapiteln, Kernaussagen und Verweisen für deine Podcasts auf iPhone, iPad und Mac.',
    intro:
      'Podpin ist ein Podcast-Player für alle, die mehr wollen als nur auf Wiedergabe zu drücken. Du kannst einer Folge folgen, das Transkript lesen und Gedanken festhalten, zu denen du später zurückkehren möchtest. Die Transkription wird auf dem Gerät verarbeitet, wenn die Funktion verfügbar ist. Zusammenfassungen, Kapitel und Kernaussagen können auf dem Gerät oder mit optionaler Cloud-KI entstehen – abhängig vom gewählten Modus, von Sprache, Gerät und Einstellungen.',
    image: 'episode-detail',
    imageAlt: 'Podcast-Detailansicht mit Transkript in Podpin',
    sections: [
      {
        heading: 'Lies beim Hören mit',
        paragraphs: [
          'Bei einem dichten Gespräch kann es genauso wichtig sein, einen Satz wiederzufinden, wie ihn zum ersten Mal zu hören. Podpin erstellt das Transkript auf deinem Gerät, damit du den Kontext lesen, nach Begriffen suchen und direkt zu der Stelle springen kannst, die dich interessiert. Du musst nicht mehr blind an der Wiedergabeleiste entlanggehen oder dich allein auf dein Gedächtnis verlassen.',
          'Das Transkript ist eine Orientierungshilfe und keine Garantie für perfekte Spracherkennung. Qualität und Verfügbarkeit können von Sprache, Akzenten, Hintergrundgeräuschen, Audiomischung und dem Modell auf deinem Gerät abhängen. Wenn ein Name oder Begriff nicht genau so auftaucht, wie du ihn erinnerst, suche nach einem Teil der Formulierung oder einem verwandten Begriff.'
        ],
        bullets: [
          'Öffne den Text in der Detailansicht der Folge.',
          'Suche in deinen Folgen nach Namen, Konzepten und Formulierungen.',
          'Starte die Wiedergabe an der Stelle, die zu einer Transkriptzeile gehört.',
          'Nutze das Transkript als Ausgangspunkt für deine eigenen Notizen.'
        ]
      },
      {
        heading: 'Vom Gespräch zu brauchbarem Kontext',
        paragraphs: [
          'Podpin kann dir mit Zusammenfassungen, Kapiteln und Kernaussagen die Struktur einer Folge zeigen. Verbinde diese Hinweise mit deinen eigenen Markierungen: Speichere eine Aussage, ordne sie einem Kapitelthema zu und notiere, warum sie für dich wichtig ist. Erwähnte Bücher, Filme und andere Verweise können dir außerdem eine Richtung für die nächste Recherche geben.',
          'Diese KI-Funktionen hängen vom verfügbaren und ausgewählten Verarbeitungsmodus ab. Der Modus auf dem Gerät bevorzugt lokale Verarbeitung, wenn Hardware und Sprache dies erlauben. Für bestimmte Funktionen oder Einstellungen kann die optionale Cloud-KI erforderlich sein. Prüfe den gewählten Modus und die Datenschutzhinweise, bevor du sensible Inhalte verarbeitest.'
        ],
        bullets: [
          'Nutze eine Zusammenfassung, um eine Folge einzuordnen.',
          'Orientiere dich mit Kapiteln in langen Gesprächen.',
          'Prüfe Kernaussagen und Verweise zusammen mit deinen Markierungen.',
          'Vergleiche eine Zusammenfassung mit dem Audio, wenn der genaue Wortlaut zählt.'
        ]
      },
      {
        heading: 'Was „privat“ bei Podpin bedeutet',
        paragraphs: [
          'Der klare Teil dieses Ansatzes ist die Transkription auf dem Gerät: Auf kompatiblen Geräten kann das Audio lokal verarbeitet werden. Das heißt nicht, dass jede KI-Funktion immer denselben Weg nimmt. Zusammenfassungen, Kapitel und Kernaussagen können den Modus auf dem Gerät oder den von dir gewählten Cloud-KI-Dienst verwenden, sofern dieser für deine Sprache und deine Einstellungen verfügbar ist.',
          'Für Downloads von Folgen und die Synchronisierung zwischen Geräten brauchst du eine Netzwerkverbindung. Wenn du Podpin bewusst einsetzen möchtest, wähle den passenden KI-Modus für die jeweilige Folge, lies die Datenschutzhinweise und prüfe die Kompatibilität deines Geräts. So weißt du, welche Funktion welchen Verarbeitungsweg nutzt, statt von einer pauschalen Zusage auszugehen.'
        ],
        steps: [
          'Prüfe Sprache und Gerätekompatibilität, bevor du beginnst.',
          'Wähle den KI-Verarbeitungsmodus für die verfügbaren Funktionen.',
          'Lade die Folge oder streame sie und speichere wichtige Momente.',
          'Lies die Datenschutzhinweise, bevor du ein sensibles Gespräch verarbeitest.'
        ]
      },
      {
        heading: 'Ein Player zum Lernen in deinem Tempo',
        paragraphs: [
          'Podpin soll dein Urteil nicht durch eine automatische Antwort ersetzen. Die App verkürzt den Weg zwischen Hören, Verstehen und Wiederfinden. Starte mit einer Folge, finde die interessante Stelle, markiere sie mit einer Farbe und füge eine kurze Notiz hinzu. Mit der Zeit entsteht aus deinen Markierungen eine persönliche Ideensammlung, die du auf iPhone, iPad oder Mac wiederholen kannst.',
          'Lade Podpin aus dem App Store und probiere den Ablauf mit Folgen aus, die du ohnehin hörst. Welche Funktionen verfügbar sind, kann je nach Betriebssystem, Hardware, Sprache und KI-Einstellungen unterschiedlich sein.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wird die Transkription von Podpin auf dem Gerät verarbeitet?',
        a: 'Ja, die Transkription ist für die Verarbeitung auf dem Gerät ausgelegt, wenn Funktion und Hardware kompatibel sind. Verfügbarkeit und Qualität können von Sprache, Audio und Einstellungen abhängen.'
      },
      {
        q: 'Sind Zusammenfassungen und Kernaussagen immer lokal?',
        a: 'Nicht unbedingt. Podpin kann einen Modus auf dem Gerät und, wenn verfügbar oder erforderlich, eine optionale Cloud-KI anbieten. Der Weg hängt vom gewählten Modus, Gerät, Sprache und den Einstellungen ab.'
      },
      {
        q: 'Brauche ich eine Internetverbindung für Podpin?',
        a: 'Downloads von Folgen und die Synchronisierung benötigen ein Netzwerk. Funktionen, die auf dem Gerät verarbeitet werden, können Inhalte lokal bearbeiten; welche Funktionen verfügbar sind, hängt von deiner Konfiguration ab.'
      }
    ],
    related: ['podcast-app-with-notes', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin im App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-with-notes',
    locale: 'de',
    group: 'features',
    title: 'Podcast-App mit Notizen und Markierungen | Podpin',
    heading: 'Deine Podcasts, deine Notizen, deine Gedanken',
    description:
      'Speichere Markierungen, ergänze Notizen und ordne Ideen mit Farblabels in Podpin für iPhone, iPad und Mac.',
    intro:
      'Ein Podcast kann dir genau dann einen nützlichen Gedanken geben, wenn du ihn noch nicht in Ruhe prüfen kannst – beim Spaziergang, zwischen zwei Terminen oder beim Kochen. Podpin lässt dich diesen Moment festhalten, ohne das Hören in eine zusätzliche Aufgabe zu verwandeln. Speichere eine Markierung, ergänze den Kontext, an den du dich erinnern willst, und finde sie später zusammen mit Transkript, Zusammenfassung und Kapiteln wieder.',
    image: 'library-dark',
    imageAlt: 'Podcast-Bibliothek mit Markierungen und Notizen in Podpin',
    sections: [
      {
        heading: 'Markiere den Moment, bevor er verloren geht',
        paragraphs: [
          'Ein gutes Notizsystem beginnt mit einer einfachen Aufnahme, solange der Gedanke noch frisch ist. In Podpin kannst du einen Moment der Folge speichern und aus deiner Bibliothek wieder öffnen. Die Markierung bleibt mit dem Audio verbunden, damit du später noch weißt, woher die Idee stammt – nicht nur, wie ein einzelner Satz klingt.',
          'Du musst nicht sofort entscheiden, ob diese Stelle für immer wichtig bleibt. Markiere sie zunächst und ordne sie später ein, wenn du Zeit zum erneuten Hören hast. So sinkt der Druck, während des Gesprächs eine perfekte Notiz formulieren zu müssen.'
        ],
        bullets: [
          'Speichere einen Moment der Folge für später.',
          'Behalte den Bezug zwischen Markierung und zugehörigem Audioteil.',
          'Rufe das Transkript auf, um den Kontext einer Aussage zu prüfen.',
          'Fasse mehrere Momente aus demselben Gespräch zusammen.'
        ]
      },
      {
        heading: 'Schreibe eine Notiz, die den Nutzen festhält',
        paragraphs: [
          'Eine Markierung ohne Kontext kann nach ein paar Tagen ihre Bedeutung verlieren. Ergänze eine persönliche Notiz mit der Frage, die sie ausgelöst hat, der Handlung, die du ausprobieren willst, oder der Verbindung zu einem Thema, das du schon kennst. Oft reicht ein präziser Satz, damit dein zukünftiges Ich versteht, warum du diese Stelle gespeichert hast.',
          'Notizen helfen dir außerdem, die Aussage eines Gasts von deiner eigenen Interpretation zu trennen. Du kannst einen Zweifel, einen Einwand oder eine praktische Anwendung festhalten, ohne sie mit dem Inhalt der Folge zu vermischen. So wird deine Bibliothek zu einem Ort zum Denken und nicht nur zu einem Sammelplatz für Zitate.'
        ],
        bullets: [
          'Schreibe eine kurze Überlegung neben die gespeicherte Stelle.',
          'Halte eine Frage fest, die du später vertiefen willst.',
          'Notiere eine konkrete Handlung, die du testen möchtest.',
          'Trenne den gesprochenen Inhalt von deiner persönlichen Deutung.'
        ]
      },
      {
        heading: 'Nutze Farben, um Ideen wiederzuerkennen',
        paragraphs: [
          'Farblabels sind ein schnelles visuelles Signal. Du kannst eine Farbe für Ideen reservieren, die du anwenden willst, eine andere für Zitate, die du in einem Gespräch verwenden möchtest, und eine dritte für offene Fragen. Es gibt keine vorgeschriebene Ordnung: Deine Farben sollten zu deiner Art passen, Informationen später zu prüfen.',
          'Wenn du in deine Bibliothek zurückkehrst, erkennst du mit der Farbe Muster, bevor du alles liest. Vielleicht sammelst du viele Ideen zu einem Thema oder dieselbe Frage taucht in unterschiedlichen Folgen auf. Podpin gibt dir die Struktur; welche Bedeutung eine Gruppe bekommt, entscheidest du.'
        ],
        steps: [
          'Speichere den Moment der Folge, den du behalten möchtest.',
          'Füge eine Notiz hinzu, die Nutzen, Zweifel oder nächsten Schritt erklärt.',
          'Wähle ein Farblabel mit einer Bedeutung, die du beibehalten willst.',
          'Prüfe mehrere Markierungen zusammen und suche Verbindungen zwischen Folgen.'
        ]
      },
      {
        heading: 'Ein persönliches Archiv zum Wiederaufgreifen',
        paragraphs: [
          'Audio, Transkript, Notizen und Farben machen es leichter, zu einer Folge zurückzukehren. Du kannst eine Episode aus Neugier hören und Wochen später mit einer konkreten Frage wieder öffnen. Auf iPhone und iPad hältst du Gedanken unterwegs fest; am Mac kannst du sie in Ruhe prüfen. Die Synchronisierung zwischen Geräten braucht ein Netzwerk und hängt von deinen Einstellungen ab.',
          'Lade Podpin aus dem App Store und entwickle deinen eigenen Ablauf. Beginne mit einer Farbe und einer Notiz in einem Satz. Ein kleines System, das du regelmäßig nutzt, ist meist wertvoller als eine komplizierte Ordnung, die du bald nicht mehr pflegst.'
        ]
      }
    ],
    faq: [
      {
        q: 'Kann ich einer Markierung eigene Notizen hinzufügen?',
        a: 'Ja. Podpin verbindet den gespeicherten Moment mit einer persönlichen Notiz, in der du Kontext, Fragen oder nächste Schritte festhalten kannst.'
      },
      {
        q: 'Wofür sind die Farblabels gedacht?',
        a: 'Sie bilden eine visuelle Ordnung, die du beim Durchsehen deiner Bibliothek schnell erkennst. Du kannst jeder Farbe die Bedeutung geben, die zu deiner Arbeitsweise passt.'
      },
      {
        q: 'Werden Notizen zwischen iPhone, iPad und Mac synchronisiert?',
        a: 'Podpin ist für die Nutzung auf iPhone, iPad und Mac gedacht. Downloads und Synchronisierung brauchen eine Netzwerkverbindung; die konkrete Verfügbarkeit hängt von deiner Konfiguration und kompatiblen Geräten ab.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin im App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'podcast-app-for-mac',
    locale: 'de',
    group: 'features',
    title: 'Podcast-App für Mac mit Transkripten | Podpin',
    heading: 'Eine Podcast-App zum konzentrierten Denken auf dem Mac',
    description:
      'Nutze Podpin auf dem Mac, um Podcasts zu hören, Transkripte zu lesen, Kapitel zu prüfen und Markierungen und Notizen in deiner Bibliothek zu ordnen.',
    intro:
      'Der Mac ist ein guter Ort, um zu einem Gespräch mit voller Aufmerksamkeit zurückzukehren. Podpin bringt deine Podcast-Bibliothek in eine App für das Apple-Ökosystem und hilft dir, von der Wiedergabe zur Nachbereitung zu wechseln, ohne den Faden zu verlieren. Öffne das Transkript, sieh dir die Zusammenfassung an und speichere Gedanken, die später als persönliche Referenz dienen sollen.',
    image: 'player',
    imageAlt: 'Podpin-Podcast-Player in einer Ansicht für den Mac',
    sections: [
      {
        heading: 'Höre und prüfe mit mehr Platz',
        paragraphs: [
          'Auf einem großen Bildschirm kannst du Player, Episodeninformationen und den begleitenden Text leichter gleichzeitig im Blick behalten. Höre ein Interview vollständig und gehe anschließend über die Kapitel zu einer bestimmten Stelle zurück. Die Detailansicht bewahrt den Zusammenhang, damit eine Suche nicht nur eine Sammlung einzelner Ausschnitte ohne Herkunft ergibt.',
          'Podpin verlangt nicht, dass du jede Folge in ein Projekt verwandelst. Nutze die App unkompliziert für deine normale Liste oder vertiefe ein Thema, wenn es sich lohnt. Dieselbe Bibliothek passt zu einer beiläufigen Runde, einer persönlichen Recherche oder einer Wiederholungssession.'
        ],
        bullets: [
          'Lies Transkript und Episodeninformationen auf dem Mac.',
          'Orientiere dich in langen Gesprächen über die Kapitel.',
          'Speichere beim Prüfen einer Idee Markierungen und Notizen.',
          'Ordne Momente mit Farblabels, damit du sie später wiederfindest.'
        ]
      },
      {
        heading: 'Setze auf iPhone oder iPad angefangene Folgen fort',
        paragraphs: [
          'Oft entdeckst du eine Folge auf dem Telefon und prüfst sie später in Ruhe am Mac. Podpin ist für iPhone, iPad und Mac verfügbar, damit du den Kontext wechseln kannst, ohne deine Bibliothek zu verlassen. Fortschritt, Markierungen und Notizen hängen von der eingerichteten Synchronisierung ab, die eine Netzwerkverbindung benötigt.',
          'Kontinuität bedeutet nicht, dass jedes Gerät Inhalte gleich verarbeitet. Transkription und KI-Funktionen können je nach Hardware, Sprache und verfügbarem Modus auf dem jeweiligen Gerät unterschiedlich sein. Wenn sich eine Funktion anders verhält, prüfe Kompatibilität und KI-Einstellungen.'
        ],
        steps: [
          'Speichere eine Folge oder Markierung auf iPhone oder iPad.',
          'Öffne Podpin auf dem Mac, wenn du sie mit mehr Platz hören oder prüfen möchtest.',
          'Stelle eine Netzwerkverbindung für die Synchronisierung deiner Bibliothek sicher.',
          'Passe den KI-Modus an Gerät, Sprache und Inhalt an.'
        ]
      },
      {
        heading: 'Entscheide, wie die KI eingesetzt wird',
        paragraphs: [
          'Podpin trennt Transkription von generativen Funktionen. Die Transkription wird auf dem Gerät verarbeitet, wenn sie kompatibel ist. Zusammenfassungen, Kapitel und Kernaussagen können mit Verarbeitung auf dem Gerät oder optionaler Cloud-KI verfügbar sein – je nach gewählter Konfiguration. Das ist relevant, wenn du berufliche Gespräche, private Interviews oder Inhalte hörst, die du in einem bestimmten Modus verarbeiten möchtest.',
          'Prüfe vor einer Nachbereitung, welche Funktionen auf deinem Mac und in der Sprache der Folge verfügbar sind. Das Ergebnis eines Transkripts oder einer Zusammenfassung kann vom Audio und vom Modell abhängen. Nutze es zur Orientierung und gehe zur Aufnahme zurück, wenn eine Entscheidung vom genauen Wortlaut abhängt.'
        ]
      },
      {
        heading: 'Ein Schreibtisch für gute Gedanken',
        paragraphs: [
          'Eine Podcast-App für Mac ist dann wertvoll, wenn sie das Wiederfinden erleichtert und nicht nur abspielt. Erstelle eine kleine Sammlung von Markierungen zu einem Thema, ergänze jeweils eine Notiz und erkenne sie an ihrer Farbe. So wird deine Bibliothek zum Ausgangspunkt für Überlegungen, Texte oder Gespräche, ohne dass du dich erinnern musst, in welcher Folge eine Idee vorkam.',
          'Lade Podpin aus dem App Store und probiere den Ablauf mit deinen eigenen Folgen aus. Die konkrete Kompatibilität hängt von macOS-Version, Hardware, Sprache und den Funktionen deiner Konfiguration ab.'
        ]
      }
    ],
    faq: [
      {
        q: 'Ist Podpin für den Mac verfügbar?',
        a: 'Ja. Podpin bietet neben den Apps für iPhone und iPad auch eine Mac-Erfahrung. Prüfe die aktuelle Kompatibilität im App Store und auf deinem Gerät.'
      },
      {
        q: 'Kann ich meine Bibliothek von iPhone auf den Mac mitnehmen?',
        a: 'Podpin ist dafür ausgelegt, Bibliothek, Fortschritt, Markierungen und Notizen auf kompatiblen Apple-Geräten zu begleiten. Die Synchronisierung braucht eine Netzwerkverbindung und hängt von deinen Einstellungen ab.'
      },
      {
        q: 'Funktioniert die KI auf allen Macs gleich?',
        a: 'Nicht unbedingt. Verfügbarkeit und Ergebnis können von Hardware, Sprache, System und dem ausgewählten Verarbeitungsmodus auf dem Gerät oder in der Cloud abhängen.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'guides/find-a-podcast-quote'],
    sources: [{ label: 'Podpin im App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
  {
    slug: 'guides/find-a-podcast-quote',
    locale: 'de',
    group: 'guides',
    title: 'So findest du ein Zitat in einem Podcast | Podpin-Anleitung',
    heading: 'Ein Zitat im Podcast finden, ohne planlos zurückzuspulen',
    description:
      'Lerne, wie du mit dem Transkript ein Zitat in einem Podcast suchst, den Kontext prüfst und die Stelle in Podpin speicherst.',
    intro:
      'Ein Zitat wiederzufinden, das du in einem Podcast gehört hast, ist oft schwieriger, als es im Gedächtnis zu behalten. Vielleicht erinnerst du dich an eine Idee, einen Namen oder zwei genaue Wörter – aber nicht an Folge oder Minute. Mit Podpin nutzt du das Transkript als Karte: Suche nach einem Begriff, prüfe die Stelle im Audio und speichere das Zitat mit einer Notiz, die seinen Zusammenhang bewahrt.',
    image: 'episode-detail',
    imageAlt: 'Podcast-Transkript zur Suche nach einem Zitat in Podpin',
    sections: [
      {
        heading: 'Grenze zuerst ein, woran du dich erinnerst',
        paragraphs: [
          'Sammle zunächst jeden verlässlichen Hinweis. Das kann der Name des Podcasts, des Gasts, das Thema der Folge oder ein seltenes Wort aus dem Gespräch sein. Wenn du dich an einen ganzen Satz erinnerst, notiere zwei oder drei markante Begriffe, statt auf die exakte Zeichensetzung zu setzen. Automatische Transkripte können Wörter anders trennen, Satzzeichen weglassen oder Eigennamen unterschiedlich erkennen.',
          'Auch der Zusammenhang hilft. Ein Zitat über Gewohnheiten kann in einem Kapitel über Routinen stehen, ohne im Folgentitel aufzutauchen. Wenn du das Thema einordnest, verringerst du die Zahl der Treffer und kannst leichter bestätigen, dass du das richtige Gespräch gefunden hast.'
        ],
        bullets: [
          'Notiere Namen, Fachbegriffe und seltene Wörter.',
          'Erinnere dich an Thema oder Kapitel, in dem das Zitat vorkam.',
          'Suche einzelne Schlüsselwörter, wenn die ganze Formulierung keinen Treffer liefert.',
          'Rechne mit Varianten bei Sprache, Namen und Aussprache.'
        ]
      },
      {
        heading: 'Suche im Transkript und höre den Kontext',
        paragraphs: [
          'Öffne die Folge in Podpin und beginne mit dem spezifischsten Hinweis. Wenn ein Treffer erscheint, lies die Zeilen davor und danach und starte das Audio einige Sekunden früher. So prüfst du, wer spricht, ob der Satz weitergeht und ob die vorherige Frage oder Antwort seine Bedeutung verändert.',
          'Das Transkript ist ein Navigationswerkzeug und kein endgültiger Beleg für jedes einzelne Wort. Im Audio können Eigennamen, mehrere Stimmen, Musik oder Hintergrundgeräusche vorkommen. Wenn das Zitat wichtig ist, höre die gesamte Passage und verlasse dich für den endgültigen Wortlaut auf die Aufnahme.'
        ],
        steps: [
          'Öffne die Folge und rufe ihre Detailansicht auf.',
          'Suche im Transkript nach einem markanten Begriff.',
          'Lies den Abschnitt um den Treffer und höre die nahe Audiostelle.',
          'Probiere ein Synonym oder ein kürzeres Wort, falls die Stelle nicht auftaucht.'
        ]
      },
      {
        heading: 'Speichere das Zitat mit einer hilfreichen Notiz',
        paragraphs: [
          'Wenn du den Moment bestätigt hast, speichere ihn als Markierung. Ergänze danach eine Notiz mit dem Namen der Folge, der sprechenden Person und dem Grund, warum du zurückkehren möchtest. Wenn du das Zitat für ein Gespräch aufbewahrst, notiere die Frage, die dazu geführt hat. Wenn du es lernst, schreibe auf, welche Idee du mit einer anderen Quelle vergleichen willst.',
          'Ein Farblabel hilft dir, Zitate von Anwendungsideen und offenen Fragen zu unterscheiden. Mit der Zeit entsteht aus deinen Markierungen ein persönlicher Index, der leichter zu prüfen ist als eine Liste von Links ohne Kontext. Halte die Notiz nah am Gesagten und trenne deine Schlussfolgerung von den Worten des Gasts.'
        ],
        bullets: [
          'Speichere die Stelle, nachdem du sie im Audio geprüft hast.',
          'Notiere Folge, Sprecher und Kontext.',
          'Verwende eine feste Farbe, um Zitate in deiner Bibliothek zu erkennen.',
          'Höre die Passage noch einmal, bevor du sie als Referenz verwendest.'
        ]
      },
      {
        heading: 'Wenn die Suche den Satz nicht findet',
        paragraphs: [
          'Schließe nicht sofort daraus, dass die Folge das Zitat nicht enthält. Suche nach einem kürzeren Wort, nach dem Namen des Gasts oder in den passenden Kapiteln. Es kann auch einen Unterschied zwischen gesprochener Sprache und verfügbarer Transkriptsprache geben. Die Qualität hängt von Audio, Sprache und dem Modell ab, das dein Gerät unterstützt.',
          'Podpins KI-Funktionen können dich mit Kapiteln, Zusammenfassungen oder Kernaussagen orientieren, ersetzen aber nicht die Prüfung im Audio. Die Transkription wird auf dem Gerät verarbeitet, wenn sie kompatibel ist; andere Funktionen können den Modus auf dem Gerät oder die von dir ausgewählte optionale Cloud-KI verwenden. Der Download einer Folge und die Synchronisierung deiner Markierungen zwischen Geräten benötigen eine Netzwerkverbindung.'
        ]
      }
    ],
    faq: [
      {
        q: 'Kann ich in einer Folge nach einem Wort suchen?',
        a: 'Ja. In der Detailansicht von Podpin kannst du das Transkript durchsuchen und Begriffe finden, um eine Stelle zu lokalisieren, sofern ein Transkript verfügbar ist.'
      },
      {
        q: 'Warum steht das Zitat im Transkript anders?',
        a: 'Automatische Transkripte können sich bei Akzenten, Hintergrundgeräuschen, Eigennamen und Sprachen unterscheiden. Höre die Stelle und nutze den Text als Wegweiser, nicht als Ersatz für das Audio.'
      },
      {
        q: 'Wie bewahre ich ein Zitat zum späteren Nachschlagen auf?',
        a: 'Speichere den Moment als Markierung, ergänze eine Notiz mit dem Kontext und gib ihm ein Farblabel, damit du ihn in deiner Bibliothek schnell wiedererkennst.'
      }
    ],
    related: ['private-ai-podcast-player', 'podcast-app-with-notes', 'podcast-app-for-mac'],
    sources: [{ label: 'Podpin im App Store', url: appStoreUrl }],
    updated: '2026-08-30'
  },
];
