import React, { useMemo, useState } from "react";

const questions = [
  {id:1,cat:"Questions personnelles",q:"Pourquoi souhaitez-vous devenir français(e) ?"},
  {id:2,cat:"Questions personnelles",q:"Depuis combien de temps vivez-vous en France ?"},
  {id:3,cat:"Questions personnelles",q:"Pourquoi avez-vous choisi de vivre en France ?"},
  {id:4,cat:"Questions personnelles",q:"Vous sentez-vous intégré(e) ? Pourquoi ?"},
  {id:5,cat:"Questions personnelles",q:"Comment montrez-vous votre intégration ?"},
  {id:6,cat:"Questions personnelles",q:"Qu’aimez-vous dans la vie en France ?"},
  {id:7,cat:"Questions personnelles",q:"Qu’est-ce qui vous plaît le moins en France ?"},
  {id:8,cat:"Questions personnelles",q:"Que représente pour vous la nationalité française ?"},
  {id:9,cat:"Questions personnelles",q:"Quelles valeurs françaises partagez-vous ?"},
  {id:10,cat:"Questions personnelles",q:"Que pensez-vous de la devise « Liberté, Égalité, Fraternité » ?"},
  {id:11,cat:"Questions personnelles",q:"Souhaitez-vous voter ? Pourquoi ?"},
  {id:12,cat:"Questions personnelles",q:"Qu’est-ce que la citoyenneté ?"},
  {id:13,cat:"Questions personnelles",q:"Que représente la République pour vous ?"},
  {id:14,cat:"Questions personnelles",q:"Avez-vous des amis français ?"},
  {id:15,cat:"Questions personnelles",q:"Participez-vous à la vie locale ?"},
  {id:16,cat:"Questions personnelles",q:"Êtes-vous membre d’une association ?"},
  {id:17,cat:"Questions personnelles",q:"Avez-vous déjà fait du bénévolat ?"},
  {id:18,cat:"Questions personnelles",q:"Avez-vous participé à une action citoyenne ?"},
  {id:19,cat:"Questions personnelles",q:"Comment vous informez-vous sur l’actualité ?"},
  {id:20,cat:"Questions personnelles",q:"Parlez-vous français à la maison ?"},
  {id:21,cat:"Questions personnelles",q:"Comment améliorez-vous votre français ?"},
  {id:22,cat:"Questions personnelles",q:"Travaillez-vous en France ?"},
  {id:23,cat:"Questions personnelles",q:"Quel est votre métier ?"},
  {id:24,cat:"Questions personnelles",q:"Quels sont vos projets en France ?"},
  {id:25,cat:"Questions personnelles",q:"Souhaitez-vous rester en France définitivement ?"},
  {id:26,cat:"Questions personnelles",q:"Quelle est votre plus grande fierté en France ?"},
  {id:27,cat:"Questions personnelles",q:"Quelle difficulté avez-vous rencontrée ?"},
  {id:28,cat:"Questions personnelles",q:"Comment avez-vous surmonté cette difficulté ?"},
  {id:29,cat:"Questions personnelles",q:"Quels sont vos loisirs ?"},
  {id:30,cat:"Questions personnelles",q:"Connaissez-vous des traditions françaises ?"},
  {id:31,cat:"Questions personnelles",q:"Célébrez-vous des fêtes françaises ?"},
  {id:32,cat:"Questions personnelles",q:"Quel aspect de la culture française vous a marqué ?"},
  {id:33,cat:"Questions personnelles",q:"Que pensez-vous de l’école en France ?"},
  {id:34,cat:"Questions personnelles",q:"Que pensez-vous de la liberté d’expression ?"},
  {id:35,cat:"Questions personnelles",q:"Que pensez-vous de la laïcité ?"},
  {id:36,cat:"Questions personnelles",q:"Qu’appréciez-vous dans le mode de vie français ?"},
  {id:37,cat:"Questions personnelles",q:"Avez-vous des enfants scolarisés en France ?"},
  {id:38,cat:"Questions personnelles",q:"Quelle langue parlez-vous avec vos enfants ?"},
  {id:39,cat:"Questions personnelles",q:"Quel conseil donneriez-vous à un nouvel arrivant ?"},
  {id:40,cat:"Questions personnelles",q:"Que signifie être un bon citoyen ?"},
  {id:41,cat:"Histoire, culture et société",q:"Qui est le président de la République ?"},
  {id:42,cat:"Histoire, culture et société",q:"Qui est le Premier ministre ?"},
  {id:43,cat:"Histoire, culture et société",q:"Quelle est la capitale de la France ?"},
  {id:44,cat:"Histoire, culture et société",q:"Combien y a-t-il de régions en France ?"},
  {id:45,cat:"Histoire, culture et société",q:"Quels sont les symboles de la République ?"},
  {id:46,cat:"Histoire, culture et société",q:"Que représente le drapeau français ?"},
  {id:47,cat:"Histoire, culture et société",q:"Que représente Marianne ?"},
  {id:48,cat:"Histoire, culture et société",q:"Quel est l’hymne national ?"},
  {id:49,cat:"Histoire, culture et société",q:"Que signifie la fête du 14 juillet ?"},
  {id:50,cat:"Histoire, culture et société",q:"Qu’est-ce que la Révolution française ?"},
  {id:51,cat:"Histoire, culture et société",q:"En quelle année a eu lieu la Révolution française ?"},
  {id:52,cat:"Histoire, culture et société",q:"Qui était Napoléon Bonaparte ?"},
  {id:53,cat:"Histoire, culture et société",q:"Qui était Charles de Gaulle ?"},
  {id:54,cat:"Histoire, culture et société",q:"Que s’est-il passé en 1945 ?"},
  {id:55,cat:"Histoire, culture et société",q:"Qu’est-ce que la Seconde Guerre mondiale ?"},
  {id:56,cat:"Histoire, culture et société",q:"Qu’est-ce que la Déclaration des droits de l’homme ?"},
  {id:57,cat:"Histoire, culture et société",q:"Quelles sont les grandes valeurs de la République ?"},
  {id:58,cat:"Histoire, culture et société",q:"Qu’est-ce que la laïcité ?"},
  {id:59,cat:"Histoire, culture et société",q:"Quelle est la langue officielle ?"},
  {id:60,cat:"Histoire, culture et société",q:"Quelles sont les grandes spécialités culinaires françaises ?"},
  {id:61,cat:"Histoire, culture et société",q:"Connaissez-vous des écrivains français ?"},
  {id:62,cat:"Histoire, culture et société",q:"Connaissez-vous des artistes français ?"},
  {id:63,cat:"Histoire, culture et société",q:"Quelle est l’importance de la culture en France ?"},
  {id:64,cat:"Histoire, culture et société",q:"Qu’est-ce que le patrimoine ?"},
  {id:65,cat:"Histoire, culture et société",q:"Connaissez-vous des monuments français ?"},
  {id:66,cat:"Histoire, culture et société",q:"Qu’est-ce que l’Union européenne ?"},
  {id:67,cat:"Histoire, culture et société",q:"La France fait-elle partie de l’Union européenne ?"},
  {id:68,cat:"Histoire, culture et société",q:"Quelle est la monnaie en France ?"},
  {id:69,cat:"Histoire, culture et société",q:"Quels sont les pays voisins de la France ?"},
  {id:70,cat:"Histoire, culture et société",q:"Qu’est-ce que la francophonie ?"},
  {id:71,cat:"Institutions françaises",q:"Qu’est-ce que la République ?"},
  {id:72,cat:"Institutions françaises",q:"Qui dirige la France ?"},
  {id:73,cat:"Institutions françaises",q:"Qu’est-ce que le Parlement ?"},
  {id:74,cat:"Institutions françaises",q:"Quelles sont les deux chambres du Parlement ?"},
  {id:75,cat:"Institutions françaises",q:"Quel est le rôle de l’Assemblée nationale ?"},
  {id:76,cat:"Institutions françaises",q:"Quel est le rôle du Sénat ?"},
  {id:77,cat:"Institutions françaises",q:"Quel est le rôle du Président ?"},
  {id:78,cat:"Institutions françaises",q:"Quel est le rôle du gouvernement ?"},
  {id:79,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir exécutif ?"},
  {id:80,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir législatif ?"},
  {id:81,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir judiciaire ?"},
  {id:82,cat:"Institutions françaises",q:"Qu’est-ce que la séparation des pouvoirs ?"},
  {id:83,cat:"Institutions françaises",q:"Comment sont élus les députés ?"},
  {id:84,cat:"Institutions françaises",q:"Combien dure un mandat présidentiel ?"},
  {id:85,cat:"Institutions françaises",q:"Qu’est-ce qu’une élection ?"},
  {id:86,cat:"Institutions françaises",q:"Qui peut voter en France ?"},
  {id:87,cat:"Institutions françaises",q:"Qu’est-ce qu’une commune ?"},
  {id:88,cat:"Institutions françaises",q:"Qui est le maire ?"},
  {id:89,cat:"Institutions françaises",q:"Quel est le rôle du maire ?"},
  {id:90,cat:"Institutions françaises",q:"Qu’est-ce qu’une préfecture ?"},
  {id:91,cat:"Lois et République",q:"Qui fait les lois en France ?"},
  {id:92,cat:"Lois et République",q:"Comment une loi est-elle adoptée ?"},
  {id:93,cat:"Lois et République",q:"Qu’est-ce qu’une loi ?"},
  {id:94,cat:"Lois et République",q:"Qui propose les lois ?"},
  {id:95,cat:"Lois et République",q:"Qu’est-ce que la Constitution ?"},
  {id:96,cat:"Lois et République",q:"Que signifie « nul n’est censé ignorer la loi » ?"},
  {id:97,cat:"Lois et République",q:"Qu’est-ce que la présomption d’innocence ?"},
  {id:98,cat:"Lois et République",q:"Quelle est la majorité pénale ?"},
  {id:99,cat:"Lois et République",q:"À quoi sert une loi ?"},
  {id:100,cat:"Lois et République",q:"Qui est protégé par la loi ?"},
  {id:101,cat:"Lois et République",q:"Peut-on critiquer une loi ?"},
  {id:102,cat:"Lois et République",q:"Qui contrôle les lois ?"},
  {id:103,cat:"Lois et République",q:"Qu’est-ce qu’un tribunal ?"},
  {id:104,cat:"Lois et République",q:"Qu’est-ce que le droit au recours ?"},
  {id:105,cat:"Lois et République",q:"La loi est-elle la même pour tous ?"},
  {id:106,cat:"Lois et République",q:"Peut-on manifester ?"},
  {id:107,cat:"Lois et République",q:"Peut-on critiquer le gouvernement ?"},
  {id:108,cat:"Lois et République",q:"Qu’est-ce que le droit de grève ?"},
  {id:109,cat:"Lois et République",q:"Quelles sont les sources du droit ?"},
  {id:110,cat:"Lois et République",q:"Quels sont les droits en cas d’arrestation ?"},
  {id:111,cat:"Lois et République",q:"Quelle est la différence entre une loi et un règlement ?"},
  {id:112,cat:"Lois et République",q:"A-t-on le droit d’être défendu ?"},
  {id:113,cat:"Lois et République",q:"La loi protège-t-elle la liberté de religion ?"},
  {id:114,cat:"Lois et République",q:"La loi protège-t-elle la liberté d’expression ?"},
  {id:115,cat:"Lois et République",q:"Qu’est-ce qu’un casier judiciaire ?"},
  {id:116,cat:"Lois et République",q:"Un citoyen peut-il changer une loi ?"},
  {id:117,cat:"Lois et République",q:"Les lois s’appliquent-elles aux étrangers ?"},
  {id:118,cat:"Lois et République",q:"Peut-on se défendre seul ?"},
  {id:119,cat:"Lois et République",q:"Qu’est-ce qu’un contrat ?"},
  {id:120,cat:"Lois et République",q:"Pourquoi la justice est-elle indépendante ?"},
];

const sampleAnswers = {
  1:"Je vis en France depuis plusieurs années, je suis intégré(e) et je partage les valeurs de la République.",
  2:"Je vis en France depuis plusieurs années, ce qui m’a permis de m’intégrer progressivement.",
  3:"J’ai choisi la France pour sa stabilité, ses opportunités et son respect des droits.",
  4:"Oui, j’ai un travail, des relations sociales et je participe à la vie quotidienne.",
  5:"Je parle français, je travaille, je respecte les lois et je m’implique localement.",
  6:"J’aime la stabilité, la qualité de vie, les services publics et la culture.",
  7:"Comme dans tous les pays, il y a des choses plus difficiles, mais je m’adapte et je reste positif(ve).",
  8:"La nationalité française représente pour moi un engagement et une reconnaissance de mon intégration.",
  9:"Je partage les valeurs de liberté, d’égalité, de fraternité, de respect et de solidarité.",
  10:"Elle représente les principes fondamentaux de la République : la liberté, l’égalité des droits et la solidarité entre les citoyens.",
  11:"Oui, car voter est un droit et aussi un devoir citoyen. Cela permet de participer à la démocratie.",
  12:"La citoyenneté, c’est participer à la vie du pays, respecter ses lois et contribuer à la société.",
  13:"La République représente un système fondé sur l’égalité, les droits, les devoirs et le respect des lois.",
  14:"Oui, j’ai des amis français au travail et dans mon entourage.",
  15:"Oui, je participe à la vie locale par des activités de quartier ou associatives quand c’est possible.",
  16:"Pas toujours, mais je participe quand c’est possible à des activités locales ou associatives.",
  17:"Oui, j’ai déjà participé à des actions bénévoles pour aider les autres et contribuer à la société.",
  18:"Oui, j’ai participé à des actions locales ou solidaires.",
  19:"Je m’informe par la télévision, internet, les journaux et les discussions avec mon entourage.",
  20:"Oui, je parle français à la maison pour progresser et favoriser l’intégration de ma famille.",
  21:"J’améliore mon français en lisant, en parlant avec les autres et en suivant l’actualité.",
  22:"Oui, je travaille en France.",
  23:"J’exerce un métier qui me permet de participer à la société et de construire mon avenir en France.",
  24:"Mes projets sont de m’installer durablement, développer ma carrière et construire ma vie familiale en France.",
  25:"Oui, je souhaite rester en France durablement car j’y ai construit ma vie.",
  26:"Ma plus grande fierté est d’avoir trouvé ma place, d’avoir progressé en français et d’avoir un emploi stable.",
  27:"Au début, la langue et l’adaptation culturelle ont été les principales difficultés.",
  28:"J’ai surmonté ces difficultés en apprenant, en pratiquant le français et en faisant des efforts régulièrement.",
  29:"Mes loisirs sont la lecture, le sport, les promenades et les activités culturelles.",
  30:"Oui, je connais des traditions comme le 14 juillet, Noël, la galette des rois et le 1er mai.",
  31:"Oui, je célèbre certaines fêtes françaises avec ma famille ou mes amis.",
  32:"Ce qui m’a marqué, c’est l’importance de la culture, du débat et de l’accès aux musées et aux événements culturels.",
  33:"Je pense que l’école en France offre une éducation de qualité et donne une chance aux enfants de réussir.",
  34:"La liberté d’expression est essentielle, mais elle doit s’exercer dans le respect des lois et des autres.",
  35:"La laïcité garantit la neutralité de l’État et la liberté de croire ou de ne pas croire.",
  36:"J’apprécie l’équilibre entre le travail, la vie personnelle, la culture et les relations sociales.",
  37:"Oui, mes enfants sont scolarisés en France.",
  38:"Je parle principalement français avec mes enfants pour les aider à bien s’intégrer.",
  39:"Je lui conseillerais d’apprendre la langue, de respecter les règles, de s’informer et d’être patient.",
  40:"Être un bon citoyen, c’est respecter les lois, participer à la société et faire preuve de civisme.",
  41:"Le président de la République est Emmanuel Macron.",
  42:"Le Premier ministre change selon l’actualité. Il faut vérifier son nom avant l’entretien.",
  43:"La capitale de la France est Paris.",
  44:"Il y a 18 régions françaises : 13 en métropole et 5 en outre-mer.",
  45:"Les symboles de la République sont le drapeau tricolore, Marianne, La Marseillaise et la devise Liberté, Égalité, Fraternité.",
  46:"Le drapeau français symbolise la République et ses valeurs : liberté, égalité et fraternité.",
  47:"Marianne représente la République française et la liberté.",
  48:"L’hymne national est La Marseillaise.",
  49:"Le 14 juillet est la fête nationale. Elle est liée à la Révolution française et à la prise de la Bastille en 1789.",
  50:"La Révolution française est un événement majeur qui marque la fin de la monarchie absolue et le début d’une nouvelle organisation politique.",
  51:"La Révolution française a commencé en 1789.",
  52:"Napoléon Bonaparte était un général devenu empereur. Il a marqué l’histoire de France.",
  53:"Charles de Gaulle était un général, chef de la Résistance et fondateur de la Ve République.",
  54:"En 1945, c’est la fin de la Seconde Guerre mondiale en Europe.",
  55:"La Seconde Guerre mondiale est un conflit mondial qui a duré de 1939 à 1945.",
  56:"La Déclaration des droits de l’homme est un texte fondamental qui affirme les libertés et les droits des citoyens.",
  57:"Les grandes valeurs de la République sont la liberté, l’égalité et la fraternité.",
  58:"La laïcité, c’est la séparation de l’État et des religions. Elle garantit la liberté de croire ou non.",
  59:"La langue officielle de la République est le français.",
  60:"On peut citer la baguette, le fromage, le vin, le cassoulet ou le bœuf bourguignon.",
  61:"Oui, par exemple Victor Hugo, Molière ou Voltaire.",
  62:"Oui, par exemple Claude Monet, Édith Piaf ou Auguste Rodin.",
  63:"La culture est très importante en France. Elle fait partie de l’identité du pays et elle est accessible à tous.",
  64:"Le patrimoine, c’est l’ensemble des biens culturels, historiques et naturels transmis aux générations futures.",
  65:"Oui, par exemple la Tour Eiffel, l’Arc de Triomphe, Notre-Dame de Paris ou le Mont-Saint-Michel.",
  66:"L’Union européenne est une organisation de pays européens qui coopèrent dans plusieurs domaines.",
  67:"Oui, la France fait partie de l’Union européenne et fait même partie des pays fondateurs.",
  68:"La monnaie utilisée en France est l’euro.",
  69:"Les pays voisins sont notamment la Belgique, l’Allemagne, la Suisse, l’Italie et l’Espagne.",
  70:"La francophonie désigne l’ensemble des pays et des personnes qui parlent français.",
  71:"La République est un régime politique sans roi, fondé sur la souveraineté du peuple et le respect des lois.",
  72:"La France est dirigée par le président de la République et le gouvernement.",
  73:"Le Parlement est l’institution qui vote les lois.",
  74:"Les deux chambres du Parlement sont l’Assemblée nationale et le Sénat.",
  75:"L’Assemblée nationale vote les lois et contrôle l’action du gouvernement.",
  76:"Le Sénat représente les territoires et participe au vote des lois.",
  77:"Le président dirige l’État, représente la France et veille au respect des institutions.",
  78:"Le gouvernement dirige la politique du pays et applique les lois.",
  79:"Le pouvoir exécutif applique les lois et dirige la politique du pays.",
  80:"Le pouvoir législatif vote les lois.",
  81:"Le pouvoir judiciaire rend la justice.",
  82:"La séparation des pouvoirs permet d’éviter les abus en séparant le pouvoir exécutif, législatif et judiciaire.",
  83:"Les députés sont élus par les citoyens lors des élections législatives.",
  84:"Le mandat présidentiel dure 5 ans. On appelle cela le quinquennat.",
  85:"Une élection est un vote qui permet de choisir des représentants.",
  86:"Les citoyens français majeurs peuvent voter aux élections nationales.",
  87:"Une commune est une collectivité locale, comme une ville ou un village.",
  88:"Le maire est le responsable de la commune.",
  89:"Le maire gère la ville, les services locaux et représente la commune.",
  90:"La préfecture représente l’État dans un département.",
  91:"Les lois sont faites par le Parlement.",
  92:"Une loi est discutée, votée par le Parlement puis promulguée par le président de la République.",
  93:"Une loi est une règle générale qui organise la vie en société.",
  94:"Les lois peuvent être proposées par le gouvernement ou par les parlementaires.",
  95:"La Constitution est le texte fondamental qui organise les institutions et garantit les droits.",
  96:"Cela signifie que chacun doit respecter la loi, même s’il ne la connaît pas dans le détail.",
  97:"La présomption d’innocence signifie qu’une personne est innocente jusqu’à preuve du contraire.",
  98:"La majorité pénale est fixée à 18 ans.",
  99:"La loi sert à organiser la société, protéger les personnes et garantir l’égalité.",
  100:"Toutes les personnes présentes en France sont protégées par la loi.",
  101:"Oui, on peut critiquer une loi, mais elle doit être respectée tant qu’elle est en vigueur.",
  102:"Le Conseil constitutionnel contrôle que les lois respectent la Constitution.",
  103:"Un tribunal est une institution chargée de rendre la justice.",
  104:"Le droit au recours permet de contester une décision de justice ou une décision administrative.",
  105:"Oui, la loi est la même pour tous. C’est le principe d’égalité devant la loi.",
  106:"Oui, on peut manifester pacifiquement, dans le respect de la loi.",
  107:"Oui, on peut critiquer le gouvernement. C’est la liberté d’opinion et d’expression.",
  108:"Le droit de grève permet aux salariés d’arrêter le travail pour défendre leurs droits.",
  109:"Les sources du droit sont notamment la Constitution, les lois et les règlements.",
  110:"En cas d’arrestation, on a le droit d’être informé, de garder le silence, d’avoir un avocat et de voir un juge.",
  111:"Une loi est votée par le Parlement, alors qu’un règlement est pris par le gouvernement pour appliquer la loi.",
  112:"Oui, toute personne a le droit d’être défendue, notamment par un avocat.",
  113:"Oui, la loi protège la liberté de religion et la liberté de croire ou de ne pas croire.",
  114:"Oui, la loi protège la liberté d’expression, mais elle interdit les propos haineux, racistes ou diffamatoires.",
  115:"Un casier judiciaire est un document qui contient l’historique des condamnations pénales d’une personne.",
  116:"Un citoyen ne change pas directement une loi, mais il peut agir indirectement en votant ou en contactant ses élus.",
  117:"Oui, les lois françaises s’appliquent aux étrangers présents en France.",
  118:"Oui, on peut se défendre seul, mais il est souvent conseillé d’avoir un avocat.",
  119:"Un contrat est un accord juridique entre plusieurs personnes qui crée des obligations.",
  120:"La justice est indépendante car elle ne dépend pas du pouvoir politique. Les juges appliquent la loi de manière impartiale."
};

const memoryTips = {
  1:"Intégration + valeurs",
  2:"Durée + intégration",
  3:"Stabilité + opportunités + droits",
  4:"Travail + relations + quotidien",
  5:"Langue + travail + lois",
  6:"Stabilité + services publics + culture",
  7:"Rester positif(ve)",
  8:"Engagement + reconnaissance",
  9:"Devise + respect + solidarité",
  10:"Devise = 3 principes",
  11:"Droit + devoir",
  12:"Participation + lois",
  13:"Droits + devoirs + lois",
  14:"Travail + entourage",
  15:"Local + associations",
  16:"Réponse honnête",
  17:"Aider + contribuer",
  18:"Action locale",
  19:"TV + internet + journaux",
  20:"Français = intégration",
  21:"Lire / parler / actualité",
  22:"Oui simple",
  23:"Métier = contribution",
  24:"Stabilité + avenir",
  25:"Durablement",
  26:"Place + emploi stable",
  27:"Langue ou culture",
  28:"Efforts réguliers",
  29:"3 exemples simples",
  30:"14 juillet + Noël",
  31:"Famille ou amis",
  32:"Culture + débat",
  33:"Éducation de qualité",
  34:"Liberté + limites",
  35:"Neutralité + liberté",
  36:"Équilibre",
  37:"Oui simple",
  38:"Français principalement",
  39:"Langue + patience",
  40:"Lois + participation",
  41:"À vérifier avant l’entretien",
  42:"À vérifier avant l’entretien",
  43:"Paris",
  44:"18 = 13 + 5",
  45:"4 symboles",
  46:"Valeurs républicaines",
  47:"République",
  48:"La Marseillaise",
  49:"1789 + fête nationale",
  50:"Fin monarchie absolue",
  51:"1789",
  52:"Général devenu empereur",
  53:"Résistance + Ve République",
  54:"Fin guerre",
  55:"1939–1945",
  56:"Droits + libertés",
  57:"Liberté Égalité Fraternité",
  58:"État / religions",
  59:"Le français",
  60:"Baguette + fromage",
  61:"Victor Hugo",
  62:"Claude Monet",
  63:"Culture centrale",
  64:"Transmission",
  65:"Tour Eiffel",
  66:"Organisation européenne",
  67:"Oui + pays fondateur",
  68:"€",
  69:"4-5 voisins suffisent",
  70:"Pays parlant français",
  71:"Pas de roi",
  72:"Président + gouvernement",
  73:"Vote les lois",
  74:"2 chambres",
  75:"Lois + contrôle",
  76:"Territoires",
  77:"Chef de l’État",
  78:"Politique du pays",
  79:"Appliquer",
  80:"Voter",
  81:"Justice",
  82:"Évite les abus",
  83:"Élections législatives",
  84:"Quinquennat",
  85:"Vote",
  86:"18 ans + français",
  87:"Local",
  88:"Commune",
  89:"Gestion ville",
  90:"État dans département",
  91:"Parlement",
  92:"Vote + promulgation",
  93:"Règle générale",
  94:"Gouvernement ou parlementaires",
  95:"Base du pays",
  96:"Respecter la loi",
  97:"Innocent jusqu’à preuve",
  98:"18",
  99:"Organisation + protection",
  100:"Tout le monde",
  101:"Critiquer mais respecter",
  102:"Contrôle",
  103:"Justice",
  104:"Recours = contester",
  105:"Égalité devant la loi",
  106:"Pacifique",
  107:"Liberté d’opinion",
  108:"Travail + droits",
  109:"3 sources",
  110:"Avocat + silence + juge",
  111:"Parlement / gouvernement",
  112:"Avocat",
  113:"Croire ou non",
  114:"Liberté + limites",
  115:"Historique",
  116:"Indirectement",
  117:"Oui",
  118:"Oui, avocat conseillé",
  119:"Accord juridique",
  120:"Séparation politique / justice"
};

function shuffleArray(list){
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App(){
  const [category,setCategory] = useState("Toutes");
  const [index,setIndex] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const [order,setOrder] = useState(questions);
  const [known,setKnown] = useState([]);
  const [review,setReview] = useState([]);

  const categories = [
  {key:"Toutes", label:"Toutes"},
  {key:"Questions personnelles", label:"Perso"},
  {key:"Histoire, culture et société", label:"Culture"},
  {key:"Institutions françaises", label:"Institutions"},
  {key:"Lois et République", label:"Lois"},
  {key:"Review", label:"À revoir"}
];

  const filtered = useMemo(() => {
  if (category === "Review") {
    return order.filter(q => review.includes(q.id));
  }
  return order.filter(q => category === "Toutes" || q.cat === category);
}, [order, category, review]);
  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / questions.length) * 100);

  const goNext = () => { setIndex(i => Math.min(i + 1, filtered.length - 1)); setShowAnswer(false); };
  const goPrev = () => { setIndex(i => Math.max(i - 1, 0)); setShowAnswer(false); };

  const markKnown = () => {
    if(!current) return;
    setKnown(prev => prev.includes(current.id) ? prev : [...prev, current.id]);
    setReview(prev => prev.filter(id => id !== current.id));
    goNext();
  };

  const markReview = () => {
    if(!current) return;
    setReview(prev => prev.includes(current.id) ? prev : [...prev, current.id]);
    setKnown(prev => prev.filter(id => id !== current.id));
    goNext();
  };

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .app {
          min-height: 100vh;
          min-height: 100dvh;
          background: radial-gradient(circle at top,#1e293b,#020617);
          color: white;
          font-family: Arial, sans-serif;
          padding: 18px;
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
        }
        .topbar {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
          margin-bottom: 14px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .topbar::-webkit-scrollbar { display: none; }
        .chip {
          white-space: nowrap;
          padding: 10px 15px;
          border-radius: 999px;
          border: 1px solid #334155;
          background: rgba(255,255,255,.04);
          color: #e5e7eb;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
        }
        .chip.active {
          border-color: #60a5fa;
          background: rgba(37,99,235,.28);
          color: #bfdbfe;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          color: #cbd5e1;
          font-size: 16px;
        }
        .progressText { color: #93c5fd; font-weight: 700; }
        .card {
          min-height: 300px;
          border-radius: 22px;
          border: 1px solid #334155;
          background: linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 26px;
          cursor: pointer;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,.18);
          color: #93c5fd;
          font-weight: 800;
          margin-bottom: 28px;
          font-size: 14px;
        }
        .question {
          font-size: clamp(24px,4vw,38px);
          line-height: 1.25;
          max-width: 850px;
          margin: 0;
        }
        .hint {
          color: #94a3b8;
          font-size: 16px;
          margin-top: 34px;
        }
        .answerTitle {
          font-size: 22px;
          color: #86efac;
          margin: 0 0 16px;
        }
        .answer {
          font-size: clamp(20px,3vw,28px);
          line-height: 1.45;
          max-width: 850px;
          margin: 0;
        }
        .memoryTip {
          margin-top: 22px;
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid rgba(96,165,250,.45);
          background: rgba(37,99,235,.16);
          color: #bfdbfe;
          font-size: 16px;
          font-weight: 700;
        }
        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 12px;
          margin-top: 18px;
          align-items: center;
        }
        .btn {
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #334155;
          background: rgba(255,255,255,.04);
          color: white;
          font-weight: 800;
          cursor: pointer;
          font-size: 15px;
        }
        .red { border-color: #ef4444; color: #f87171; }
        .green { border-color: #22c55e; color: #86efac; }
        .shuffleWrap { text-align: center; margin-top: 14px; }
        .shuffle { min-width: 240px; }

        @media (max-width: 640px) {
          .app {
            padding: 10px;
            padding-left: max(10px, env(safe-area-inset-left));
            padding-right: max(10px, env(safe-area-inset-right));
            padding-top: max(10px, env(safe-area-inset-top));
            padding-bottom: max(10px, env(safe-area-inset-bottom));
          }
          .container { max-width: 100%; }
          .topbar {
            gap: 8px;
            margin: 0 -10px 12px;
            padding: 0 10px 10px;
          }
          .chip {
            padding: 8px 11px;
            font-size: 12px;
            flex: 0 0 auto;
          }
          .meta {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 6px;
            font-size: 13px;
            margin-bottom: 10px;
          }
          .hideMobile { display: none; }
          .card {
            min-height: calc(100dvh - 285px);
            max-height: none;
            padding: 18px 14px;
            border-radius: 18px;
            justify-content: center;
          }
          .badge {
            font-size: 10px;
            padding: 7px 11px;
            margin-bottom: 18px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .question {
            font-size: clamp(22px, 7vw, 30px);
            line-height: 1.22;
          }
          .hint {
            font-size: 13px;
            margin-top: 24px;
          }
          .answerTitle {
            font-size: 18px;
            margin-bottom: 12px;
          }
          .answer {
            font-size: clamp(18px, 5.6vw, 23px);
            line-height: 1.35;
          }
          .memoryTip {
            font-size: 13px;
            margin-top: 14px;
            padding: 10px 12px;
          }
          .actions {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
            margin-top: 12px;
          }
          .btn {
            padding: 12px 8px;
            font-size: 13px;
            border-radius: 13px;
            min-height: 44px;
          }
          .shuffleWrap { margin-top: 10px; }
          .shuffle {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 380px) {
          .question { font-size: 21px; }
          .answer { font-size: 18px; }
          .btn { font-size: 12px; }
        }

        @media (min-width: 641px) and (max-width: 900px) {
          .container { max-width: 760px; }
          .actions { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <main className="container">
        <div className="topbar">
          {categories.map(cat => (
            <button key={cat.key} onClick={() => {setCategory(cat.key); setIndex(0); setShowAnswer(false);}} className={`chip ${category === cat.key ? "active" : ""}`}>
              {cat.label} ({cat.key === "Toutes" ? questions.length : questions.filter(q=>q.cat===cat.key).length})
            </button>
          ))}
        </div>

        {current && <>
          <div className="meta">
            <div>Question {index + 1} / {filtered.length}</div>
            <div className="progressText">{progress}% mémorisé</div>
            <div className="hideMobile">🔖 Marquer</div>
          </div>

          <div onClick={() => setShowAnswer(!showAnswer)} className="card">
            <div className="badge">{current.cat.toUpperCase()}</div>
            {!showAnswer ? <>
              <h1 className="question">{current.q}</h1>
              <p className="hint">☝️ Cliquer pour voir la réponse</p>
            </> : <>
              <h2 className="answerTitle">Réponse modèle</h2>
              <p className="answer">{sampleAnswers[current.id]}</p>
              {memoryTips[current.id] && <div className="memoryTip"><strong>Astuce :</strong> {memoryTips[current.id]}</div>}
            </>}
          </div>

          <div className="actions">
            <button onClick={goPrev} className="btn">← Précédent</button>
            <button onClick={markReview} className="btn red">↻ À revoir</button>
            <button onClick={markKnown} className="btn green">✓ Mémorisé</button>
            <button onClick={goNext} className="btn">Suivant →</button>
          </div>

          <div className="shuffleWrap">
            <button onClick={() => {setOrder(shuffleArray(questions)); setIndex(0); setShowAnswer(false);}} className="btn shuffle">🔀 Mélanger les cartes</button>
          </div>
        </>}
      </main>
    </div>
  );
}
