import React, { useMemo, useState } from "react";

const questions = [
  // ── Questions personnelles ──────────────────────────────────────────────────
  {
    id: 1,
    cat: "Questions personnelles",
    q: "Pourquoi souhaitez-vous devenir français(e) ?",
    r: `Je souhaite devenir français car la France représente aujourd'hui le centre de ma vie personnelle et professionnelle.

La France m'a accueilli et m'a permis de m'épanouir sur le plan professionnel et personnel. La premiere fois que je suis venus en France était en 2015 dans le cadre d'une mission. Puis en 2017 j'ai décroché mon premier CDI et depuis j'y vis de manière continue, et j'y ai construit un parcours solide dans le domaine de la data et de l'IA.

J'ai débuté en tant que consultant senior, puis j'ai évolué vers des fonctions à plus forte responsabilité jusqu'à occuper actuellement un poste de directeur des opérations. Mon engagement s'est également concrétisé par un investissement dans mon entreprise, dont je suis aujourd'hui associé, ce qui témoigne de ma volonté de m'inscrire durablement dans l'économie française.

Sur le plan personnel, je suis marié depuis 2018 et je partage ma vie en France avec mon épouse. Nous y avons construit notre stabilité familiale et sociale, ce qui renforce profondément mon attachement au pays.

Je me reconnais pleinement dans les valeurs de la République française, notamment le mérite, l'égalité des chances et la responsabilité. Obtenir la nationalité française représente pour moi une étape naturelle afin de m'engager pleinement dans la société, de participer activement à son développement et de construire mon avenir sur le long terme en France.`,
    astuce: "Intégration + valeurs",
  },
  {
    id: 2,
    cat: "Questions personnelles",
    q: "Que représente pour toi la nationalité française ?",
    r: `La nationalité française est pour moi une reconnaissance de mon attachement à la France et une étape naturelle dans mon parcours d'intégration.`,
    astuce: "Durée + intégration",
  },
  {
    id: 3,
    cat: "Questions personnelles",
    q: "Pourquoi avez-vous choisi de vivre en France ?",
    r: `J'ai choisi de vivre en France initialement dans le cadre d'une opportunité professionnelle en 2016, qui m'a permis de découvrir un environnement de travail dynamique et structuré, notamment dans le domaine de la data et des nouvelles technologies.

La France s'est rapidement imposée comme un choix évident grâce à la qualité de son écosystème professionnel, à la richesse de ses opportunités dans mon domaine, ainsi qu'à la stabilité qu'elle offre. J'ai particulièrement apprécié l'importance accordée à l'innovation, notamment dans les secteurs de la data et de l'intelligence artificielle.

Au-delà de l'aspect professionnel, j'ai été sensible à la qualité de vie, à l'équilibre entre vie personnelle et professionnelle, ainsi qu'aux valeurs portées par la société française. Cette première expérience positive m'a naturellement conduit à m'y installer durablement dès 2017, puis à y construire l'ensemble de mon parcours professionnel et personnel.`,
    astuce: "Stabilité + opportunités + droits",
  },
  {
    id: 4,
    cat: "Questions personnelles",
    q: "Vous sentez-vous intégré(e) ? Pourquoi ?",
    r: `Oui, je me sens pleinement intégré en France, aussi bien sur le plan professionnel que personnel.

Sur le plan professionnel, j'ai construit une grande partie de ma carrière en France depuis 2017, en évoluant de consultant senior à directeur des opérations. Aujourd'hui, j'occupe un poste à responsabilités et je suis également associé dans mon entreprise, ce qui implique une participation active au développement économique et une interaction quotidienne avec des équipes, des partenaires et des clients en France.

Sur le plan personnel, je vis en France avec mon épouse depuis notre mariage en 2018, et nous y avons construit notre stabilité familiale et sociale. Par ailleurs, je maîtrise la langue française, comme en atteste mon niveau B2 obtenu au TEF avec une moyenne de 490, ce qui me permet d'être parfaitement à l'aise dans mon environnement professionnel et dans la vie quotidienne.

Enfin, je comprends et je partage les valeurs de la République française, ce qui renforce mon sentiment d'appartenance et mon intégration dans la société.`,
    astuce: "Travail + relations + quotidien",
  },
  {
    id: 5,
    cat: "Questions personnelles",
    q: "Pourquoi avez-vous décidé de demander la naturalisation en France ?",
    r: `J'ai choisi de demander la naturalisation en France car je considère ce pays comme ma nouvelle patrie. J'admire profondément sa culture, son histoire et ses valeurs républicaines telles que la liberté, l'égalité et la fraternité. Je souhaite pleinement m'intégrer à la société française et contribuer à son enrichissement.`,
    astuce: "Langue + travail + lois",
  },
  {
    id: 6,
    cat: "Questions personnelles",
    q: "Qu'aimez-vous dans la vie en France ?",
    r: `Ce que j'apprécie particulièrement dans la vie en France, c'est d'abord l'équilibre entre vie professionnelle et vie personnelle. Cela m'a permis de construire une carrière ambitieuse tout en maintenant une stabilité familiale avec mon épouse.

J'apprécie également la qualité de l'environnement professionnel, notamment dans mon domaine de la data et de l'intelligence artificielle, où la France offre un écosystème dynamique et innovant, propice à l'évolution et à la prise de responsabilités.

Sur le plan personnel, je suis sensible à la qualité de vie, à la richesse culturelle et à la diversité, qui permettent de s'ouvrir et de s'intégrer facilement. Enfin, j'apprécie les valeurs portées par la société française, notamment l'égalité des chances, le mérite et la solidarité, qui correspondent à ma vision personnelle et professionnelle.`,
    astuce: "Stabilité + services publics + culture",
  },
  {
    id: 7,
    cat: "Questions personnelles",
    q: "Qu'est-ce qui vous plaît le moins en France ?",
    r: `Comme dans tout pays, il peut exister certains aspects du quotidien qui demandent de l'adaptation. Par exemple, j'ai dû m'habituer à certaines différences culturelles au début, notamment dans les modes de communication ou certaines habitudes.

Cependant, avec le temps, j'ai appris à les comprendre et à m'y adapter pleinement, et cela fait aujourd'hui partie de mon intégration. Cela reste pour moi très secondaire par rapport à tout ce que la vie en France m'apporte au quotidien.`,
    astuce: "Rester positif(ve)",
  },
  {
    id: 8,
    cat: "Questions personnelles",
    q: "Vous sentez-vous aujourd'hui plus français que de votre pays d'origine, ou l'inverse ?",
    r: `Aujourd'hui, je me sens profondément attaché à la France, qui est devenue mon foyer. C'est ici que je me suis construit, que j'ai développé ma vie personnelle et professionnelle, et que je me projette pour l'avenir.

Je me reconnais dans les valeurs de la République française, notamment la liberté, l'égalité et la fraternité, auxquelles j'adhère pleinement. Je me sens également proche de la culture française, de son histoire et de son art de vivre. J'ai appris à apprécier la langue, les traditions et l'esprit d'ouverture qui caractérisent la société française.

Cependant, je n'oppose pas ces deux identités. Mon pays d'origine fait partie de mon histoire et de mon parcours. Aujourd'hui, je dirais que je me sens intégré en France et en accord avec ses valeurs, ce qui me donne naturellement le sentiment d'appartenance à la communauté française. Devenir français représente pour moi une continuité logique de mon parcours et une volonté de m'engager pleinement dans la société française.`,
    astuce: "Équilibre + attachement France + respect origine + intégration",
  },
  {
    id: 9,
    cat: "Questions personnelles",
    q: "Quelles valeurs françaises partagez-vous ?",
    r: `Je partage les valeurs fondamentales de la République française : la liberté, l'égalité et la fraternité. Par exemple, l'égalité des chances est une valeur importante pour moi, que j'ai pu constater dans mon parcours professionnel en France. Je suis aussi attaché au respect des lois, à la laïcité et au sens des responsabilités, qui sont essentiels pour vivre ensemble.`,
    astuce: "Devise + respect + solidarité",
  },
  {
    id: 10,
    cat: "Questions personnelles",
    q: "Que pensez-vous de la devise « Liberté, Égalité, Fraternité » ?",
    r: `Pour moi, cette devise représente les valeurs essentielles de la France. La liberté, c'est le respect des choix de chacun, l'égalité c'est l'égalité des chances — que j'ai pu vivre dans mon parcours professionnel — et la fraternité, c'est le respect et la solidarité entre les personnes. Ce sont des valeurs dans lesquelles je me reconnais.`,
    astuce: "Devise = 3 principes",
  },
  {
    id: 11,
    cat: "Questions personnelles",
    q: "Souhaitez-vous voter ? Pourquoi ?",
    r: `Oui, je souhaite voter. Pour moi, le droit de vote est un élément essentiel de la citoyenneté et de la vie démocratique. Il permet de participer activement aux décisions qui concernent la société et son avenir.

Après avoir construit une grande partie de ma vie en France, tant sur le plan professionnel que personnel, il me semble important de pouvoir m'impliquer pleinement, notamment en participant aux choix démocratiques. Voter représente pour moi à la fois un droit et une responsabilité, ainsi qu'une manière concrète de contribuer à la vie publique.`,
    astuce: "Droit + devoir",
  },
  {
    id: 12,
    cat: "Questions personnelles",
    q: "Qu'est-ce que la citoyenneté ?",
    r: `La citoyenneté, c'est participer à la vie du pays, respecter ses lois et contribuer à la société.`,
    astuce: "Participation + lois",
  },
  {
    id: 13,
    cat: "Questions personnelles",
    q: "Que représente la République pour vous ?",
    r: `Pour moi, la République, c'est un cadre basé sur des valeurs comme la liberté, l'égalité et la fraternité, avec des lois communes qui s'appliquent à tous. Elle garantit les droits de chacun, dans le respect des autres, et permet à chaque citoyen de participer à la vie démocratique.`,
    astuce: "Droits + devoirs + lois",
  },
  {
    id: 14,
    cat: "Questions personnelles",
    q: "Avez-vous des amis français ?",
    r: `Oui, j'ai des amis français au travail et dans mon entourage.`,
    astuce: "Travail + entourage",
  },
  {
    id: 15,
    cat: "Questions personnelles",
    q: "Participez-vous à la vie locale ?",
    r: `Oui, je participe à la vie locale par des activités de quartier ou associatives quand c'est possible.`,
    astuce: "Local + associations",
  },
  {
    id: 16,
    cat: "Questions personnelles",
    q: "Êtes-vous membre d'une association ?",
    r: `Pas toujours, mais je participe quand c'est possible à des activités locales ou associatives.`,
    astuce: "Réponse honnête",
  },
  {
    id: 17,
    cat: "Questions personnelles",
    q: "Avez-vous déjà fait du bénévolat ?",
    r: `Pas dans un cadre associatif, mais pendant le Covid, j'ai aidé des voisins âgés pour leurs courses et leurs besoins du quotidien. C'était naturel pour moi, dans un esprit de solidarité.`,
    astuce: "Aider + contribuer",
  },
  {
    id: 18,
    cat: "Questions personnelles",
    q: "Avez-vous participé à une action citoyenne ?",
    r: `Pas dans un cadre associatif, mais pendant le Covid, j'ai aidé des voisins âgés pour leurs courses et leurs besoins du quotidien. C'était naturel pour moi, dans un esprit de solidarité.`,
    astuce: "Action locale",
  },
  {
    id: 19,
    cat: "Questions personnelles",
    q: "Comment vous informez-vous sur l'actualité ?",
    r: `Je m'informe par la télévision, internet, les journaux et les discussions avec mon entourage.`,
    astuce: "TV + internet + journaux",
  },
  {
    id: 20,
    cat: "Questions personnelles",
    q: "Parlez-vous français à la maison ?",
    r: `Oui, je parle français à la maison pour progresser et favoriser l'intégration de ma famille.`,
    astuce: "Français = intégration",
  },
  {
    id: 21,
    cat: "Questions personnelles",
    q: "Comment améliorez-vous votre français ?",
    r: `J'améliore mon français en lisant, en parlant avec les autres et en suivant l'actualité.`,
    astuce: "Lire / parler / actualité",
  },
  {
    id: 22,
    cat: "Questions personnelles",
    q: "Travaillez-vous en France ?",
    r: `Oui, je travaille en France.`,
    astuce: "Oui simple",
  },
  {
    id: 23,
    cat: "Questions personnelles",
    q: "Quel est votre métier ?",
    r: `J'exerce un métier qui me permet de participer à la société et de construire mon avenir en France.`,
    astuce: "Métier = contribution",
  },
  {
    id: 24,
    cat: "Questions personnelles",
    q: "Quels sont vos projets en France ?",
    r: `Mes projets sont de m'installer durablement, développer ma carrière et construire ma vie familiale en France.`,
    astuce: "Stabilité + avenir",
  },
  {
    id: 25,
    cat: "Questions personnelles",
    q: "Souhaitez-vous rester en France définitivement ?",
    r: `Oui, tout à fait. J'ai construit ma vie en France, aussi bien professionnellement que personnellement, et mon objectif est de m'y inscrire durablement.`,
    astuce: "Durablement",
  },
  {
    id: 26,
    cat: "Questions personnelles",
    q: "Quelle est votre plus grande fierté en France ?",
    r: `Ma plus grande fierté en France, c'est mon parcours professionnel. J'ai évolué de consultant senior à directeur des opérations, et aujourd'hui je suis aussi associé dans mon entreprise. C'est une vraie satisfaction, car cela reflète le travail et les opportunités que j'ai trouvées en France.`,
    astuce: "Place + emploi stable",
  },
  {
    id: 27,
    cat: "Questions personnelles",
    q: "Quelle difficulté avez-vous rencontrée ?",
    r: `Au début, la langue et l'adaptation culturelle ont été les principales difficultés.`,
    astuce: "Langue ou culture",
  },
  {
    id: 28,
    cat: "Questions personnelles",
    q: "Comment avez-vous surmonté cette difficulté ?",
    r: `J'ai surmonté ces difficultés en apprenant, en pratiquant le français et en faisant des efforts régulièrement.`,
    astuce: "Efforts réguliers",
  },
  {
    id: 29,
    cat: "Questions personnelles",
    q: "Quels sont vos loisirs ?",
    r: `Mes loisirs sont la lecture, le sport, les promenades et les activités culturelles.`,
    astuce: "3 exemples simples",
  },
  {
    id: 30,
    cat: "Questions personnelles",
    q: "Quelles sont les principales fêtes célébrées en France ?",
    r: `En France, les principales fêtes sont :
• Le 1er janvier : Le Nouvel An.
• Le Lundi de Pâques : Fête chrétienne célébrant la résurrection de Jésus.
• Le 1er mai : Fête du Travail.
• Le 14 juillet : Fête nationale, commémorant la prise de la Bastille.
• Le 15 août : L'Assomption, fête chrétienne.
• Le 1er novembre : La Toussaint, fête des défunts.
• Le 25 décembre : Noël, célébration de la naissance de Jésus.`,
    astuce: "Nouvel An, 14 juillet, Noël",
  },
  {
    id: 31,
    cat: "Questions personnelles",
    q: "Célébrez-vous des fêtes françaises ?",
    r: `Oui, je célèbre certaines fêtes françaises avec ma famille ou mes amis.`,
    astuce: "Famille ou amis",
  },
  {
    id: 32,
    cat: "Questions personnelles",
    q: "Quel aspect de la culture française vous a marqué ?",
    r: `Ce qui m'a marqué, c'est l'importance de la culture, du débat et de l'accès aux musées et aux événements culturels.`,
    astuce: "Culture + débat",
  },
  {
    id: 33,
    cat: "Questions personnelles",
    q: "Que pensez-vous de l'école en France ?",
    r: `Je pense que l'école en France offre une éducation de qualité et donne une chance aux enfants de réussir.`,
    astuce: "Éducation de qualité",
  },
  {
    id: 34,
    cat: "Questions personnelles",
    q: "Que pensez-vous de la liberté d'expression ?",
    r: `La liberté d'expression est essentielle, mais elle doit s'exercer dans le respect des lois et des autres.`,
    astuce: "Liberté + limites",
  },
  {
    id: 35,
    cat: "Questions personnelles",
    q: "Que pensez-vous de la laïcité ?",
    r: `La laïcité garantit la neutralité de l'État et la liberté de croire ou de ne pas croire.`,
    astuce: "Neutralité + liberté",
  },
  {
    id: 36,
    cat: "Questions personnelles",
    q: "Qu'appréciez-vous dans le mode de vie français ?",
    r: `J'apprécie l'équilibre entre le travail, la vie personnelle, la culture et les relations sociales.`,
    astuce: "Équilibre",
  },
  {
    id: 37,
    cat: "Questions personnelles",
    q: "Avez-vous des enfants scolarisés en France ?",
    r: `Oui, mes enfants sont scolarisés en France.`,
    astuce: "Oui simple",
  },
  {
    id: 38,
    cat: "Questions personnelles",
    q: "Quelle langue parlez-vous avec vos enfants ?",
    r: `Je parle principalement français avec mes enfants pour les aider à bien s'intégrer.`,
    astuce: "Français principalement",
  },
  {
    id: 39,
    cat: "Questions personnelles",
    q: "Quel conseil donneriez-vous à un nouvel arrivant ?",
    r: `Je lui conseillerais d'apprendre la langue, de respecter les règles, de s'informer et d'être patient.`,
    astuce: "Langue + patience",
  },
  {
    id: 40,
    cat: "Questions personnelles",
    q: "Que signifie être un bon citoyen ?",
    r: `Être un bon citoyen, c'est respecter les lois, participer à la société et faire preuve de civisme.`,
    astuce: "Lois + participation",
  },

  // ── Histoire, culture et société ───────────────────────────────────────────
  {
    id: 41,
    cat: "Histoire, culture et société",
    q: "Qui est le président de la République ?",
    r: `Le président de la République est Emmanuel Macron. Il a été réélu en 2022.`,
    astuce: "À vérifier avant l'entretien",
  },
  {
    id: 42,
    cat: "Histoire, culture et société",
    q: "Quels sont les symboles de la République française ?",
    r: `Les principaux symboles sont le drapeau bleu-blanc-rouge, Marianne, La Marseillaise et la devise Liberté, Égalité, Fraternité. On peut aussi citer le coq gaulois comme symbole traditionnel de la France.`,
    astuce: "Drapeau, Marianne, Marseillaise, devise",
  },
  {
    id: 43,
    cat: "Histoire, culture et société",
    q: "Que représente le drapeau français ?",
    r: `Le drapeau français est bleu, blanc et rouge. Il représente la République française et ses valeurs. Le bleu et le rouge sont associés à Paris, et le blanc est traditionnellement associé à la monarchie.`,
    astuce: "Bleu blanc rouge",
  },
  {
    id: 44,
    cat: "Histoire, culture et société",
    q: "Que représente Marianne ?",
    r: `Marianne représente la République française. Elle incarne les valeurs de liberté, d'égalité et de fraternité. On voit souvent son buste dans les mairies.`,
    astuce: "Symbole de la République",
  },
  {
    id: 45,
    cat: "Histoire, culture et société",
    q: "Quel est l'hymne national français ?",
    r: `L'hymne national français est La Marseillaise. Elle a été composée en 1792 par Rouget de Lisle et elle est devenue l'hymne national de la République.`,
    image: "/images/Marseillaise.png",
    astuce: "La Marseillaise",
  },
  {
    id: 46,
    cat: "Histoire, culture et société",
    q: "Quelle est la fête nationale française ?",
    r: `La fête nationale française est le 14 juillet. Elle rappelle la Révolution française, notamment la prise de la Bastille en 1789, et la fête de la Fédération en 1790.`,
    astuce: "14 juillet",
  },
  {
    id: 47,
    cat: "Histoire, culture et société",
    q: "Que marque l'année 1789 ?",
    r: `L'année 1789 marque le début de la Révolution française, avec la prise de la Bastille et la Déclaration des droits de l'homme et du citoyen. Elle marque aussi la fin progressive de la monarchie absolue.`,
    astuce: "Révolution + Bastille + DDHC",
  },
  {
    id: 48,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que la Révolution française ?",
    r: `La Révolution française est un événement majeur qui commence en 1789. Elle met fin à la monarchie absolue et fonde de nouveaux principes politiques comme la liberté, l'égalité et la souveraineté du peuple.`,
    astuce: "Fin monarchie absolue",
  },
  {
    id: 49,
    cat: "Histoire, culture et société",
    q: "Qui était Napoléon Bonaparte ?",
    r: `Napoléon Bonaparte était un général de la Révolution devenu Premier consul puis empereur des Français. Il a marqué la France par ses conquêtes, mais aussi par des réformes importantes comme le Code civil de 1804, les lycées et la Légion d'honneur.`,
    astuce: "Empereur + Code civil",
  },
  {
    id: 50,
    cat: "Histoire, culture et société",
    q: "Qui était Charles de Gaulle ?",
    r: `Charles de Gaulle était un général français. Il a dirigé la France libre pendant la Seconde Guerre mondiale et il est ensuite devenu le fondateur de la Ve République en 1958.`,
    astuce: "France libre + Ve République",
  },
  {
    id: 51,
    cat: "Histoire, culture et société",
    q: "Quand a eu lieu la Première Guerre mondiale ?",
    r: `La Première Guerre mondiale a eu lieu de 1914 à 1918. Le 11 novembre 1918 marque l'armistice, c'est-à-dire la fin des combats.`,
    astuce: "1914-1918",
  },
  {
    id: 52,
    cat: "Histoire, culture et société",
    q: "Quand a eu lieu la Seconde Guerre mondiale ?",
    r: `La Seconde Guerre mondiale a eu lieu de 1939 à 1945. En Europe, elle se termine le 8 mai 1945 avec la capitulation de l'Allemagne nazie.`,
    astuce: "1939-1945",
  },
  {
    id: 53,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que la Déclaration des droits de l'homme et du citoyen ?",
    r: `La Déclaration des droits de l'homme et du citoyen est un texte fondamental de 1789. Elle affirme des droits essentiels comme la liberté, l'égalité devant la loi et la souveraineté du peuple.`,
    astuce: "1789 + droits fondamentaux",
  },
  {
    id: 54,
    cat: "Histoire, culture et société",
    q: "Quelle est la devise de la République française ?",
    r: `La devise de la République française est Liberté, Égalité, Fraternité. Elle résume les grandes valeurs républicaines.`,
    astuce: "Liberté Égalité Fraternité",
  },
  {
    id: 55,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que la laïcité ?",
    r: `La laïcité signifie que l'État est neutre envers les religions. Chacun est libre de croire, de ne pas croire ou de changer de religion, dans le respect de la loi et des autres.`,
    astuce: "Neutralité + liberté de conscience",
  },
  {
    id: 56,
    cat: "Histoire, culture et société",
    q: "Quelle est la langue officielle de la République ?",
    r: `La langue officielle de la République est le français.`,
    astuce: "Le français",
  },
  {
    id: 57,
    cat: "Histoire, culture et société",
    q: "Citez des plats typiques français.",
    r: `On peut citer le bœuf bourguignon, la blanquette de veau, la ratatouille, la quiche lorraine, le cassoulet, la choucroute, la tartiflette ou encore les crêpes bretonnes. La gastronomie fait partie du patrimoine culturel français.`,
    astuce: "3 ou 4 exemples suffisent",
  },
  {
    id: 58,
    cat: "Histoire, culture et société",
    q: "Pouvez-vous citer des personnalités françaises connues ?",
    r: `Oui, par exemple Victor Hugo en littérature, Marie Curie en science, Claude Monet en peinture, Charles de Gaulle en histoire, Édith Piaf en chanson et Zinedine Zidane dans le sport.`,
    astuce: "Plusieurs domaines",
  },
  {
    id: 59,
    cat: "Histoire, culture et société",
    q: "Connaissez-vous des artistes français ?",
    r: `Oui, on peut citer Claude Monet pour la peinture, Auguste Rodin pour la sculpture, Édith Piaf pour la chanson et François Truffaut pour le cinéma.`,
    astuce: "Monet, Rodin, Piaf",
  },
  {
    id: 60,
    cat: "Histoire, culture et société",
    q: "Quelle est l'importance de la culture en France ?",
    r: `La culture est très importante en France. Elle fait partie de l'identité du pays et elle est valorisée par les musées, le cinéma, la littérature, la musique, les monuments et le patrimoine.`,
    astuce: "Identité + patrimoine",
  },
  {
    id: 61,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que le patrimoine ?",
    r: `Le patrimoine désigne l'ensemble des biens culturels, historiques, architecturaux ou naturels transmis par les générations précédentes. Il faut le protéger pour les générations futures.`,
    astuce: "Transmission",
  },
  {
    id: 62,
    cat: "Histoire, culture et société",
    q: "Connaissez-vous des monuments français ?",
    r: `Oui, par exemple la Tour Eiffel, l'Arc de Triomphe, le Louvre, Notre-Dame de Paris, le château de Versailles et le Mont-Saint-Michel.`,
    astuce: "Tour Eiffel + Versailles",
  },
  {
    id: 63,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que l'Union européenne ?",
    r: `L'Union européenne est une organisation qui regroupe 27 pays européens. Elle permet aux États membres de coopérer pour la paix, l'économie, les droits des citoyens et la libre circulation.`,
    astuce: "27 pays + coopération",
  },
  {
    id: 64,
    cat: "Histoire, culture et société",
    q: "La France fait-elle partie de l'Union européenne ?",
    r: `Oui, la France fait partie de l'Union européenne. Elle est même l'un des pays fondateurs de la construction européenne.`,
    astuce: "Pays fondateur",
  },
  {
    id: 65,
    cat: "Histoire, culture et société",
    q: "Quelle est la monnaie utilisée en France ?",
    r: `La monnaie utilisée en France est l'euro. Les billets et pièces en euros sont utilisés depuis le 1er janvier 2002.`,
    astuce: "Euro depuis 2002",
  },
  {
    id: 66,
    cat: "Histoire, culture et société",
    q: "Quels sont les pays voisins de la France ?",
    r: `Les pays voisins de la France métropolitaine sont la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, Monaco, l'Espagne et Andorre.`,
    astuce: "Belgique, Allemagne, Suisse, Italie, Espagne",
  },
  {
    id: 67,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que la francophonie ?",
    r: `La francophonie désigne l'ensemble des personnes et des pays qui utilisent la langue française. Elle représente aussi un lien culturel entre plusieurs pays dans le monde.`,
    astuce: "Pays et personnes parlant français",
  },
  {
    id: 68,
    cat: "Histoire, culture et société",
    q: "Qui était Clovis ?",
    r: `Clovis était un roi des Francs. Il a unifié une grande partie de la Gaule et il est connu pour sa conversion au christianisme, qui a marqué l'histoire de la France.`,
    astuce: "Premier roi des Francs important",
  },
  {
    id: 69,
    cat: "Histoire, culture et société",
    q: "Qui était Charlemagne ?",
    r: `Charlemagne était un roi des Francs devenu empereur d'Occident en l'an 800. Il a agrandi son empire et encouragé le développement de l'enseignement.`,
    astuce: "Empereur en 800",
  },
  {
    id: 70,
    cat: "Histoire, culture et société",
    q: "Qui était Hugues Capet ?",
    r: `Hugues Capet est le fondateur de la dynastie des Capétiens en 987. Cette dynastie a régné sur la France pendant plusieurs siècles.`,
    astuce: "987 + Capétiens",
  },
  {
    id: 71,
    cat: "Histoire, culture et société",
    q: "Pouvez-vous citer des rois de France marquants ?",
    r: `Oui, on peut citer Clovis, Charlemagne, François Ier, Henri IV, Louis XIV et Louis XVI. Louis XIV est associé à Versailles et à la monarchie absolue, tandis que Louis XVI est le roi de la période de la Révolution française.`,
    astuce: "Louis XIV + Louis XVI",
  },
  {
    id: 72,
    cat: "Histoire, culture et société",
    q: "Qui était Jeanne d'Arc ?",
    r: `Jeanne d'Arc est une héroïne française du XVe siècle. Elle a aidé le roi Charles VII pendant la guerre de Cent Ans. Elle a été capturée puis brûlée vive à Rouen en 1431.`,
    astuce: "Héroïne française",
  },
  {
    id: 73,
    cat: "Histoire, culture et société",
    q: "Que signifie la monarchie absolue ?",
    r: `La monarchie absolue est un régime politique où le roi concentre tous les pouvoirs. Il décide seul des grandes affaires de l'État, sans véritable contrôle démocratique.`,
    astuce: "Le roi a tous les pouvoirs",
  },
  {
    id: 74,
    cat: "Histoire, culture et société",
    q: "Qui était Louis XIV ?",
    r: `Louis XIV, appelé le Roi-Soleil, est un roi de France connu pour la monarchie absolue et pour le château de Versailles. Son règne a fortement marqué l'histoire française.`,
    astuce: "Roi-Soleil + Versailles",
  },
  {
    id: 75,
    cat: "Histoire, culture et société",
    q: "Que symbolise le château de Versailles ?",
    r: `Le château de Versailles symbolise la grandeur de la France et le pouvoir royal sous Louis XIV. C'est aussi aujourd'hui un grand lieu du patrimoine français.`,
    astuce: "Pouvoir royal + patrimoine",
  },
  {
    id: 76,
    cat: "Histoire, culture et société",
    q: "Qui étaient les philosophes des Lumières ?",
    r: `Les philosophes des Lumières étaient des penseurs du XVIIIe siècle qui défendaient la raison, la liberté, la tolérance et le progrès. Ils ont influencé la Révolution française.`,
    astuce: "Raison, liberté, tolérance",
  },
  {
    id: 77,
    cat: "Histoire, culture et société",
    q: "Citez un philosophe des Lumières.",
    r: `On peut citer Voltaire, Rousseau, Montesquieu ou Diderot. Par exemple, Montesquieu est connu pour ses idées sur la séparation des pouvoirs.`,
    astuce: "Voltaire ou Montesquieu",
  },
  {
    id: 78,
    cat: "Histoire, culture et société",
    q: "Que s'est-il passé le 8 mai 1945 ?",
    r: `Le 8 mai 1945 marque la victoire des Alliés et la capitulation de l'Allemagne nazie. C'est la fin de la Seconde Guerre mondiale en Europe.`,
    astuce: "Victoire 1945",
  },
  {
    id: 79,
    cat: "Histoire, culture et société",
    q: "Que s'est-il passé le 11 novembre 1918 ?",
    r: `Le 11 novembre 1918 marque l'armistice de la Première Guerre mondiale. C'est la fin des combats entre les pays en guerre.`,
    astuce: "Armistice 1918",
  },
  {
    id: 80,
    cat: "Histoire, culture et société",
    q: "Que s'est-il passé le 6 juin 1944 en France ?",
    r: `Le 6 juin 1944, les Alliés ont débarqué en Normandie. Cet événement, appelé le Jour J, a été une étape importante dans la libération de la France pendant la Seconde Guerre mondiale.`,
    astuce: "Débarquement de Normandie",
  },
  {
    id: 81,
    cat: "Histoire, culture et société",
    q: "Peut-on circuler librement en Europe ?",
    r: `Oui, dans l'espace Schengen, les personnes peuvent circuler librement entre plusieurs pays européens, sans contrôle systématique aux frontières intérieures.`,
    astuce: "Espace Schengen",
  },
  {
    id: 82,
    cat: "Histoire, culture et société",
    q: "Peut-on travailler dans un autre pays européen ?",
    r: `Oui, un citoyen de l'Union européenne peut travailler dans un autre pays membre, sous réserve de respecter les règles du pays concerné.`,
    astuce: "Libre circulation des travailleurs",
  },
  {
    id: 83,
    cat: "Histoire, culture et société",
    q: "Pouvez-vous citer les principales institutions européennes et leurs rôles ?",
    r: `• Le Parlement européen : Élu au suffrage universel, il vote les lois et le budget.
• Le Conseil européen : Réunit les chefs d'État pour définir les orientations politiques.
• La Commission européenne : Propose les lois et veille à leur application (pouvoir exécutif).
• La Banque Centrale Européenne (BCE) : Assure la stabilité des prix et gère l'euro.`,
    astuce: "Le Conseil dirige Antonio Costa (Port), la Commission exécute Ursula von der Leyen (DE), BCE Christine Lagarde, Parlement Roberta Metsola",
  },
  {
    id: 84,
    cat: "Histoire, culture et société",
    q: "La France est-elle une grande puissance ?",
    r: `Oui, la France est une grande puissance économique, diplomatique, militaire et culturelle. Elle est membre de l'Union européenne, de l'ONU et dispose d'une influence internationale importante.`,
    astuce: "Économie, diplomatie, culture",
  },
  {
    id: 85,
    cat: "Histoire, culture et société",
    q: "Citez un secteur fort en France.",
    r: `La France est forte dans plusieurs secteurs comme l'aéronautique avec Airbus, le luxe, le tourisme, l'agroalimentaire, l'énergie et la culture.`,
    astuce: "Aéronautique, luxe, tourisme",
  },
  {
    id: 86,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que la Sécurité sociale ?",
    r: `La Sécurité sociale est un système de protection sociale. Elle aide à couvrir les risques de la vie comme la maladie, la retraite, la famille ou les accidents du travail.`,
    astuce: "Protection sociale",
  },
  {
    id: 87,
    cat: "Histoire, culture et société",
    q: "Qui finance la Sécurité sociale ?",
    r: `La Sécurité sociale est principalement financée par les cotisations sociales des salariés et des employeurs, ainsi que par certains impôts comme la CSG.`,
    astuce: "Cotisations + impôts",
  },
  {
    id: 88,
    cat: "Histoire, culture et société",
    q: "L'instruction est-elle obligatoire en France ?",
    r: `Oui, l'instruction est obligatoire pour tous les enfants, français ou étrangers, de 3 à 16 ans. Cela montre l'importance de l'éducation dans la République.`,
    astuce: "3 à 16 ans",
  },
  {
    id: 89,
    cat: "Histoire, culture et société",
    q: "L'école publique est-elle gratuite et laïque ?",
    r: `Oui, l'école publique est gratuite et laïque. Elle respecte la neutralité religieuse et accueille les élèves sans distinction d'origine, de religion ou de situation sociale.`,
    astuce: "Gratuite + laïque",
  },
  {
    id: 90,
    cat: "Histoire, culture et société",
    q: "Pouvez-vous citer des écrivains français et leurs œuvres ?",
    r: `Oui, Victor Hugo a écrit Les Misérables et Notre-Dame de Paris. Émile Zola a écrit Germinal. Gustave Flaubert a écrit Madame Bovary. Albert Camus a écrit L'Étranger et La Peste.`,
    astuce: "Hugo, Zola, Flaubert, Camus",
  },
  {
    id: 91,
    cat: "Histoire, culture et société",
    q: "Qu'est-ce que l'égalité entre les hommes et les femmes ?",
    r: `L'égalité entre les hommes et les femmes signifie qu'ils ont les mêmes droits, les mêmes devoirs et les mêmes chances dans la société, au travail, en famille et dans la vie publique.`,
    astuce: "Même droits + mêmes chances",
  },
  {
    id: 92,
    cat: "Histoire, culture et société",
    q: "Qui était Simone Veil ?",
    r: `Simone Veil était une femme d'État française, rescapée de la Shoah. Elle est connue pour avoir porté la loi de 1975 qui a dépénalisé l'interruption volontaire de grossesse. Elle a aussi été présidente du Parlement européen.`,
    astuce: "IVG + Europe",
  },
  {
    id: 93,
    cat: "Histoire, culture et société",
    q: "Quand la peine de mort a-t-elle été abolie en France ?",
    r: `La peine de mort a été abolie en France en 1981, sous la présidence de François Mitterrand. Cette abolition a été portée par Robert Badinter.`,
    astuce: "1981 + Badinter",
  },
  {
    id: 94,
    cat: "Histoire, culture et société",
    q: "Peut-on exprimer ses opinions en France ?",
    r: `Oui, la liberté d'expression est un droit fondamental en France. On peut exprimer ses opinions, mais dans le respect de la loi, sans diffamation, menace ou incitation à la haine.`,
    astuce: "Liberté avec limites légales",
  },
  {
    id: 95,
    cat: "Histoire, culture et société",
    q: "Peut-on manifester en France ?",
    r: `Oui, le droit de manifester existe en France. Une manifestation doit être déclarée et elle doit rester pacifique et respecter l'ordre public.`,
    astuce: "Droit de manifester",
  },
  {
    id: 96,
    cat: "Histoire, culture et société",
    q: "Peut-on choisir sa religion ou ne pas en avoir ?",
    r: `Oui, chacun est libre de choisir sa religion, d'en changer ou de ne pas en avoir. C'est la liberté de conscience, protégée par la laïcité et par la loi.`,
    astuce: "Liberté de conscience",
  },
  {
    id: 97,
    cat: "Histoire, culture et société",
    q: "Citez une personne naturalisée française connue.",
    r: `On peut citer Marie Curie, née en Pologne et devenue française. Elle a reçu deux prix Nobel et elle repose au Panthéon. C'est un bon exemple d'intégration et de contribution à la France.`,
    astuce: "Marie Curie",
  },
  {
    id: 98,
    cat: "Histoire, culture et société",
    q: "Citez une personne naturalisée.",
    r: `• Marie Curie (1867-1934) : physicienne née en Pologne, double prix Nobel (physique et chimie) et inhumée au Panthéon.
• Léon Gambetta (1838-1882) : petit-fils d'un commerçant italien, il est l'un des pères de la IIIe République.
• Joseph Kessel (1898-1979) : grand reporter et romancier né en Argentine, élu à l'Académie française en 1962.`,
    astuce: "Marie Curie, Gambetta ou Kessel",
  },
  {
    id: 99,
    cat: "Histoire, culture et société",
    q: "Donnez le nom de reines de France.",
    r: `• Anne d'Autriche : Mère de Louis XIV « le Roi Soleil »
• Marie-Antoinette d'Autriche : Épouse de Louis XVI
• Joséphine de la Pagerie : 1ère épouse de l'empereur Napoléon 1er
• Anne de Bretagne : Épouse de Charles VIII`,
    astuce: "Anne d'Autriche ou Marie-Antoinette",
  },
  {
    id: 100,
    cat: "Histoire, culture et société",
    q: "Pourriez-vous citer des rois de France marquants et leurs accomplissements ?",
    r: `• Clovis Ier (481-511) : Premier roi des Francs à unifier le royaume et à se convertir au christianisme.
• Louis IX (Saint Louis) (1226-1270) : Connu pour sa piété, ses réformes judiciaires et sa canonisation.
• Charles VII (1422-1461) : Sacré à Reims grâce à l'intervention de Jeanne d'Arc durant la guerre de Cent Ans.
• François Ier (1515-1547) : Roi de la Renaissance et grand mécène artistique.
• Henri IV (1589-1610) : Premier Bourbon, auteur de l'Édit de Nantes mettant fin aux guerres de religion.
• Louis XIV (1643-1715) : Le Roi Soleil, symbole de l'absolutisme et constructeur de Versailles.
• Louis XVI (1774-1792) : Dernier roi de l'Ancien Régime, guillotiné en 1793 après la Révolution.`,
    astuce: "Clovis, Charles VII, Louis XIV ou Louis XVI",
  },
  {
    id: 101,
    cat: "Histoire, culture et société",
    q: "Donnez le nom de littéraires français et les titres de leurs écrits.",
    r: `• Voltaire : Candide, Lettres philosophiques
• Rousseau : Du contrat social, Les Confessions
• Montesquieu : De l'Esprit des lois, Lettres persanes
• Diderot : Jacques le fataliste, L'Encyclopédie
• Victor Hugo : Les Misérables, Notre-Dame de Paris
• Flaubert : Madame Bovary, L'Éducation sentimentale
• Émile Zola : Germinal, L'Assommoir
• Albert Camus : L'Étranger, La Peste`,
    astuce: "Grands auteurs classiques",
  },
  {
    id: 102,
    cat: "Histoire, culture et société",
    q: "Pouvez-vous citer quelques ministres actuels du gouvernement (en 2026) ?",
    r: `Le gouvernement est dirigé par le Premier ministre Sébastien Lecornu. Parmi les principaux ministres, on trouve :
• Laurent Nuñez : Ministre de l'Intérieur.
• Jean-Noël Barrot : Ministre de l'Europe et des Affaires étrangères.
• Roland Lescure : Ministre de l'Économie, des Finances et de la Souveraineté industrielle.
• Édouard Geffray : Ministre de l'Éducation nationale.
• Gérald Darmanin : Garde des Sceaux, Ministre de la Justice.
• Catherine Vautrin : Ministre des Armées et des Anciens combattants.`,
    astuce: "Nuñez (Intérieur), Barrot (Affaires étrangères), Darmanin (Justice).",
  },
  {
    id: 103,
    cat: "Histoire, culture et société",
    q: "Que pouvez-vous nous dire sur le fonctionnement du Parlement et des institutions françaises ?",
    r: `• Le Parlement : composé de l'Assemblée nationale (577 députés élus pour 5 ans au Palais Bourbon) et du Sénat (348 sénateurs élus pour 6 ans par de grands électeurs au Palais du Luxembourg).
• Le Sénat : son président assure l'intérim en cas de vacance de la présidence de la République.
• Le Conseil constitutionnel : composé de 9 membres nommés pour 9 ans, il veille au respect de la Constitution par les lois.
• Parité : la loi de 2000 oblige à un nombre égal de candidats hommes et femmes ; en 2026, l'Assemblée compte environ 36 % de femmes.`,
    image: "/images/Resume_Institition.png",
    astuce: "Assemblée (députés), Sénat (sénateurs), Conseil constitutionnel.",
  },

  // ── Géographie et Territoires ──────────────────────────────────────────────
  {
    id: 104,
    cat: "Géographie et Territoires",
    q: "Quelles sont les régions de la France ?",
    r: `La France compte 13 régions métropolitaines + 5 OM :
1. Île-de-France : Paris, Versailles, Créteil
2. Provence-Alpes-Côte d'Azur : Marseille, Nice, Toulon
3. Auvergne-Rhône-Alpes : Lyon, Grenoble, Clermont-Ferrand
4. Bretagne : Rennes, Brest
5. Normandie : Rouen, Caen, Le Havre
6. Grand Est : Strasbourg, Metz, Reims
7. Hauts-de-France : Lille, Amiens, Dunkerque
8. Pays de la Loire : Nantes, Angers, Le Mans
9. Occitanie : Toulouse, Montpellier, Nîmes
10. Nouvelle-Aquitaine : Bordeaux, Limoges, Poitiers
11. Centre-Val de Loire : Tours, Orléans, Bourges
12. Bourgogne-Franche-Comté : Dijon, Besançon, Auxerre
13. Corse : Ajaccio, Bastia, Corte

La France comprend également des territoires d'outre-mer :
- La Guadeloupe : dans les Caraïbes
- La Martinique : dans les Caraïbes
- La Guyane : en Amérique du Sud
- La Réunion : dans l'océan Indien
- Mayotte : dans l'océan Indien

Ces territoires font partie de la République française et possèdent des statuts spécifiques.`,
    image: "/images/Regions.png",
    astuce: "13 régions + outre-mer + rester synthétique",
  },
  {
    id: 105,
    cat: "Géographie et Territoires",
    q: "Quelles sont les collectivités locales ?",
    r: `Les trois principaux niveaux sont : la commune, le département et la région.`,
    astuce: "3 niveaux",
  },
  {
    id: 106,
    cat: "Géographie et Territoires",
    q: "Que fait la commune ?",
    r: `La commune gère les services de proximité (écoles primaires, voirie locale) et s'occupe de l'état civil.`,
    astuce: "Local",
  },
  {
    id: 107,
    cat: "Géographie et Territoires",
    q: "Qui dirige une commune ?",
    r: `C'est le maire, élu par le conseil municipal.`,
    astuce: "Maire",
  },
  {
    id: 108,
    cat: "Géographie et Territoires",
    q: "Qui représente l'État dans les régions ?",
    r: `C'est le préfet de région (par exemple Etienne Stoskopf dans le Val-de-Marne).`,
    astuce: "Préfet",
  },
  {
    id: 109,
    cat: "Géographie et Territoires",
    q: "Quel est le plus long fleuve de France ?",
    r: "La Loire (environ 1006 km).",
    astuce: "Loire",
  },
  {
    id: 110,
    cat: "Géographie et Territoires",
    q: "Citez des chaînes de montagnes en France.",
    r: `On peut citer :
- Les Alpes (avec le Mont Blanc)
- Les Pyrénées (frontière avec l'Espagne)
- Le Massif central (volcans éteints)
- Les Vosges
- Le Jura (frontière avec la Suisse)`,
    astuce: "5 chaînes",
  },
  {
    id: 111,
    cat: "Géographie et Territoires",
    q: "Citez un fleuve français.",
    r: "La Seine, la Loire, le Rhône, la Garonne ou le Rhin.",
    astuce: "Seine, Loire, Rhône, Garonne",
  },
  {
    id: 112,
    cat: "Géographie et Territoires",
    q: "Combien y a-t-il de régions en France ?",
    r: `Il y a 13 régions en métropole (depuis 2016) et 5 régions d'outre-mer.`,
    astuce: "13",
  },
  {
    id: 113,
    cat: "Géographie et Territoires",
    q: "Combien y a-t-il de départements ?",
    r: `La France compte 101 départements au total.`,
    astuce: "101",
  },
  {
    id: 114,
    cat: "Géographie et Territoires",
    q: "Quelles sont les 3 types de collectivités en France ?",
    r: `Il existe trois types de collectivités territoriales : les communes (proximité), les départements (action sociale) et les régions (développement économique).`,
    astuce: "Communes, Départements, Régions",
  },
  {
    id: 115,
    cat: "Géographie et Territoires",
    q: "Combien y a-t-il d'habitants en France ?",
    r: "Environ 68,4 millions (selon les dernières données de l'INSEE).",
    astuce: "68-69 millions",
  },
  {
    id: 116,
    cat: "Géographie et Territoires",
    q: "Quelle est la surface de la France ?",
    r: "Environ 633 000 km² (en incluant l'outre-mer).",
    astuce: "Surface",
  },
  {
    id: 117,
    cat: "Géographie et Territoires",
    q: "La France est-elle membre de l'ONU ?",
    r: "Oui, elle est l'un des membres fondateurs.",
    astuce: "ONU",
  },
  {
    id: 118,
    cat: "Géographie et Territoires",
    q: "Quel est le rôle de la France à l'ONU ?",
    r: "Elle est membre permanent du Conseil de sécurité. Elle œuvre pour la paix, la sécurité internationale et la protection des droits humains.",
    astuce: "Conseil de sécurité",
  },
  {
    id: 119,
    cat: "Géographie et Territoires",
    q: "Donnez des noms de grandes villes françaises.",
    r: `On peut citer Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Strasbourg, Montpellier ou Bordeaux.`,
    astuce: "5-6 villes principales",
  },
  {
    id: 120,
    cat: "Géographie et Territoires",
    q: "Qui gère les lycées ?",
    r: "C'est la Région.",
    astuce: "Région",
  },
  {
    id: 121,
    cat: "Géographie et Territoires",
    q: "Qui gère les collèges ?",
    r: "C'est le Département.",
    astuce: "Département",
  },
  {
    id: 122,
    cat: "Géographie et Territoires",
    q: "Qui gère les écoles primaires et maternelles ?",
    r: "C'est la Commune (la mairie).",
    astuce: "Commune",
  },
  {
    id: 123,
    cat: "Géographie et Territoires",
    q: "Qu'est-ce qu'une région ?",
    r: "Une collectivité territoriale qui regroupe plusieurs départements et gère notamment les lycées et les transports régionaux.",
    astuce: "Région",
  },
  {
    id: 124,
    cat: "Géographie et Territoires",
    q: "Qu'est-ce qu'un département ?",
    r: "Une division administrative chargée notamment de l'action sociale (RSA, aide aux personnes âgées) et des collèges.",
    astuce: "Département",
  },

  // ── Institutions et Vie Politique ──────────────────────────────────────────
  {
    id: 125,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce que la République ?",
    r: `La République est un régime politique sans roi, fondé sur la souveraineté du peuple et le respect des lois.`,
    image: "/images/institutions_pouvoirs_valeurs.png",
    astuce: "Pas de roi",
  },
  {
    id: 126,
    cat: "Institutions et Vie Politique",
    q: "Qui dirige la France ?",
    r: `La France est dirigée par le président de la République et le gouvernement (Premier ministre).`,
    astuce: "Président + gouvernement",
  },
{
  id: 127,
  cat: "Institutions et Vie Politique",
  q: "Qu'est-ce que le Parlement et quel est son rôle ?",
  r: `Le Parlement est l'institution qui discute, amende et vote les lois. Il contrôle aussi l'action du gouvernement.`,
  astuce: "Lois + contrôle",
},
{
  id: 128,
  cat: "Institutions et Vie Politique",
  q: "De quoi est composé le Parlement ?",
  r: `Le Parlement est composé de deux chambres : l'Assemblée nationale et le Sénat.`,
  astuce: "2 chambres",
},
  {
    id: 129,
    cat: "Institutions et Vie Politique",
    q: "Quel est le rôle de l'Assemblée nationale ?",
    r: `L'Assemblée nationale vote les lois et contrôle l'action du gouvernement.
Présidente : Yaël Braun-Pivet (Ensemble / Renaissance).`,
    astuce: "Lois + contrôle",
  },
  {
    id: 130,
    cat: "Institutions et Vie Politique",
    q: "Quel est le rôle du Sénat ?",
    r: `Le Sénat représente les collectivités territoriales et participe au vote des lois.
Président : Gérard Larcher (Les Républicains).`,
    astuce: "Territoires",
  },
{
  id: 131,
  cat: "Institutions et Vie Politique",
  q: "Qui est le chef de l'État et quel est son rôle ?",
  r: `Le chef de l'État est le Président de la République. Il dirige l'État, représente la France et veille au respect des institutions.`,
  astuce: "Président",
},
{
  id: 132,
  cat: "Institutions et Vie Politique",
  q: "Quel est le rôle du gouvernement ?",
  r: `Le gouvernement détermine et conduit la politique de la nation. Il applique les lois et dispose de l'administration.`,
  astuce: "Politique du pays",
},
  {
    id: 133,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce que le pouvoir exécutif ?",
    r: `Le pouvoir exécutif (Président et Gouvernement) applique les lois et dirige la politique du pays.`,
    astuce: "Appliquer",
  },
{
  id: 134,
  cat: "Institutions et Vie Politique",
  q: "Qu'est-ce que le pouvoir législatif ?",
  r: `Le pouvoir législatif est exercé par le Parlement. Il consiste à discuter et voter les lois.`,
  astuce: "Voter les lois",
},
{
  id: 135,
  cat: "Institutions et Vie Politique",
  q: "Qu'est-ce que le pouvoir judiciaire ?",
  r: `Le pouvoir judiciaire veille au respect des lois et rend la justice. La justice est rendue par les magistrats au nom du peuple français.`,
  astuce: "Justice",
},
  {
    id: 136,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce que la séparation des pouvoirs ?",
    r: `La séparation des pouvoirs permet d'éviter les abus en séparant le pouvoir exécutif, législatif et judiciaire afin qu'ils ne soient pas concentrés dans les mains d'une seule personne ou institution.`,
    astuce: "Évite les abus",
  },
  {
    id: 137,
    cat: "Institutions et Vie Politique",
    q: "Comment sont élus les députés ?",
    r: `Les députés sont élus par les citoyens au suffrage universel direct lors des élections législatives.`,
    astuce: "Élections législatives",
  },
{
  id: 138,
  cat: "Institutions et Vie Politique",
  q: "Combien de temps dure le mandat du Président de la République ?",
  r: `Le mandat du Président de la République dure 5 ans. On appelle cela le quinquennat.`,
  astuce: "Quinquennat",
},
  {
    id: 139,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce qu'une élection ?",
    r: `Une élection est un processus de vote qui permet aux citoyens de choisir leurs représentants.`,
    astuce: "Vote",
  },
  {
    id: 140,
    cat: "Institutions et Vie Politique",
    q: "Qui peut voter en France ?",
    r: `Les citoyens français majeurs (18 ans) inscrits sur les listes électorales et jouissant de leurs droits civils et politiques peuvent voter.`,
    astuce: "18 ans + français",
  },
  {
    id: 141,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce qu'une commune ?",
    r: `Une commune est la plus petite collectivité locale en France, comme une ville ou un village.`,
    astuce: "Local",
  },
  {
    id: 142,
    cat: "Institutions et Vie Politique",
    q: "Qui est le maire ?",
    r: `Le maire est le responsable élu de la commune. Par exemple, pour ma ville (Chevilly-Larue), c'est Stéphanie Daumin.`,
    astuce: "Commune",
  },
  {
    id: 143,
    cat: "Institutions et Vie Politique",
    q: "Quel est le rôle du maire ?",
    r: `Le maire gère les services municipaux, le budget de la commune et représente l'État pour certains actes (état civil).`,
    astuce: "Gestion ville",
  },
  {
    id: 144,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce qu'une préfecture ?",
    r: `La préfecture est l'administration qui représente l'État dans un département. Elle est dirigée par le préfet.`,
    astuce: "État dans département",
  },
  {
    id: 147,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce qu'une démocratie ?",
    r: `C'est un régime politique dans lequel le pouvoir appartient au peuple, qui l'exerce par le vote.`,
    astuce: "Peuple",
  },
  {
    id: 148,
    cat: "Institutions et Vie Politique",
    q: "Qu'est-ce que la Constitution ?",
    r: `C'est la règle suprême qui définit l'organisation des pouvoirs publics et garantit les droits fondamentaux des citoyens.`,
    astuce: "Règles",
  },
  {
    id: 150,
    cat: "Institutions et Vie Politique",
    q: "Qui nomme le Premier ministre ?",
    r: `C'est le Président de la République qui le nomme.`,
    astuce: "Président",
  },
  {
    id: 151,
    cat: "Institutions et Vie Politique",
    q: "Qui dirige le gouvernement ?",
    r: `C'est le Premier ministre.`,
    astuce: "Chef gouvernement",
  },
  {
    id: 156,
    cat: "Institutions et Vie Politique",
    q: "Qui rend la justice ?",
    r: `La justice est rendue par les magistrats (juges et procureurs) au nom du peuple français.`,
    astuce: "Justice",
  },
  {
    id: 157,
    cat: "Institutions et Vie Politique",
    q: "Pourquoi la justice doit-elle être indépendante ?",
    r: `Pour garantir un procès équitable et assurer que personne n'est au-dessus des lois, pas même les dirigeants.`,
    astuce: "Indépendance",
  },
  {
    id: 158,
    cat: "Institutions et Vie Politique",
    q: "Combien y a-t-il de députés environ ?",
    r: "Il y a 577 députés à l'Assemblée nationale.",
    astuce: "577",
  },
  {
    id: 159,
    cat: "Institutions et Vie Politique",
    q: "Combien y a-t-il de sénateurs ?",
    r: "Il y a 348 sénateurs.",
    astuce: "348",
  },
  {
    id: 161,
    cat: "Institutions et Vie Politique",
    q: "Qui écrit la Constitution ?",
    r: "Elle est généralement rédigée par des représentants élus et approuvée par le peuple par référendum.",
    astuce: "Texte",
  },
  {
    id: 162,
    cat: "Institutions et Vie Politique",
    q: "Qui propose les lois ?",
    r: "Le gouvernement (projets de loi) ou les parlementaires (propositions de loi).",
    astuce: "Lois",
  },
  {
    id: 163,
    cat: "Institutions et Vie Politique",
    q: "Qui promulgue les lois ?",
    r: "C'est le Président de la République qui signe la loi pour qu'elle soit officiellement publiée.",
    astuce: "Signature",
  },

  // ── Principes et Valeurs de la République ─────────────────────────────────
  {
    id: 164,
    cat: "Principes et Valeurs de la République",
    q: "Quels sont les 4 principes de la République française ?",
    r: `La France est une République indivisible, laïque, démocratique et sociale :

1. Indivisible : La loi est la même pour tous sur tout le territoire. La souveraineté appartient au peuple entier.
2. Laïque : L'État est neutre vis-à-vis des religions. Chacun est libre de croire ou de ne pas croire.
3. Démocratique : Le pouvoir appartient au peuple qui l'exerce par le vote (suffrage universel) et ses représentants.
4. Sociale : L'État organise la solidarité nationale pour assurer des conditions de vie dignes à chaque citoyen.`,
    astuce: "Retenez les 4 mots-clés : Indivisible, Laïque, Démocratique, Sociale.",
  },

  // ── Valeurs et Principes ───────────────────────────────────────────────────
  {
    id: 165,
    cat: "Valeurs et Principes",
    q: "Qui fait les lois en France ?",
    r: `Les lois sont faites par le Parlement (Assemblée nationale et Sénat).`,
    astuce: "Parlement",
  },
  {
    id: 166,
    cat: "Valeurs et Principes",
    q: "Comment une loi est-elle adoptée ?",
    r: `Une loi est discutée, votée par le Parlement puis promulguée par le président de la République après d'éventuels contrôles du Conseil constitutionnel.`,
    astuce: "Vote + promulgation",
  },
  {
    id: 167,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce qu'une loi ?",
    r: `Une loi est une règle générale, obligatoire pour tous, qui organise la vie en société.`,
    astuce: "Règle générale",
  },
  {
    id: 168,
    cat: "Valeurs et Principes",
    q: "Qui propose les lois ?",
    r: `Les lois peuvent être proposées par le gouvernement (on parle de "projet de loi") ou par les parlementaires ("proposition de loi").`,
    astuce: "Gouvernement ou parlementaires",
  },
  {
    id: 169,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la Constitution ?",
    r: `La Constitution est le texte juridique suprême qui organise les institutions publiques et garantit les droits fondamentaux.`,
    astuce: "Base du pays",
  },
  {
    id: 170,
    cat: "Valeurs et Principes",
    q: "Que signifie « nul n'est censé ignorer la loi » ?",
    r: `Cela signifie qu'on ne peut pas se justifier d'une infraction en disant qu'on ne connaissait pas la loi. Chacun est tenu de la respecter.`,
    astuce: "Respecter la loi",
  },
  {
    id: 171,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la présomption d'innocence ?",
    r: `La présomption d'innocence signifie qu'une personne est considérée comme innocente tant que sa culpabilité n'a pas été légalement prouvée par un tribunal.`,
    astuce: "Innocent jusqu'à preuve",
  },
  {
    id: 172,
    cat: "Valeurs et Principes",
    q: "Quelle est la majorité pénale ?",
    r: `La majorité pénale est fixée à 18 ans, bien que des mesures spécifiques existent pour les mineurs.`,
    astuce: "18",
  },
  {
    id: 173,
    cat: "Valeurs et Principes",
    q: "À quoi sert une loi ?",
    r: `La loi sert à garantir les libertés, protéger les citoyens, organiser la vie commune et assurer l'égalité.`,
    astuce: "Organisation + protection",
  },
  {
    id: 174,
    cat: "Valeurs et Principes",
    q: "Qui est protégé par la loi ?",
    r: `Toutes les personnes présentes sur le territoire français sont protégées par la loi, sans distinction.`,
    astuce: "Tout le monde",
  },
  {
    id: 175,
    cat: "Valeurs et Principes",
    q: "Peut-on critiquer une loi ?",
    r: `Oui, on peut critiquer une loi (liberté d'opinion), mais elle doit être respectée tant qu'elle est en vigueur.`,
    astuce: "Critiquer mais respecter",
  },
  {
    id: 176,
    cat: "Valeurs et Principes",
    q: "Qui contrôle les lois ?",
    r: `Le Conseil constitutionnel contrôle que les lois votées respectent bien la Constitution.`,
    astuce: "Contrôle",
  },
  {
    id: 177,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce qu'un tribunal ?",
    r: `Un tribunal est une institution chargée de trancher les litiges et de juger les auteurs d'infractions.`,
    astuce: "Justice",
  },
  {
    id: 178,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que le droit au recours ?",
    r: `Le droit au recours permet de demander à ce qu'une décision (de justice ou administrative) soit réexaminée si on s'estime lésé.`,
    astuce: "Recours = contester",
  },
  {
    id: 179,
    cat: "Valeurs et Principes",
    q: "La loi est-elle la même pour tous ?",
    r: `Oui, la loi est la même pour tous. C'est le principe d'égalité devant la loi inscrit dans la Déclaration de 1789.`,
    astuce: "Égalité devant la loi",
  },
  {
    id: 180,
    cat: "Valeurs et Principes",
    q: "Peut-on manifester ?",
    r: `Oui, le droit de manifester est une liberté publique, à condition qu'elle soit pacifique et déclarée.`,
    astuce: "Pacifique",
  },
  {
    id: 181,
    cat: "Valeurs et Principes",
    q: "Peut-on critiquer le gouvernement ?",
    r: `Oui, la critique du gouvernement fait partie de la liberté d'expression et du débat démocratique.`,
    astuce: "Liberté d'opinion",
  },
  {
    id: 182,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que le droit de grève ?",
    r: `C'est un droit constitutionnel permettant aux travailleurs de cesser le travail pour défendre des intérêts professionnels.`,
    astuce: "Travail + droits",
  },
  {
    id: 183,
    cat: "Valeurs et Principes",
    q: "Quelles sont les sources du droit ?",
    r: `Les principales sources sont la Constitution, les traités internationaux, les lois, et les règlements (décrets et arrêtés).`,
    astuce: "3 sources",
  },
  {
    id: 184,
    cat: "Valeurs et Principes",
    q: "Quels sont les droits en cas d'arrestation ?",
    r: `En cas d'arrestation, on a le droit d'être informé des motifs de l'interpellation, de garder le silence, d'être assisté par un avocat et de voir un juge.`,
    astuce: "Avocat + silence + juge",
  },
  {
    id: 185,
    cat: "Valeurs et Principes",
    q: "Quelle est la différence entre une loi et un règlement ?",
    r: `Une loi est votée par le Parlement, alors qu'un règlement est un acte pris par le pouvoir exécutif (gouvernement) pour préciser les modalités d'application de la loi.`,
    astuce: "Parlement / gouvernement",
  },
  {
    id: 186,
    cat: "Valeurs et Principes",
    q: "A-t-on le droit d'être défendu ?",
    r: `Oui, toute personne a le droit d'être défendue, notamment par un avocat, même si elle n'a pas les moyens d'en payer un (aide juridictionnelle).`,
    astuce: "Avocat",
  },
  {
    id: 187,
    cat: "Valeurs et Principes",
    q: "La loi protège-t-elle la liberté de religion ?",
    r: `Oui, la loi protège la liberté de religion ainsi que la liberté de croire ou de ne pas croire, dans le cadre de la laïcité.`,
    astuce: "Croire ou non",
  },
  {
    id: 188,
    cat: "Valeurs et Principes",
    q: "La loi protège-t-elle la liberté d'expression ?",
    r: `Oui, la loi protège la liberté d'expression, mais elle fixe des limites : elle interdit notamment les propos haineux, racistes, antisémites ou diffamatoires.`,
    astuce: "Liberté + limites",
  },
  {
    id: 189,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce qu'un casier judiciaire ?",
    r: `Un casier judiciaire est un document national qui recense l'historique des condamnations pénales prononcées par la justice contre une personne.`,
    astuce: "Historique",
  },
  {
    id: 190,
    cat: "Valeurs et Principes",
    q: "Un citoyen peut-il changer une loi ?",
    r: `Un citoyen ne peut pas changer directement une loi lui-même, mais il peut agir indirectement en votant pour ses représentants, en participant à un référendum ou en rejoignant des mouvements citoyens.`,
    astuce: "Indirectement",
  },
  {
    id: 191,
    cat: "Valeurs et Principes",
    q: "Les lois s'appliquent-elles aux étrangers ?",
    r: `Oui, toutes les lois françaises s'appliquent aux étrangers dès lors qu'ils se trouvent sur le territoire français.`,
    astuce: "Oui",
  },
  {
    id: 192,
    cat: "Valeurs et Principes",
    q: "Peut-on se défendre seul ?",
    r: `Oui, il est possible de se défendre seul devant certains tribunaux, mais il est souvent vivement conseillé d'être assisté par un avocat.`,
    astuce: "Oui, avocat conseillé",
  },
  {
    id: 193,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce qu'un contrat ?",
    r: `Un contrat est un accord juridique entre deux ou plusieurs personnes (physiques ou morales) qui crée des obligations réciproques.`,
    astuce: "Accord juridique",
  },
  {
    id: 194,
    cat: "Valeurs et Principes",
    q: "Pourquoi la justice est-elle indépendante ?",
    r: `La justice est indépendante pour garantir l'impartialité des décisions. Elle ne doit pas dépendre des pressions du pouvoir politique (exécutif).`,
    astuce: "Séparation politique / justice",
  },
  {
    id: 195,
    cat: "Valeurs et Principes",
    q: "Combien de Républiques la France a-t-elle connues ?",
    r: `La France a connu cinq Républiques au total.`,
    astuce: "5 = actuel",
  },
  {
    id: 196,
    cat: "Valeurs et Principes",
    q: "Quelle est la République actuelle ?",
    r: `La République actuelle est la Ve (Cinquième) République.`,
    astuce: "1958 → aujourd'hui",
  },
  {
    id: 197,
    cat: "Valeurs et Principes",
    q: "Pouvez-vous retracer l'histoire des cinq Républiques françaises ?",
    r: `• Ire République (1792 - 1804) : Créée après la chute de la monarchie.
• IIe République (1848 - 1852) : Abolition de l'esclavage et instauration du suffrage universel masculin.
• IIIe République (1870 - 1940) : École gratuite, laïque et obligatoire (lois Jules Ferry). Stabilisée en 1875.
• IVe République (1946 - 1958) : Reconstitution après la Seconde Guerre mondiale, marquée par une forte instabilité ministérielle.
• Ve République (Depuis 1958) : Fondée par le Général de Gaulle, c'est notre Constitution actuelle.`,
    astuce: "1792, 1848, 1870, 1946, 1958",
  },
  {
    id: 198,
    cat: "Valeurs et Principes",
    q: "Quelles sont les valeurs de la République ?",
    r: `Les trois valeurs fondamentales sont : Liberté, Égalité, Fraternité.`,
    astuce: "L.E.F",
  },
  {
    id: 199,
    cat: "Valeurs et Principes",
    q: "Que signifie la liberté ?",
    r: `La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ; elle inclut la liberté de penser, de s'exprimer et de circuler.`,
    astuce: "Liberté",
  },
  {
    id: 200,
    cat: "Valeurs et Principes",
    q: "La liberté a-t-elle des limites ?",
    r: `Oui, la liberté s'arrête là où commence celle des autres. Elle doit s'exercer dans le respect de la loi.`,
    astuce: "Limites",
  },
  {
    id: 201,
    cat: "Valeurs et Principes",
    q: "Que signifie l'égalité ?",
    r: `Cela signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs, quelle que soit leur origine, leur religion ou leur sexe.`,
    astuce: "Égal",
  },
  {
    id: 202,
    cat: "Valeurs et Principes",
    q: "Que signifie la fraternité ?",
    r: `La fraternité évoque la solidarité et l'entraide entre tous les membres de la communauté nationale.`,
    astuce: "Solidarité",
  },
  {
    id: 203,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la laïcité ?",
    r: `C'est un principe qui garantit la liberté de conscience et sépare les institutions de l'État des organisations religieuses. L'État est neutre.`,
    astuce: "Séparation",
  },
  {
    id: 204,
    cat: "Valeurs et Principes",
    q: "Peut-on pratiquer sa religion en France ?",
    r: `Oui, chacun est libre de pratiquer la religion de son choix ou de n'en pratiquer aucune, tant que cela ne trouble pas l'ordre public.`,
    astuce: "Liberté",
  },
  {
    id: 205,
    cat: "Valeurs et Principes",
    q: "Pourquoi n'y a-t-il pas de signes religieux à l'école publique ?",
    r: `Pour garantir la neutralité de l'enseignement et protéger les élèves de toute pression religieuse (loi de 2004).`,
    astuce: "Neutre",
  },
  {
    id: 206,
    cat: "Valeurs et Principes",
    q: "Quels sont les droits et les devoirs du citoyen français ?",
    r: `Les droits incluent le droit de vote, la liberté d'expression et l'accès aux services publics.
Les devoirs comprennent le respect des lois, le paiement des impôts, la participation aux jurys d'assises et la défense de la patrie.`,
    astuce: "Droits + devoirs + équilibre + exemples concrets",
  },
  {
    id: 207,
    cat: "Valeurs et Principes",
    q: "Quels sont les devoirs majeurs ?",
    r: `Respecter la loi, payer ses impôts et contribuer à la défense nationale si nécessaire.`,
    astuce: "Devoirs",
  },
  {
    id: 208,
    cat: "Valeurs et Principes",
    q: "Faut-il payer des impôts ?",
    r: `Oui, l'impôt est une contribution obligatoire qui permet de financer les services publics (écoles, hôpitaux, police).`,
    astuce: "Impôts",
  },
  {
    id: 209,
    cat: "Valeurs et Principes",
    q: "Que signifie la devise Liberté, Égalité, Fraternité ?",
    r: `Elle résume les principes fondamentaux qui guident la République française et ses citoyens.`,
    astuce: "Devise = valeurs",
  },
  {
    id: 210,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la discrimination ?",
    r: `C'est le fait de traiter défavorablement une personne pour des motifs interdits (origine, sexe, religion, handicap, etc.).`,
    astuce: "Injustice",
  },
  {
    id: 211,
    cat: "Valeurs et Principes",
    q: "La discrimination est-elle autorisée ?",
    r: `Non, la discrimination est un délit puni par la loi.`,
    astuce: "Interdit",
  },
  {
    id: 212,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la solidarité ?",
    r: `C'est le lien d'entraide qui unit les citoyens, notamment à travers le système de protection sociale (sécurité sociale).`,
    astuce: "Aide",
  },
  {
    id: 213,
    cat: "Valeurs et Principes",
    q: "Que garantit la République ?",
    r: `Elle garantit les libertés fondamentales, l'égalité devant la loi et la protection des plus vulnérables.`,
    astuce: "L.E.F",
  },
  {
    id: 214,
    cat: "Valeurs et Principes",
    q: "À quel âge peut-on voter ?",
    r: `On peut voter à partir de 18 ans révolus.`,
    astuce: "18",
  },
  {
    id: 215,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que le droit de vote ?",
    r: `C'est le droit fondamental de participer au choix de ses représentants lors des élections.`,
    astuce: "Voter",
  },
  {
    id: 216,
    cat: "Valeurs et Principes",
    q: "Peut-on être candidat aux élections ?",
    r: `Oui, tout citoyen français majeur peut se présenter s'il remplit les conditions d'éligibilité.`,
    astuce: "Candidat",
  },
  {
    id: 217,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que l'impôt ?",
    r: `C'est un prélèvement financier opéré par l'État pour assurer le fonctionnement des services publics et la solidarité nationale.`,
    astuce: "Financement",
  },
  {
    id: 218,
    cat: "Valeurs et Principes",
    q: "Peut-on refuser quelqu'un à cause de sa religion ?",
    r: "Non, c'est une discrimination punie par la loi.",
    astuce: "Interdit",
  },
  {
    id: 219,
    cat: "Valeurs et Principes",
    q: "La France protège-t-elle les libertés ?",
    r: "Oui, le respect des libertés fondamentales est au cœur de la Constitution.",
    astuce: "Liberté",
  },
  {
    id: 220,
    cat: "Valeurs et Principes",
    q: "Le racisme est-il autorisé ?",
    r: "Non, le racisme n'est pas une opinion mais un délit puni par la loi.",
    astuce: "Interdit",
  },
  {
    id: 221,
    cat: "Valeurs et Principes",
    q: "Faut-il déclarer ses revenus ?",
    r: "Oui, c'est une obligation légale pour tous les résidents fiscaux en France.",
    astuce: "Obligatoire",
  },
  {
    id: 222,
    cat: "Valeurs et Principes",
    q: "Pourquoi paye-t-on des impôts ?",
    r: "Pour financer les services publics (écoles, routes, sécurité) et la solidarité nationale.",
    astuce: "État",
  },
  {
    id: 223,
    cat: "Valeurs et Principes",
    q: "La loi est-elle la même pour tous ?",
    r: "Oui, selon le principe d'égalité, tous les citoyens sont égaux devant la loi.",
    astuce: "Égalité",
  },
  {
    id: 224,
    cat: "Valeurs et Principes",
    q: "Peut-on désobéir à la loi ?",
    r: "Non, nul n'est au-dessus de la loi et chacun doit la respecter pour garantir l'ordre public.",
    astuce: "Respect",
  },
  {
    id: 225,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la tolérance ?",
    r: "C'est le respect des opinions, des croyances et des modes de vie différents des nôtres.",
    astuce: "Respect",
  },
  {
    id: 226,
    cat: "Valeurs et Principes",
    q: "Pourquoi est-il important de bien vivre ensemble ?",
    r: "Pour préserver la paix sociale, la solidarité et le respect mutuel au sein de la République.",
    astuce: "Paix",
  },
  {
    id: 227,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce qu'un citoyen ?",
    r: "Une personne membre d'un État qui possède des droits civils et politiques et qui a des devoirs envers la collectivité.",
    astuce: "Citoyen",
  },
  {
    id: 228,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que la nationalité ?",
    r: "C'est le lien juridique qui unit une personne à un État.",
    astuce: "Nation",
  },
  {
    id: 229,
    cat: "Valeurs et Principes",
    q: "Pourquoi voulez-vous devenir français ?",
    r: "Pour partager les valeurs de la République, participer pleinement à la vie démocratique et confirmer mon attachement à la France.",
    astuce: "Valeurs",
  },
  {
    id: 230,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que l'intégration ?",
    r: "C'est le processus par lequel une personne s'adapte à la société française en adoptant ses règles et en participant à sa vie collective.",
    astuce: "Intégration",
  },
  {
    id: 231,
    cat: "Valeurs et Principes",
    q: "Qu'est-ce que le mariage pour tous ?",
    r: `C'est une loi adoptée en 2013 qui permet aux couples de même sexe de se marier civilement, garantissant ainsi l'égalité des droits.`,
    astuce: "2013 + égalité",
  },
  {
    id: 232,
    cat: "Valeurs et Principes",
    q: "Que pensez-vous de cette loi ?",
    r: `C'est une loi de la République votée démocratiquement. Elle vise à garantir l'égalité entre tous les citoyens, ce que je respecte totalement.`,
    astuce: "Neutralité + Respect",
  },
  {
    id: 233,
    cat: "Valeurs et Principes",
    q: "Si votre enfant vous dit qu'il est homosexuel, que faites-vous ?",
    r: `Je respecterais son choix et sa vie privée. En France, chacun est libre de ses choix amoureux, et en tant que parent, je privilégierais le dialogue et le soutien.`,
    astuce: "Liberté + respect + soutien",
  },

  // ── Questions délicates ────────────────────────────────────────────────────
  {
    id: 234,
    cat: "DELICATE",
    q: "Que pensez-vous de l'intégration des immigrés en France ?",
    r: "L'intégration est un processus complexe qui dépend des efforts des nouveaux arrivants et de la capacité de la société à les accueillir. La France a mis en place des dispositifs pour faciliter cela, mais des défis subsistent comme la lutte contre les discriminations.",
    astuce: "Équilibre entre efforts individuels et accueil républicain.",
  },
  {
    id: 235,
    cat: "DELICATE",
    q: "Pourquoi la France a-t-elle une journée nationale contre le racisme et l'antisémitisme ?",
    r: "La journée nationale du 21 mars vise à sensibiliser le public, promouvoir les valeurs de tolérance et de respect, et rappeler l'engagement de la France contre toutes les formes de discrimination.",
    astuce: "Citer la date du 21 mars et l'objectif de sensibilisation.",
  },
  {
    id: 236,
    cat: "DELICATE",
    q: "Que pensez-vous des quotas de femmes dans les entreprises ?",
    r: "Les quotas sont un outil nécessaire pour combattre les inégalités historiques et garantir une représentation équilibrée. Ils permettent de briser le plafond de verre et d'offrir plus d'opportunités aux femmes.",
    astuce: "Mentionner l'égalité réelle et le plafond de verre.",
  },
  {
    id: 237,
    cat: "DELICATE",
    q: "Qu'est-ce qui vous plaît le plus dans les traditions françaises ?",
    r: "J'aime les fêtes traditionnelles comme Noël, Pâques ou la Fête de la Musique, car elles reflètent l'esprit de convivialité et de partage. Elles montrent l'importance du vivre-ensemble en France.",
    astuce: "Mettre l'accent sur la convivialité et le partage.",
  },
  {
    id: 238,
    cat: "DELICATE",
    q: "Que pensez-vous des critiques sur l'islam en France ?",
    r: "L'islam, comme toutes les religions, doit être respecté tant qu'il respecte les lois et les valeurs républicaines. Le dialogue, la tolérance et le respect de la laïcité sont essentiels pour apaiser les tensions.",
    astuce: "Insister sur le respect des lois républicaines.",
  },
  {
    id: 239,
    cat: "DELICATE",
    q: "Que pensez-vous des débats sur le port du voile en France ?",
    r: "C'est un sujet complexe lié à la liberté religieuse et à la laïcité. En France, le port de signes religieux est réglementé dans certains espaces pour garantir la neutralité de l'État, mais la liberté de conscience reste protégée.",
    astuce: "Distinguer neutralité de l'État et liberté personnelle.",
  },
  {
    id: 240,
    cat: "DELICATE",
    q: "Quelle est votre position sur le droit à l'avortement en France ?",
    r: "Je soutiens pleinement le droit à l'avortement, car c'est un droit fondamental qui assure aux femmes la liberté de disposer de leur corps et de faire leurs choix en toute autonomie.",
    astuce: "Droit fondamental et autonomie des femmes.",
  },
  {
    id: 241,
    cat: "DELICATE",
    q: "Que pensez-vous de la liberté d'expression, même lorsqu'elle choque ?",
    r: "La liberté d'expression est un droit fondamental en France et elle est essentielle à la démocratie. Cependant, elle a des limites, notamment lorsqu'il s'agit d'incitation à la haine, à la violence ou d'atteinte à la dignité d'autrui.",
    astuce: "Liberté d'expression avec des limites légales.",
  },
  {
    id: 242,
    cat: "DELICATE",
    q: "Si votre demande de nationalité française était refusée, comment réagiriez-vous ?",
    r: "Je respecterais la décision et je chercherais à comprendre les raisons du refus pour m'améliorer. Je continuerais à m'intégrer pleinement, car mon attachement à la France va au-delà de l'obtention de la nationalité.",
    astuce: "Réponse humble, résiliente et attachée à la France.",
  },
  // Illustrations
    {
    id: 243,
    cat: "Illustration",
    q: "institutions pouvoirs valeurs",
    r: "institutions pouvoirs valeurs.",
    image: "/images/institutions_pouvoirs_valeurs.png",
    astuce: "A dessiner.",
  },
      {
    id: 244,
    cat: "Illustration",
    q: "institutions collectivités",
    r: "institutions collectivités.",
    image: "/images/institutions_collectivités.png",
    astuce: "A dessiner.",
  },
       {
    id: 245,
    cat: "Illustration",
    q: "valeurs symboles",
    r: "valeurs symboles",
    image: "/images/valeurs_symboles _repères_historiques.png",
    astuce: "A dessiner.",
  } 
];

function shuffleArray(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [category, setCategory] = useState("Toutes");
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("revision");
  const [showAnswer, setShowAnswer] = useState(true);
  const [order, setOrder] = useState(questions);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);

  const categories = useMemo(
    () => ["Toutes", ...Array.from(new Set(questions.map((q) => q.cat))), "À revoir"],
    []
  );

  const filtered = useMemo(() => {
    if (category === "À revoir") return order.filter((q) => review.includes(q.id));
    if (category === "Toutes") return order;
    return order.filter((q) => q.cat === category);
  }, [category, order, review]);

  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / questions.length) * 100);

  const resetCardVisibility = (selectedMode = mode) => {
    setShowAnswer(selectedMode === "revision");
  };

  const goNext = () => {
    setIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    resetCardVisibility();
  };

  const goPrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
    resetCardVisibility();
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    resetCardVisibility(newMode);
  };

  const chooseCategory = (cat) => {
    setCategory(cat);
    setIndex(0);
    resetCardVisibility();
  };

  const markKnown = () => {
    if (!current) return;
    setKnown((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
    setReview((prev) => prev.filter((id) => id !== current.id));
    goNext();
  };

  const markReview = () => {
    if (!current) return;
    setReview((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
    setKnown((prev) => prev.filter((id) => id !== current.id));
    goNext();
  };

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; overflow: hidden; }
        body { margin: 0; }
        .app {
          height: 100dvh;
          min-height: 100dvh;
          background: radial-gradient(circle at top, #1e293b, #020617);
          color: white;
          font-family: Arial, sans-serif;
          padding: 14px 18px;
          overflow: hidden;
        }
        .container {
          max-width: 1120px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .header { text-align: center; margin-bottom: 10px; flex: 0 0 auto; }
        .title { margin: 0; font-size: clamp(30px, 4.4vw, 50px); font-weight: 900; letter-spacing: -0.04em; }
        .subtitle { margin: 4px 0 0; color: #94a3b8; font-size: 15px; }
        .modebar { display: flex; gap: 10px; margin-bottom: 10px; flex: 0 0 auto; }
        .modeBtn, .btn, .chip {
          border: 1px solid #334155;
          background: rgba(255,255,255,.05);
          color: white;
          cursor: pointer;
          font-weight: 800;
        }
        .modeBtn { flex: 1; padding: 13px 14px; border-radius: 16px; font-size: 15px; }
        .active { border-color: #60a5fa !important; background: rgba(37,99,235,.28) !important; color: #bfdbfe !important; }
        .categoryArea { margin-bottom: 10px; flex: 0 0 auto; }
        .categorySelect {
          display: none;
          width: 100%;
          border: 1px solid #334155;
          background: rgba(15, 23, 42, .95);
          color: white;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 15px;
          font-weight: 800;
          outline: none;
        }
        .chips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 8px;
          justify-content: center;
        }
        .chip {
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 12px;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .meta { display: flex; justify-content: space-between; align-items: center; color: #cbd5e1; margin-bottom: 8px; flex: 0 0 auto; }
        .mobileLabel { display: none; }
        .progress { color: #93c5fd; font-weight: 800; }
        .card {
          flex: 1 1 auto;
          min-height: 0;
          border-radius: 24px;
          border: 1px solid #334155;
          background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding: 24px 30px;
          overflow: hidden;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,.20);
          color: #93c5fd;
          font-weight: 900;
          margin-bottom: 18px;
          font-size: 13px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .question { font-size: clamp(22px, 3.2vw, 34px); line-height: 1.2; max-width: 900px; margin: 0 0 18px; flex: 0 0 auto; }
        .answerBox {
          width: 100%;
          max-width: 900px;
          flex: 1 1 auto;
          min-height: 0;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(34,197,94,.35);
          background: rgba(34,197,94,.08);
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .answerImage {
          display: block;
          width: 100%;
          max-height: 360px;
          object-fit: contain;
          border-radius: 14px;
          margin: 0 auto 18px;
          background: rgba(255,255,255,.04);
        }
        .answerBox::-webkit-scrollbar { width: 10px; }
        .answerBox::-webkit-scrollbar-thumb { background: rgba(148,163,184,.45); border-radius: 999px; }
        .answerBox::-webkit-scrollbar-track { background: rgba(15,23,42,.35); border-radius: 999px; }
        .answerTitle { color: #86efac; font-size: 22px; margin: 0 0 14px; }
        .answer { font-size: clamp(18px, 2.5vw, 24px); line-height: 1.45; margin: 0; white-space: pre-line; }
        .tip { margin-top: 18px; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(96,165,250,.45); background: rgba(37,99,235,.16); color: #bfdbfe; font-size: 16px; font-weight: 800; }
        .hint { color: #94a3b8; font-size: 16px; }
        .actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 10px; flex: 0 0 auto; }
        .btn { padding: 14px 16px; border-radius: 14px; font-size: 15px; }
        .btn:hover, .chip:hover, .modeBtn:hover { background: rgba(255,255,255,.10); }
        .red { border-color: #ef4444; color: #fca5a5; }
        .green { border-color: #22c55e; color: #86efac; }
        .bottomActions { display: flex; gap: 12px; justify-content: center; margin-top: 8px; flex: 0 0 auto; }
        .bottomActions .btn { min-width: 240px; }

        @media (max-width: 700px) {
          html, body, #root { height: 100%; overflow: hidden; }
          .app {
            height: 100dvh;
            min-height: 100dvh;
            padding: 8px;
            overflow: hidden;
          }
          .container {
            max-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .header { margin-bottom: 6px; flex: 0 0 auto; }
          .title { font-size: 26px; letter-spacing: -0.03em; }
          .subtitle { display: none; }
          .modebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-bottom: 6px;
            flex: 0 0 auto;
          }
          .modeBtn {
            padding: 8px 6px;
            border-radius: 11px;
            font-size: 12px;
          }
          .categoryArea { margin-bottom: 6px; flex: 0 0 auto; }
          .categorySelect {
            display: block;
            padding: 9px 12px;
            border-radius: 12px;
            font-size: 13px;
          }
          .chips { display: none; }
          .meta {
            font-size: 11px;
            margin-bottom: 5px;
            gap: 6px;
            flex: 0 0 auto;
          }
          .meta span:last-child { display: none; }
          .mobileLabel { display: inline; }
          .card {
            flex: 1 1 auto;
            min-height: 0;
            max-height: none;
            overflow-y: auto;
            border-radius: 16px;
            padding: 10px;
            justify-content: center;
          }
          .badge {
            font-size: 9px;
            padding: 5px 9px;
            margin-bottom: 8px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .question {
            font-size: clamp(17px, 5.3vw, 22px);
            line-height: 1.15;
            margin-bottom: 9px;
          }
          .answerBox { padding: 10px; border-radius: 13px; }
          .answerImage { max-height: 230px; margin-bottom: 10px; }
          .answerTitle { font-size: 14px; margin-bottom: 6px; }
          .answer { font-size: clamp(14px, 4.2vw, 17px); line-height: 1.28; }
          .tip { margin-top: 8px; padding: 7px 9px; font-size: 12px; border-radius: 11px; }
          .hint { font-size: 13px; }
          .actions {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin-top: 6px;
            flex: 0 0 auto;
          }
          .btn {
            padding: 8px 4px;
            border-radius: 10px;
            font-size: 10.5px;
            min-height: 34px;
          }
          .bottomActions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-top: 5px;
            flex: 0 0 auto;
          }
          .bottomActions .btn { width: 100%; min-width: 0; }
        }
      `}</style>

      <main className="container">
        <header className="header">
          <h1 className="title">Inchalla Marbouha</h1>
          <p className="subtitle">Révision pour l'entretien de naturalisation</p>
        </header>

        <div className="modebar">
          <button
            className={`modeBtn ${mode === "revision" ? "active" : ""}`}
            onClick={() => switchMode("revision")}
          >
            📖 Mode révision
          </button>
          <button
            className={`modeBtn ${mode === "quiz" ? "active" : ""}`}
            onClick={() => switchMode("quiz")}
          >
            🎯 Mode quiz
          </button>
        </div>

        <div className="categoryArea">
          <select
            className="categorySelect"
            value={category}
            onChange={(e) => chooseCategory(e.target.value)}
          >
            {categories.map((cat) => {
              const count =
                cat === "Toutes"
                  ? questions.length
                  : cat === "À revoir"
                    ? review.length
                    : questions.filter((q) => q.cat === cat).length;
              return (
                <option key={cat} value={cat}>
                  {cat} ({count})
                </option>
              );
            })}
          </select>

          <div className="chips">
            {categories.map((cat) => {
              const count =
                cat === "Toutes"
                  ? questions.length
                  : cat === "À revoir"
                    ? review.length
                    : questions.filter((q) => q.cat === cat).length;
              return (
                <button
                  key={cat}
                  className={`chip ${category === cat ? "active" : ""}`}
                  onClick={() => chooseCategory(cat)}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {!current ? (
          <div className="card">
            <h2>Aucune carte à revoir.</h2>
          </div>
        ) : (
          <>
            <div className="meta">
              <span>
                <span className="mobileLabel">Q </span>Question {index + 1} / {filtered.length}
              </span>
              <span className="progress">{progress}% mémorisé</span>
              <span>Total : {questions.length}</span>
            </div>

            <section
              className="card"
              onClick={() => mode === "quiz" && setShowAnswer((v) => !v)}
            >
              <div className="badge">{current.cat.toUpperCase()}</div>
              <h2 className="question">{current.q}</h2>

              {showAnswer ? (
                <div className="answerBox">
                  {current.image && (
                    <img className="answerImage" src={current.image} alt={current.q} />
                  )}
                  <h3 className="answerTitle">Réponse modèle</h3>
                  <p className="answer">{current.r}</p>
                  {current.astuce && <div className="tip">Astuce : {current.astuce}</div>}
                </div>
              ) : (
                <p className="hint">☝️ Cliquez pour voir la réponse</p>
              )}
            </section>

            <div className="actions">
              <button className="btn" onClick={goPrev}>← Précédent</button>
              <button className="btn red" onClick={markReview}>↻ À revoir</button>
              <button className="btn green" onClick={markKnown}>✓ Mémorisé</button>
              <button className="btn" onClick={goNext}>Suivant →</button>
            </div>

            <div className="bottomActions">
              <button
                className="btn"
                onClick={() => {
                  setOrder(shuffleArray(questions));
                  setIndex(0);
                  resetCardVisibility();
                }}
              >
                🔀 Mélanger les cartes
              </button>
              <button
                className="btn"
                onClick={() => {
                  setKnown([]);
                  setReview([]);
                  setIndex(0);
                  setOrder(questions);
                  resetCardVisibility();
                }}
              >
                🧹 Réinitialiser la progression
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}