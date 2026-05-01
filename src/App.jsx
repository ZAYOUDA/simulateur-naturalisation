import React, { useMemo, useState } from "react";

const questions = [
  { id:1, cat:"Questions personnelles", q:"Pourquoi souhaitez-vous devenir français(e) ?", r:"Je souhaite devenir français(e) pour m’intégrer pleinement dans la société, partager les valeurs de la République et participer à la vie citoyenne.", astuce:"Intégration + valeurs" },
  { id:2, cat:"Questions personnelles", q:"Depuis combien de temps vivez-vous en France ?", r:"Je vis en France depuis plusieurs années, ce qui m’a permis de m’intégrer progressivement.", astuce:"Durée + intégration" },
  { id:3, cat:"Questions personnelles", q:"Pourquoi avez-vous choisi de vivre en France ?", r:"J’ai choisi la France pour sa stabilité, ses opportunités et son respect des droits.", astuce:"Stabilité + opportunités + droits" },
  { id:4, cat:"Questions personnelles", q:"Vous sentez-vous intégré(e) ? Pourquoi ?", r:"Oui, j’ai un travail, des relations sociales et je participe à la vie quotidienne.", astuce:"Travail + relations + quotidien" },
  { id:5, cat:"Questions personnelles", q:"Comment montrez-vous votre intégration ?", r:"Je parle français, je travaille, je respecte les lois et je m’implique localement.", astuce:"Langue + travail + lois" },
  { id:6, cat:"Questions personnelles", q:"Qu’aimez-vous dans la vie en France ?", r:"J’aime la stabilité, la qualité de vie, les services publics et la culture.", astuce:"Stabilité + services publics + culture" },
  { id:7, cat:"Questions personnelles", q:"Qu’est-ce qui vous plaît le moins en France ?", r:"Comme dans tous les pays, il y a des choses plus difficiles, mais je m’adapte et je reste positif(ve).", astuce:"Rester positif(ve)" },
  { id:8, cat:"Questions personnelles", q:"Que représente pour vous la nationalité française ?", r:"La nationalité française représente pour moi un engagement et une reconnaissance de mon intégration.", astuce:"Engagement + reconnaissance" },
  { id:9, cat:"Questions personnelles", q:"Quelles valeurs françaises partagez-vous ?", r:"Je partage les valeurs de liberté, d’égalité, de fraternité, de respect et de solidarité.", astuce:"Devise + respect + solidarité" },
  { id:10, cat:"Questions personnelles", q:"Que pensez-vous de la devise « Liberté, Égalité, Fraternité » ?", r:"Elle représente les principes fondamentaux de la République : la liberté, l’égalité des droits et la solidarité entre les citoyens.", astuce:"Devise = 3 principes" },
  { id:11, cat:"Questions personnelles", q:"Souhaitez-vous voter ? Pourquoi ?", r:"Oui, car voter est un droit et aussi un devoir citoyen. Cela permet de participer à la démocratie.", astuce:"Droit + devoir" },
  { id:12, cat:"Questions personnelles", q:"Qu’est-ce que la citoyenneté ?", r:"La citoyenneté, c’est participer à la vie du pays, respecter ses lois et contribuer à la société.", astuce:"Participation + lois" },
  { id:13, cat:"Questions personnelles", q:"Que représente la République pour vous ?", r:"La République représente un système fondé sur l’égalité, les droits, les devoirs et le respect des lois.", astuce:"Droits + devoirs + lois" },
  { id:14, cat:"Questions personnelles", q:"Avez-vous des amis français ?", r:"Oui, j’ai des amis français au travail et dans mon entourage.", astuce:"Travail + entourage" },
  { id:15, cat:"Questions personnelles", q:"Participez-vous à la vie locale ?", r:"Oui, je participe à la vie locale par des activités de quartier ou associatives quand c’est possible.", astuce:"Local + associations" },
  { id:16, cat:"Questions personnelles", q:"Êtes-vous membre d’une association ?", r:"Pas toujours, mais je participe quand c’est possible à des activités locales ou associatives.", astuce:"Réponse honnête" },
  { id:17, cat:"Questions personnelles", q:"Avez-vous déjà fait du bénévolat ?", r:"Oui, j’ai déjà participé à des actions bénévoles pour aider les autres et contribuer à la société.", astuce:"Aider + contribuer" },
  { id:18, cat:"Questions personnelles", q:"Avez-vous participé à une action citoyenne ?", r:"Oui, j’ai participé à des actions locales ou solidaires.", astuce:"Action locale" },
  { id:19, cat:"Questions personnelles", q:"Comment vous informez-vous sur l’actualité ?", r:"Je m’informe par la télévision, internet, les journaux et les discussions avec mon entourage.", astuce:"TV + internet + journaux" },
  { id:20, cat:"Questions personnelles", q:"Parlez-vous français à la maison ?", r:"Oui, je parle français à la maison pour progresser et favoriser l’intégration de ma famille.", astuce:"Français = intégration" },
  { id:21, cat:"Questions personnelles", q:"Comment améliorez-vous votre français ?", r:"J’améliore mon français en lisant, en parlant avec les autres et en suivant l’actualité.", astuce:"Lire / parler / actualité" },
  { id:22, cat:"Questions personnelles", q:"Travaillez-vous en France ?", r:"Oui, je travaille en France.", astuce:"Oui simple" },
  { id:23, cat:"Questions personnelles", q:"Quel est votre métier ?", r:"J’exerce un métier qui me permet de participer à la société et de construire mon avenir en France.", astuce:"Métier = contribution" },
  { id:24, cat:"Questions personnelles", q:"Quels sont vos projets en France ?", r:"Mes projets sont de m’installer durablement, développer ma carrière et construire ma vie familiale en France.", astuce:"Stabilité + avenir" },
  { id:25, cat:"Questions personnelles", q:"Souhaitez-vous rester en France définitivement ?", r:"Oui, je souhaite rester en France durablement car j’y ai construit ma vie.", astuce:"Durablement" },
  { id:26, cat:"Questions personnelles", q:"Quelle est votre plus grande fierté en France ?", r:"Ma plus grande fierté est d’avoir trouvé ma place, d’avoir progressé en français et d’avoir un emploi stable.", astuce:"Place + emploi stable" },
  { id:27, cat:"Questions personnelles", q:"Quelle difficulté avez-vous rencontrée ?", r:"Au début, la langue et l’adaptation culturelle ont été les principales difficultés.", astuce:"Langue ou culture" },
  { id:28, cat:"Questions personnelles", q:"Comment avez-vous surmonté cette difficulté ?", r:"J’ai surmonté ces difficultés en apprenant, en pratiquant le français et en faisant des efforts régulièrement.", astuce:"Efforts réguliers" },
  { id:29, cat:"Questions personnelles", q:"Quels sont vos loisirs ?", r:"Mes loisirs sont la lecture, le sport, les promenades et les activités culturelles.", astuce:"3 exemples simples" },
  { id:30, cat:"Questions personnelles", q:"Connaissez-vous des traditions françaises ?", r:"Oui, je connais des traditions comme le 14 juillet, Noël, la galette des rois et le 1er mai.", astuce:"14 juillet + Noël" },
  { id:31, cat:"Questions personnelles", q:"Célébrez-vous des fêtes françaises ?", r:"Oui, je célèbre certaines fêtes françaises avec ma famille ou mes amis.", astuce:"Famille ou amis" },
  { id:32, cat:"Questions personnelles", q:"Quel aspect de la culture française vous a marqué ?", r:"Ce qui m’a marqué, c’est l’importance de la culture, du débat et de l’accès aux musées et aux événements culturels.", astuce:"Culture + débat" },
  { id:33, cat:"Questions personnelles", q:"Que pensez-vous de l’école en France ?", r:"Je pense que l’école en France offre une éducation de qualité et donne une chance aux enfants de réussir.", astuce:"Éducation de qualité" },
  { id:34, cat:"Questions personnelles", q:"Que pensez-vous de la liberté d’expression ?", r:"La liberté d’expression est essentielle, mais elle doit s’exercer dans le respect des lois et des autres.", astuce:"Liberté + limites" },
  { id:35, cat:"Questions personnelles", q:"Que pensez-vous de la laïcité ?", r:"La laïcité garantit la neutralité de l’État et la liberté de croire ou de ne pas croire.", astuce:"Neutralité + liberté" },
  { id:36, cat:"Questions personnelles", q:"Qu’appréciez-vous dans le mode de vie français ?", r:"J’apprécie l’équilibre entre le travail, la vie personnelle, la culture et les relations sociales.", astuce:"Équilibre" },
  { id:37, cat:"Questions personnelles", q:"Avez-vous des enfants scolarisés en France ?", r:"Oui, mes enfants sont scolarisés en France.", astuce:"Oui simple" },
  { id:38, cat:"Questions personnelles", q:"Quelle langue parlez-vous avec vos enfants ?", r:"Je parle principalement français avec mes enfants pour les aider à bien s’intégrer.", astuce:"Français principalement" },
  { id:39, cat:"Questions personnelles", q:"Quel conseil donneriez-vous à un nouvel arrivant ?", r:"Je lui conseillerais d’apprendre la langue, de respecter les règles, de s’informer et d’être patient.", astuce:"Langue + patience" },
  { id:40, cat:"Questions personnelles", q:"Que signifie être un bon citoyen ?", r:"Être un bon citoyen, c’est respecter les lois, participer à la société et faire preuve de civisme.", astuce:"Lois + participation" },
  { id:41, cat:"Histoire, culture et société", q:"Qui est le président de la République ?", r:"Le président de la République est Emmanuel Macron.", astuce:"À vérifier avant l’entretien" },
  { id:42, cat:"Histoire, culture et société", q:"Qui est le Premier ministre ?", r:"Le Premier ministre change selon l’actualité. Il faut vérifier son nom avant l’entretien.", astuce:"À vérifier avant l’entretien" },
  { id:43, cat:"Histoire, culture et société", q:"Quelle est la capitale de la France ?", r:"La capitale de la France est Paris.", astuce:"Paris" },
  { id:44, cat:"Histoire, culture et société", q:"Combien y a-t-il de régions en France ?", r:"Il y a 18 régions françaises : 13 en métropole et 5 en outre-mer.", astuce:"18 = 13 + 5" },
  { id:45, cat:"Histoire, culture et société", q:"Quels sont les symboles de la République ?", r:"Les symboles de la République sont le drapeau tricolore, Marianne, La Marseillaise et la devise Liberté, Égalité, Fraternité.", astuce:"4 symboles" },
  { id:46, cat:"Histoire, culture et société", q:"Que représente le drapeau français ?", r:"Le drapeau français symbolise la République et ses valeurs : liberté, égalité et fraternité.", astuce:"Valeurs républicaines" },
  { id:47, cat:"Histoire, culture et société", q:"Que représente Marianne ?", r:"Marianne représente la République française et la liberté.", astuce:"République" },
  { id:48, cat:"Histoire, culture et société", q:"Quel est l’hymne national ?", r:"L’hymne national est La Marseillaise.", astuce:"La Marseillaise" },
  { id:49, cat:"Histoire, culture et société", q:"Que signifie la fête du 14 juillet ?", r:"Le 14 juillet est la fête nationale. Elle est liée à la Révolution française et à la prise de la Bastille en 1789.", astuce:"1789 + fête nationale" },
  { id:50, cat:"Histoire, culture et société", q:"Qu’est-ce que la Révolution française ?", r:"La Révolution française marque la fin de la monarchie absolue et le début d’une nouvelle organisation politique.", astuce:"Fin monarchie absolue" },
  { id:51, cat:"Histoire, culture et société", q:"En quelle année a eu lieu la Révolution française ?", r:"La Révolution française a commencé en 1789.", astuce:"1789" },
  { id:52, cat:"Histoire, culture et société", q:"Qui était Napoléon Bonaparte ?", r:"Napoléon Bonaparte était un général devenu empereur. Il a marqué l’histoire de France.", astuce:"Général devenu empereur" },
  { id:53, cat:"Histoire, culture et société", q:"Qui était Charles de Gaulle ?", r:"Charles de Gaulle était un général, chef de la Résistance et fondateur de la Ve République.", astuce:"Résistance + Ve République" },
  { id:54, cat:"Histoire, culture et société", q:"Que s’est-il passé en 1945 ?", r:"En 1945, c’est la fin de la Seconde Guerre mondiale en Europe.", astuce:"Fin guerre" },
  { id:55, cat:"Histoire, culture et société", q:"Qu’est-ce que la Seconde Guerre mondiale ?", r:"La Seconde Guerre mondiale est un conflit mondial qui a duré de 1939 à 1945.", astuce:"1939–1945" },
  { id:56, cat:"Histoire, culture et société", q:"Qu’est-ce que la Déclaration des droits de l’homme ?", r:"La Déclaration des droits de l’homme est un texte fondamental qui affirme les libertés et les droits des citoyens.", astuce:"Droits + libertés" },
  { id:57, cat:"Histoire, culture et société", q:"Quelles sont les grandes valeurs de la République ?", r:"Les grandes valeurs de la République sont la liberté, l’égalité et la fraternité.", astuce:"Liberté Égalité Fraternité" },
  { id:58, cat:"Histoire, culture et société", q:"Qu’est-ce que la laïcité ?", r:"La laïcité, c’est la séparation de l’État et des religions. Elle garantit la liberté de croire ou non.", astuce:"État / religions" },
  { id:59, cat:"Histoire, culture et société", q:"Quelle est la langue officielle ?", r:"La langue officielle de la République est le français.", astuce:"Le français" },
  { id:60, cat:"Histoire, culture et société", q:"Quelles sont les grandes spécialités culinaires françaises ?", r:"On peut citer la baguette, le fromage, le vin, le cassoulet ou le bœuf bourguignon.", astuce:"Baguette + fromage" },
  { id:61, cat:"Histoire, culture et société", q:"Connaissez-vous des écrivains français ?", r:"Oui, par exemple Victor Hugo, Molière ou Voltaire.", astuce:"Victor Hugo" },
  { id:62, cat:"Histoire, culture et société", q:"Connaissez-vous des artistes français ?", r:"Oui, par exemple Claude Monet, Édith Piaf ou Auguste Rodin.", astuce:"Claude Monet" },
  { id:63, cat:"Histoire, culture et société", q:"Quelle est l’importance de la culture en France ?", r:"La culture est très importante en France. Elle fait partie de l’identité du pays et elle est accessible à tous.", astuce:"Culture centrale" },
  { id:64, cat:"Histoire, culture et société", q:"Qu’est-ce que le patrimoine ?", r:"Le patrimoine, c’est l’ensemble des biens culturels, historiques et naturels transmis aux générations futures.", astuce:"Transmission" },
  { id:65, cat:"Histoire, culture et société", q:"Connaissez-vous des monuments français ?", r:"Oui, par exemple la Tour Eiffel, l’Arc de Triomphe, Notre-Dame de Paris ou le Mont-Saint-Michel.", astuce:"Tour Eiffel" },
  { id:66, cat:"Histoire, culture et société", q:"Qu’est-ce que l’Union européenne ?", r:"L’Union européenne est une organisation de pays européens qui coopèrent dans plusieurs domaines.", astuce:"Organisation européenne" },
  { id:67, cat:"Histoire, culture et société", q:"La France fait-elle partie de l’Union européenne ?", r:"Oui, la France fait partie de l’Union européenne et fait même partie des pays fondateurs.", astuce:"Oui + pays fondateur" },
  { id:68, cat:"Histoire, culture et société", q:"Quelle est la monnaie en France ?", r:"La monnaie utilisée en France est l’euro.", astuce:"€" },
  { id:69, cat:"Histoire, culture et société", q:"Quels sont les pays voisins de la France ?", r:"Les pays voisins sont notamment la Belgique, l’Allemagne, la Suisse, l’Italie et l’Espagne.", astuce:"4-5 voisins suffisent" },
  { id:70, cat:"Histoire, culture et société", q:"Qu’est-ce que la francophonie ?", r:"La francophonie désigne l’ensemble des pays et des personnes qui parlent français.", astuce:"Pays parlant français" },
  { id:71, cat:"Institutions françaises", q:"Qu’est-ce que la République ?", r:"La République est un régime politique sans roi, fondé sur la souveraineté du peuple et le respect des lois.", astuce:"Pas de roi" },
  { id:72, cat:"Institutions françaises", q:"Qui dirige la France ?", r:"La France est dirigée par le président de la République et le gouvernement.", astuce:"Président + gouvernement" },
  { id:73, cat:"Institutions françaises", q:"Qu’est-ce que le Parlement ?", r:"Le Parlement est l’institution qui vote les lois.", astuce:"Vote les lois" },
  { id:74, cat:"Institutions françaises", q:"Quelles sont les deux chambres du Parlement ?", r:"Les deux chambres du Parlement sont l’Assemblée nationale et le Sénat.", astuce:"2 chambres" },
  { id:75, cat:"Institutions françaises", q:"Quel est le rôle de l’Assemblée nationale ?", r:"L’Assemblée nationale vote les lois et contrôle l’action du gouvernement.", astuce:"Lois + contrôle" },
  { id:76, cat:"Institutions françaises", q:"Quel est le rôle du Sénat ?", r:"Le Sénat représente les territoires et participe au vote des lois.", astuce:"Territoires" },
  { id:77, cat:"Institutions françaises", q:"Quel est le rôle du Président ?", r:"Le président dirige l’État, représente la France et veille au respect des institutions.", astuce:"Chef de l’État" },
  { id:78, cat:"Institutions françaises", q:"Quel est le rôle du gouvernement ?", r:"Le gouvernement dirige la politique du pays et applique les lois.", astuce:"Politique du pays" },
  { id:79, cat:"Institutions françaises", q:"Qu’est-ce que le pouvoir exécutif ?", r:"Le pouvoir exécutif applique les lois et dirige la politique du pays.", astuce:"Appliquer" },
  { id:80, cat:"Institutions françaises", q:"Qu’est-ce que le pouvoir législatif ?", r:"Le pouvoir législatif vote les lois.", astuce:"Voter" },
  { id:81, cat:"Institutions françaises", q:"Qu’est-ce que le pouvoir judiciaire ?", r:"Le pouvoir judiciaire rend la justice.", astuce:"Justice" },
  { id:82, cat:"Institutions françaises", q:"Qu’est-ce que la séparation des pouvoirs ?", r:"La séparation des pouvoirs permet d’éviter les abus en séparant le pouvoir exécutif, législatif et judiciaire.", astuce:"Évite les abus" },
  { id:83, cat:"Institutions françaises", q:"Comment sont élus les députés ?", r:"Les députés sont élus par les citoyens lors des élections législatives.", astuce:"Élections législatives" },
  { id:84, cat:"Institutions françaises", q:"Combien dure un mandat présidentiel ?", r:"Le mandat présidentiel dure 5 ans. On appelle cela le quinquennat.", astuce:"Quinquennat" },
  { id:85, cat:"Institutions françaises", q:"Qu’est-ce qu’une élection ?", r:"Une élection est un vote qui permet de choisir des représentants.", astuce:"Vote" },
  { id:86, cat:"Institutions françaises", q:"Qui peut voter en France ?", r:"Les citoyens français majeurs peuvent voter aux élections nationales.", astuce:"18 ans + français" },
  { id:87, cat:"Institutions françaises", q:"Qu’est-ce qu’une commune ?", r:"Une commune est une collectivité locale, comme une ville ou un village.", astuce:"Local" },
  { id:88, cat:"Institutions françaises", q:"Qui est le maire ?", r:"Le maire est le responsable de la commune.", astuce:"Commune" },
  { id:89, cat:"Institutions françaises", q:"Quel est le rôle du maire ?", r:"Le maire gère la ville, les services locaux et représente la commune.", astuce:"Gestion ville" },
  { id:90, cat:"Institutions françaises", q:"Qu’est-ce qu’une préfecture ?", r:"La préfecture représente l’État dans un département.", astuce:"État dans département" },
  { id:91, cat:"Lois et République", q:"Qui fait les lois en France ?", r:"Les lois sont faites par le Parlement.", astuce:"Parlement" },
  { id:92, cat:"Lois et République", q:"Comment une loi est-elle adoptée ?", r:"Une loi est discutée, votée par le Parlement puis promulguée par le président de la République.", astuce:"Vote + promulgation" },
  { id:93, cat:"Lois et République", q:"Qu’est-ce qu’une loi ?", r:"Une loi est une règle générale qui organise la vie en société.", astuce:"Règle générale" },
  { id:94, cat:"Lois et République", q:"Qui propose les lois ?", r:"Les lois peuvent être proposées par le gouvernement ou par les parlementaires.", astuce:"Gouvernement ou parlementaires" },
  { id:95, cat:"Lois et République", q:"Qu’est-ce que la Constitution ?", r:"La Constitution est le texte fondamental qui organise les institutions et garantit les droits.", astuce:"Base du pays" },
  { id:96, cat:"Lois et République", q:"Que signifie « nul n’est censé ignorer la loi » ?", r:"Cela signifie que chacun doit respecter la loi, même s’il ne la connaît pas dans le détail.", astuce:"Respecter la loi" },
  { id:97, cat:"Lois et République", q:"Qu’est-ce que la présomption d’innocence ?", r:"La présomption d’innocence signifie qu’une personne est innocente jusqu’à preuve du contraire.", astuce:"Innocent jusqu’à preuve" },
  { id:98, cat:"Lois et République", q:"Quelle est la majorité pénale ?", r:"La majorité pénale est fixée à 18 ans.", astuce:"18" },
  { id:99, cat:"Lois et République", q:"À quoi sert une loi ?", r:"La loi sert à organiser la société, protéger les personnes et garantir l’égalité.", astuce:"Organisation + protection" },
  { id:100, cat:"Lois et République", q:"Qui est protégé par la loi ?", r:"Toutes les personnes présentes en France sont protégées par la loi.", astuce:"Tout le monde" },
  { id:101, cat:"Lois et République", q:"Peut-on critiquer une loi ?", r:"Oui, on peut critiquer une loi, mais elle doit être respectée tant qu’elle est en vigueur.", astuce:"Critiquer mais respecter" },
  { id:102, cat:"Lois et République", q:"Qui contrôle les lois ?", r:"Le Conseil constitutionnel contrôle que les lois respectent la Constitution.", astuce:"Contrôle" },
  { id:103, cat:"Lois et République", q:"Qu’est-ce qu’un tribunal ?", r:"Un tribunal est une institution chargée de rendre la justice.", astuce:"Justice" },
  { id:104, cat:"Lois et République", q:"Qu’est-ce que le droit au recours ?", r:"Le droit au recours permet de contester une décision de justice ou une décision administrative.", astuce:"Recours = contester" },
  { id:105, cat:"Lois et République", q:"La loi est-elle la même pour tous ?", r:"Oui, la loi est la même pour tous. C’est le principe d’égalité devant la loi.", astuce:"Égalité devant la loi" },
  { id:106, cat:"Lois et République", q:"Peut-on manifester ?", r:"Oui, on peut manifester pacifiquement, dans le respect de la loi.", astuce:"Pacifique" },
  { id:107, cat:"Lois et République", q:"Peut-on critiquer le gouvernement ?", r:"Oui, on peut critiquer le gouvernement. C’est la liberté d’opinion et d’expression.", astuce:"Liberté d’opinion" },
  { id:108, cat:"Lois et République", q:"Qu’est-ce que le droit de grève ?", r:"Le droit de grève permet aux salariés d’arrêter le travail pour défendre leurs droits.", astuce:"Travail + droits" },
  { id:109, cat:"Lois et République", q:"Quelles sont les sources du droit ?", r:"Les sources du droit sont notamment la Constitution, les lois et les règlements.", astuce:"3 sources" },
  { id:110, cat:"Lois et République", q:"Quels sont les droits en cas d’arrestation ?", r:"En cas d’arrestation, on a le droit d’être informé, de garder le silence, d’avoir un avocat et de voir un juge.", astuce:"Avocat + silence + juge" },
  { id:111, cat:"Lois et République", q:"Quelle est la différence entre une loi et un règlement ?", r:"Une loi est votée par le Parlement, alors qu’un règlement est pris par le gouvernement pour appliquer la loi.", astuce:"Parlement / gouvernement" },
  { id:112, cat:"Lois et République", q:"A-t-on le droit d’être défendu ?", r:"Oui, toute personne a le droit d’être défendue, notamment par un avocat.", astuce:"Avocat" },
  { id:113, cat:"Lois et République", q:"La loi protège-t-elle la liberté de religion ?", r:"Oui, la loi protège la liberté de religion et la liberté de croire ou de ne pas croire.", astuce:"Croire ou non" },
  { id:114, cat:"Lois et République", q:"La loi protège-t-elle la liberté d’expression ?", r:"Oui, la loi protège la liberté d’expression, mais elle interdit les propos haineux, racistes ou diffamatoires.", astuce:"Liberté + limites" },
  { id:115, cat:"Lois et République", q:"Qu’est-ce qu’un casier judiciaire ?", r:"Un casier judiciaire est un document qui contient l’historique des condamnations pénales d’une personne.", astuce:"Historique" },
  { id:116, cat:"Lois et République", q:"Un citoyen peut-il changer une loi ?", r:"Un citoyen ne change pas directement une loi, mais il peut agir indirectement en votant ou en contactant ses élus.", astuce:"Indirectement" },
  { id:117, cat:"Lois et République", q:"Les lois s’appliquent-elles aux étrangers ?", r:"Oui, les lois françaises s’appliquent aux étrangers présents en France.", astuce:"Oui" },
  { id:118, cat:"Lois et République", q:"Peut-on se défendre seul ?", r:"Oui, on peut se défendre seul, mais il est souvent conseillé d’avoir un avocat.", astuce:"Oui, avocat conseillé" },
  { id:119, cat:"Lois et République", q:"Qu’est-ce qu’un contrat ?", r:"Un contrat est un accord juridique entre plusieurs personnes qui crée des obligations.", astuce:"Accord juridique" },
  { id:120, cat:"Lois et République", q:"Pourquoi la justice est-elle indépendante ?", r:"La justice est indépendante car elle ne dépend pas du pouvoir politique. Les juges appliquent la loi de manière impartiale.", astuce:"Séparation politique / justice" },
  { id:121, cat:"République", q:"Combien de Républiques la France a-t-elle connues ?", r:"Cinq Républiques.", astuce:"5 = actuel" },
  { id:122, cat:"République", q:"Quelle est la République actuelle ?", r:"La Ve République.", astuce:"1958 → aujourd’hui" },
  { id:123, cat:"République", q:"Quand commence la Ve République ?", r:"En 1958.", astuce:"De Gaulle" },
  { id:124, cat:"République", q:"Qui a fondé la Ve République ?", r:"Charles de Gaulle.", astuce:"De Gaulle = 1958" },
  { id:125, cat:"République", q:"Quand commence la IVe République ?", r:"En 1946.", astuce:"Après guerre" },
  { id:126, cat:"République", q:"Pourquoi la IVe République prend fin ?", r:"À cause de l’instabilité politique et de la guerre d’Algérie.", astuce:"Instable" },
  { id:127, cat:"République", q:"Quand commence la IIIe République ?", r:"En 1870.", astuce:"1870" },
  { id:128, cat:"République", q:"Quelle réforme importante sous la IIIe République ?", r:"L’école gratuite, laïque et obligatoire.", astuce:"École" },
  { id:129, cat:"République", q:"Quand devient stable la IIIe République ?", r:"En 1875.", astuce:"1875" },
  { id:130, cat:"République", q:"Quand commence la IIe République ?", r:"En 1848.", astuce:"Révolution" },
  { id:131, cat:"République", q:"Quelle avancée en 1848 ?", r:"Le suffrage universel masculin.", astuce:"Vote" },
  { id:132, cat:"République", q:"Quand commence la Ire République ?", r:"En 1792.", astuce:"Révolution" },
  { id:133, cat:"Histoire", q:"Que marque 1789 ?", r:"La Révolution française et la Déclaration des droits de l’homme.", astuce:"1789" },
  { id:134, cat:"Rois", q:"Qui était Clovis ?", r:"Le premier roi des Francs qui unifie le royaume.", astuce:"Début" },
  { id:135, cat:"Rois", q:"Pourquoi Clovis est important ?", r:"Il adopte la religion chrétienne.", astuce:"Religion" },
  { id:136, cat:"Rois", q:"Qui était Charlemagne ?", r:"Un empereur qui a construit un grand empire.", astuce:"Empire" },
  { id:137, cat:"Rois", q:"Qui est Hugues Capet ?", r:"Le fondateur de la dynastie capétienne.", astuce:"987" },
  { id:138, cat:"Rois", q:"Qui était Saint Louis ?", r:"Un roi juste et respecté.", astuce:"Justice" },
  { id:139, cat:"Rois", q:"Qui était Charles VII ?", r:"Le roi aidé par Jeanne d’Arc.", astuce:"Jeanne d’Arc" },
  { id:140, cat:"Histoire", q:"Qui était Jeanne d’Arc ?", r:"Une héroïne qui a aidé à libérer la France.", astuce:"Héroïne" },
  { id:141, cat:"Rois", q:"Qui était Henri IV ?", r:"Un roi qui a rétabli la paix religieuse.", astuce:"Paix" },
  { id:142, cat:"Rois", q:"Quelle décision prend Henri IV ?", r:"L’édit de Nantes en 1598.", astuce:"Tolérance" },
  { id:143, cat:"Rois", q:"Qui était Louis XIV ?", r:"Le roi Soleil, symbole de la monarchie absolue.", astuce:"Pouvoir" },
  { id:144, cat:"Rois", q:"Que signifie monarchie absolue ?", r:"Le roi détient tous les pouvoirs.", astuce:"Tout pouvoir" },
  { id:145, cat:"Rois", q:"Qui était Louis XVI ?", r:"Le roi pendant la Révolution française.", astuce:"1789" },
  { id:146, cat:"Rois", q:"Que lui est-il arrivé ?", r:"Il a été exécuté en 1793.", astuce:"Fin roi" },
  { id:147, cat:"Valeurs", q:"Quelles sont les valeurs de la République ?", r:"Liberté, égalité, fraternité.", astuce:"L.E.F" },
  { id:148, cat:"Valeurs", q:"Que signifie la liberté ?", r:"Pouvoir penser et s’exprimer librement.", astuce:"Liberté" },
  { id:149, cat:"Valeurs", q:"La liberté a-t-elle des limites ?", r:"Oui, il faut respecter les autres.", astuce:"Limites" },
  { id:150, cat:"Valeurs", q:"Que signifie l’égalité ?", r:"Tous les citoyens ont les mêmes droits.", astuce:"Égal" },
  { id:151, cat:"Valeurs", q:"Que signifie la fraternité ?", r:"La solidarité entre citoyens.", astuce:"Solidarité" },
  { id:152, cat:"Valeurs", q:"Qu’est-ce que la laïcité ?", r:"La séparation entre l’État et les religions.", astuce:"Séparation" },
  { id:153, cat:"Valeurs", q:"Peut-on pratiquer sa religion ?", r:"Oui, librement.", astuce:"Liberté" },
  { id:154, cat:"Valeurs", q:"Pourquoi pas de signes religieux à l’école ?", r:"Pour garantir la neutralité.", astuce:"Neutre" },
  { id:155, cat:"Citoyenneté", q:"Quels sont les droits des citoyens ?", r:"Vote, expression, accès aux emplois publics.", astuce:"Droits" },
  { id:156, cat:"Citoyenneté", q:"Quels sont les devoirs ?", r:"Respecter la loi, payer les impôts, défendre le pays.", astuce:"Devoirs" },
  { id:157, cat:"Citoyenneté", q:"Faut-il payer des impôts ?", r:"Oui, pour financer les services publics.", astuce:"Impôts" },
  { id:158, cat:"Institutions", q:"Qui est le chef de l’État ?", r:"Le Président de la République.", astuce:"Président" },
  { id:159, cat:"Institutions", q:"Que fait le Parlement ?", r:"Il vote les lois.", astuce:"Lois" },
  { id:160, cat:"Institutions", q:"Qu’est-ce qu’une démocratie ?", r:"Le pouvoir appartient au peuple.", astuce:"Peuple" },
  { id:161, cat:"Institutions", q:"Qu’est-ce que la Constitution ?", r:"Le texte qui organise l’État.", astuce:"Règles" },
  { id:162, cat:"Territoire", q:"Quelles sont les collectivités locales ?", r:"Commune, département, région.", astuce:"3 niveaux" },
  { id:163, cat:"Territoire", q:"Que fait la commune ?", r:"Elle gère les services locaux et l’état civil.", astuce:"Local" },
  { id:164, cat:"Culture", q:"Quelle est la fête nationale ?", r:"Le 14 juillet.", astuce:"Bastille" },
  { id:165, cat:"Culture", q:"Quels sont les symboles de la France ?", r:"Drapeau, Marseillaise, Marianne.", astuce:"Symboles" },
  { id:166, cat:"Culture", q:"Quelle est la langue officielle ?", r:"Le français.", astuce:"Français" },
  { id:167, cat:"Europe", q:"La France fait-elle partie de l’Union européenne ?", r:"Oui.", astuce:"UE" },
  { id:168, cat:"Europe", q:"Quelle est la monnaie ?", r:"L’euro.", astuce:"€" },
  { id:169, cat:"Valeurs", q:"Que signifie la devise Liberté, Égalité, Fraternité ?", r:"Les principes fondamentaux de la République française.", astuce:"Devise = valeurs" },
  { id:170, cat:"Valeurs", q:"Qu’est-ce que la discrimination ?", r:"Traiter une personne différemment pour des raisons interdites.", astuce:"Injustice" },
  { id:171, cat:"Valeurs", q:"La discrimination est-elle autorisée ?", r:"Non, elle est interdite par la loi.", astuce:"Interdit" },
  { id:172, cat:"Valeurs", q:"Qu’est-ce que la solidarité ?", r:"Aider les autres et participer à la vie collective.", astuce:"Aide" },
  { id:173, cat:"Valeurs", q:"Que garantit la République ?", r:"La liberté, l’égalité et la fraternité.", astuce:"L.E.F" },
  { id:174, cat:"Institutions", q:"Combien de temps dure le mandat du Président ?", r:"5 ans.", astuce:"Quinquennat" },
  { id:175, cat:"Institutions", q:"Qui nomme le Premier ministre ?", r:"Le Président de la République.", astuce:"Président" },
  { id:176, cat:"Institutions", q:"Qui dirige le gouvernement ?", r:"Le Premier ministre.", astuce:"Chef gouvernement" },
  { id:177, cat:"Institutions", q:"Que fait le gouvernement ?", r:"Il conduit la politique de la nation.", astuce:"Dirige" },
  { id:178, cat:"Institutions", q:"De quoi est composé le Parlement ?", r:"Assemblée nationale et Sénat.", astuce:"2 chambres" },
  { id:179, cat:"Institutions", q:"Qui vote les lois ?", r:"Le Parlement.", astuce:"Lois" },
  { id:180, cat:"Institutions", q:"Qui contrôle le gouvernement ?", r:"Le Parlement.", astuce:"Contrôle" },
  { id:181, cat:"Institutions", q:"Qui rend la justice ?", r:"Les juges.", astuce:"Justice" },
  { id:182, cat:"Institutions", q:"Pourquoi la justice doit-elle être indépendante ?", r:"Pour être juste et impartiale.", astuce:"Indépendance" },
  { id:183, cat:"Citoyenneté", q:"À quel âge peut-on voter ?", r:"18 ans.", astuce:"18" },
  { id:184, cat:"Citoyenneté", q:"Qu’est-ce que le droit de vote ?", r:"Le droit de participer aux élections.", astuce:"Voter" },
  { id:185, cat:"Citoyenneté", q:"Peut-on être candidat aux élections ?", r:"Oui, sous conditions.", astuce:"Candidat" },
  { id:186, cat:"Citoyenneté", q:"Que signifie nul n’est censé ignorer la loi ?", r:"Tout le monde doit respecter la loi.", astuce:"Obligation" },
  { id:187, cat:"Citoyenneté", q:"Qu’est-ce que l’impôt ?", r:"Une contribution pour financer les services publics.", astuce:"Financement" },
  { id:188, cat:"Territoire", q:"Combien y a-t-il de régions en France ?", r:"13 en métropole.", astuce:"13" },
  { id:189, cat:"Territoire", q:"Combien y a-t-il de départements ?", r:"101.", astuce:"101" },
  { id:190, cat:"Territoire", q:"Qui dirige une commune ?", r:"Le maire.", astuce:"Maire" },
  { id:191, cat:"Territoire", q:"Qui représente l’État dans les régions ?", r:"Le préfet.", astuce:"Préfet" },
  { id:192, cat:"Histoire", q:"Qui étaient les philosophes des Lumières ?", r:"Des penseurs pour la liberté et la tolérance.", astuce:"Lumières" },
  { id:193, cat:"Histoire", q:"Cite un philosophe des Lumières.", r:"Voltaire ou Rousseau.", astuce:"Voltaire" },
  { id:194, cat:"Histoire", q:"Qui était Napoléon Bonaparte ?", r:"Un empereur français.", astuce:"Empire" },
  { id:195, cat:"Histoire", q:"Que crée Napoléon ?", r:"Le Code civil.", astuce:"Loi" },
  { id:196, cat:"Histoire", q:"Quand a lieu la Première Guerre mondiale ?", r:"1914-1918.", astuce:"14-18" },
  { id:197, cat:"Histoire", q:"Quand a lieu la Seconde Guerre mondiale ?", r:"1939-1945.", astuce:"39-45" },
  { id:198, cat:"Histoire", q:"Qui était Charles de Gaulle ?", r:"Chef de la Résistance et président.", astuce:"Résistance" },
  { id:199, cat:"Histoire", q:"Que s’est-il passé le 8 mai ?", r:"Fin de la Seconde Guerre mondiale.", astuce:"Victoire" },
  { id:200, cat:"Histoire", q:"Que s’est-il passé le 11 novembre ?", r:"Fin de la Première Guerre mondiale.", astuce:"Armistice" },
  { id:201, cat:"Culture", q:"Quel est l’hymne national ?", r:"La Marseillaise.", astuce:"Hymne" },
  { id:202, cat:"Culture", q:"Que représente Marianne ?", r:"La République.", astuce:"Symbole" },
  { id:203, cat:"Culture", q:"Quelles sont les couleurs du drapeau ?", r:"Bleu, blanc, rouge.", astuce:"3 couleurs" },
  { id:204, cat:"Culture", q:"Quelle est la capitale de la France ?", r:"Paris.", astuce:"Paris" },
  { id:205, cat:"Géographie", q:"Quel est le plus long fleuve ?", r:"La Loire.", astuce:"Loire" },
  { id:206, cat:"Géographie", q:"Quelle est la plus haute montagne ?", r:"Le Mont-Blanc.", astuce:"Mont-Blanc" },
  { id:207, cat:"Géographie", q:"Cite un fleuve français.", r:"Seine, Loire, Rhône ou Garonne.", astuce:"Fleuves" },
  { id:208, cat:"Europe", q:"Combien de pays dans l’UE ?", r:"27 pays.", astuce:"27" },
  { id:209, cat:"Europe", q:"Peut-on circuler librement en Europe ?", r:"Oui.", astuce:"Libre" },
  { id:210, cat:"Europe", q:"Peut-on travailler dans un autre pays européen ?", r:"Oui.", astuce:"Travail UE" },
  { id:211, cat:"Économie", q:"La France est-elle une grande puissance ?", r:"Oui, économique mondiale.", astuce:"Puissance" },
  { id:212, cat:"Économie", q:"Cite un secteur fort en France.", r:"Aéronautique ou luxe.", astuce:"Luxe" },
  { id:213, cat:"Société", q:"Qu’est-ce que la Sécurité sociale ?", r:"Un système de protection sociale.", astuce:"Protection" },
  { id:214, cat:"Société", q:"Qui finance la Sécurité sociale ?", r:"Cotisations et impôts.", astuce:"Financement" },
  { id:215, cat:"Société", q:"L’école est-elle obligatoire ?", r:"Oui.", astuce:"Obligatoire" },
  { id:216, cat:"Société", q:"L’école est-elle gratuite ?", r:"Oui.", astuce:"Gratuite" },
  { id:217, cat:"Société", q:"L’école est-elle laïque ?", r:"Oui.", astuce:"Laïque" },
  { id:218, cat:"Valeurs", q:"Peut-on refuser quelqu’un à cause de sa religion ?", r:"Non, c’est une discrimination.", astuce:"Interdit" },
  { id:219, cat:"Valeurs", q:"La France protège-t-elle les libertés ?", r:"Oui.", astuce:"Liberté" },
  { id:220, cat:"Institutions", q:"Combien de députés environ ?", r:"577.", astuce:"577" },
  { id:221, cat:"Institutions", q:"Combien de sénateurs ?", r:"Environ 348.", astuce:"Sénat" },
  { id:222, cat:"Territoire", q:"Combien de communes en France ?", r:"Environ 35 000.", astuce:"Beaucoup" },
  { id:223, cat:"Histoire", q:"Qui était Louis XIV ?", r:"Le roi Soleil.", astuce:"Soleil" },
  { id:224, cat:"Histoire", q:"Que symbolise Versailles ?", r:"Le pouvoir royal.", astuce:"Versailles" },
  { id:225, cat:"Histoire", q:"Qui était Victor Hugo ?", r:"Un grand écrivain français.", astuce:"Écrivain" },
  { id:226, cat:"Culture", q:"Quel monument célèbre à Paris ?", r:"La Tour Eiffel.", astuce:"Tour Eiffel" },
  { id:227, cat:"Culture", q:"Quel site touristique célèbre ?", r:"Mont-Saint-Michel.", astuce:"Mont" },
  { id:228, cat:"Europe", q:"Depuis quand l’euro existe ?", r:"Depuis 2000.", astuce:"2000" },
  { id:229, cat:"Europe", q:"Peut-on voter aux élections européennes ?", r:"Oui.", astuce:"Vote UE" },
  { id:230, cat:"Société", q:"Qu’est-ce que l’égalité homme-femme ?", r:"Même droits pour tous.", astuce:"Égalité" },
  { id:231, cat:"Société", q:"Est-ce une valeur importante ?", r:"Oui essentielle.", astuce:"Important" },
  { id:232, cat:"Valeurs", q:"Peut-on être raciste ?", r:"Non, c’est puni.", astuce:"Interdit" },
  { id:233, cat:"Citoyenneté", q:"Faut-il déclarer ses revenus ?", r:"Oui.", astuce:"Obligatoire" },
  { id:234, cat:"Citoyenneté", q:"Pourquoi payer des impôts ?", r:"Pour financer l’État.", astuce:"État" },
  { id:235, cat:"Institutions", q:"Qui fait appliquer la loi ?", r:"Le gouvernement.", astuce:"Appliquer" },
  { id:236, cat:"Institutions", q:"Qui écrit la Constitution ?", r:"Le peuple ou ses représentants.", astuce:"Texte" },
  { id:237, cat:"Territoire", q:"Qui gère les lycées ?", r:"La région.", astuce:"Région" },
  { id:238, cat:"Territoire", q:"Qui gère les collèges ?", r:"Le département.", astuce:"Département" },
  { id:239, cat:"Territoire", q:"Qui gère les écoles ?", r:"La commune.", astuce:"Commune" },
  { id:240, cat:"Histoire", q:"Qui était Simone Veil ?", r:"Une femme politique importante.", astuce:"IVG" },
  { id:241, cat:"Histoire", q:"Que fait la loi Veil ?", r:"Autorise l’avortement.", astuce:"1975" },
  { id:242, cat:"Histoire", q:"Quand abolition peine de mort ?", r:"1981.", astuce:"1981" },
  { id:243, cat:"Culture", q:"Quel est le slogan de la République ?", r:"Liberté, Égalité, Fraternité.", astuce:"Devise" },
  { id:244, cat:"Culture", q:"Où voit-on Marianne ?", r:"Dans les mairies.", astuce:"Mairie" },
  { id:245, cat:"Géographie", q:"Combien d’habitants en France ?", r:"Environ 67 millions.", astuce:"67M" },
  { id:246, cat:"Géographie", q:"Surface de la France ?", r:"Environ 675 000 km².", astuce:"Surface" },
  { id:247, cat:"Europe", q:"La France est-elle dans l’ONU ?", r:"Oui.", astuce:"ONU" },
  { id:248, cat:"Europe", q:"Quel rôle à l’ONU ?", r:"Membre permanent.", astuce:"Important" },
  { id:249, cat:"Société", q:"Peut-on exprimer ses opinions ?", r:"Oui avec limites.", astuce:"Expression" },
  { id:250, cat:"Société", q:"Peut-on manifester ?", r:"Oui.", astuce:"Manif" },
  { id:251, cat:"Valeurs", q:"La loi est-elle la même pour tous ?", r:"Oui.", astuce:"Égalité" },
  { id:252, cat:"Valeurs", q:"Peut-on désobéir à la loi ?", r:"Non.", astuce:"Respect" },
  { id:253, cat:"Institutions", q:"Qui propose les lois ?", r:"Gouvernement ou Parlement.", astuce:"Lois" },
  { id:254, cat:"Institutions", q:"Qui promulgue les lois ?", r:"Le Président.", astuce:"Signature" },
  { id:255, cat:"Territoire", q:"Qu’est-ce qu’une région ?", r:"Une division administrative.", astuce:"Région" },
  { id:256, cat:"Territoire", q:"Qu’est-ce qu’un département ?", r:"Division administrative.", astuce:"Département" },
  { id:257, cat:"Histoire", q:"Qui était Napoléon III ?", r:"Empereur.", astuce:"Empire" },
  { id:258, cat:"Culture", q:"Langue de la République ?", r:"Le français.", astuce:"Français" },
  { id:259, cat:"Culture", q:"Quelle fête célèbre la nation ?", r:"14 juillet.", astuce:"Fête" },
  { id:260, cat:"Europe", q:"Que permet l’UE ?", r:"Circuler librement.", astuce:"Libre" },
  { id:261, cat:"Société", q:"Peut-on choisir sa religion ?", r:"Oui.", astuce:"Choix" },
  { id:262, cat:"Société", q:"Peut-on ne pas croire ?", r:"Oui.", astuce:"Libre" },
  { id:263, cat:"Valeurs", q:"Qu’est-ce que la tolérance ?", r:"Respect des différences.", astuce:"Respect" },
  { id:264, cat:"Valeurs", q:"Pourquoi vivre ensemble ?", r:"Pour la paix sociale.", astuce:"Paix" },
  { id:265, cat:"Citoyenneté", q:"Qu’est-ce qu’un citoyen ?", r:"Une personne avec des droits et devoirs.", astuce:"Citoyen" },
  { id:266, cat:"Citoyenneté", q:"Qu’est-ce que la nationalité ?", r:"Appartenance à un pays.", astuce:"Nation" },
  { id:267, cat:"Citoyenneté", q:"Pourquoi devenir français ?", r:"Partager les valeurs et vivre en France.", astuce:"Valeurs" },
  { id:268, cat:"Citoyenneté", q:"Qu’est-ce que l’intégration ?", r:"Participer à la société.", astuce:"Intégration" }
];

const allQuestions = questions;

function shuffleArray(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [category, setCategory] = useState("Toutes");
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("revision");
  const [showAnswer, setShowAnswer] = useState(true);
  const [order, setOrder] = useState(allQuestions);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);

  const categories = useMemo(() => ["Toutes", ...Array.from(new Set(allQuestions.map(q => q.cat))), "À revoir"], []);

  const filtered = useMemo(() => {
    if (category === "À revoir") return order.filter(q => review.includes(q.id));
    if (category === "Toutes") return order;
    return order.filter(q => q.cat === category);
  }, [category, order, review]);

  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / allQuestions.length) * 100);

  const goNext = () => {
    setIndex(i => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    setShowAnswer(mode === "revision");
  };

  const goPrev = () => {
    setIndex(i => Math.max(i - 1, 0));
    setShowAnswer(mode === "revision");
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setShowAnswer(newMode === "revision");
  };

  const chooseCategory = (cat) => {
    setCategory(cat);
    setIndex(0);
    setShowAnswer(mode === "revision");
  };

  const markKnown = () => {
    if (!current) return;
    setKnown(prev => prev.includes(current.id) ? prev : [...prev, current.id]);
    setReview(prev => prev.filter(id => id !== current.id));
    goNext();
  };

  const markReview = () => {
    if (!current) return;
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
          background: radial-gradient(circle at top, #1e293b, #020617);
          color: white;
          font-family: Arial, sans-serif;
          padding: 18px;
        }
        .container { max-width: 1120px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 16px; }
        .title { margin: 0; font-size: clamp(34px, 5vw, 56px); font-weight: 900; letter-spacing: -0.04em; }
        .subtitle { margin: 8px 0 0; color: #94a3b8; font-size: 17px; }
        .modebar { display: flex; gap: 10px; margin-bottom: 14px; }
        .modeBtn, .btn, .chip {
          border: 1px solid #334155;
          background: rgba(255,255,255,.05);
          color: white;
          cursor: pointer;
          font-weight: 800;
        }
        .modeBtn { flex: 1; padding: 13px 14px; border-radius: 16px; font-size: 15px; }
        .active { border-color: #60a5fa !important; background: rgba(37,99,235,.28) !important; color: #bfdbfe !important; }
        .chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 16px; }
        .chip { border-radius: 999px; padding: 9px 13px; font-size: 13px; }
        .meta { display: flex; justify-content: space-between; align-items: center; color: #cbd5e1; margin-bottom: 12px; }
        .progress { color: #93c5fd; font-weight: 800; }
        .card {
          min-height: 350px;
          border-radius: 24px;
          border: 1px solid #334155;
          background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,.20);
          color: #93c5fd;
          font-weight: 900;
          margin-bottom: 24px;
          font-size: 13px;
        }
        .question { font-size: clamp(24px, 4vw, 38px); line-height: 1.25; max-width: 900px; margin: 0 0 24px; }
        .answerBox {
          width: 100%;
          max-width: 900px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(34,197,94,.35);
          background: rgba(34,197,94,.08);
        }
        .answerTitle { color: #86efac; font-size: 22px; margin: 0 0 14px; }
        .answer { font-size: clamp(19px, 3vw, 27px); line-height: 1.45; margin: 0; }
        .tip { margin-top: 18px; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(96,165,250,.45); background: rgba(37,99,235,.16); color: #bfdbfe; font-size: 16px; font-weight: 800; }
        .hint { color: #94a3b8; font-size: 16px; }
        .actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 18px; }
        .btn { padding: 14px 16px; border-radius: 14px; font-size: 15px; }
        .red { border-color: #ef4444; color: #fca5a5; }
        .green { border-color: #22c55e; color: #86efac; }
        .bottomActions { display: flex; gap: 12px; justify-content: center; margin-top: 14px; }
        .bottomActions .btn { min-width: 240px; }
        @media (max-width: 700px) {
          .app { padding: 10px; }
          .modebar, .actions { grid-template-columns: 1fr 1fr; }
          .modebar { display: grid; }
          .actions { grid-template-columns: 1fr 1fr; }
          .chips { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 8px; }
          .chip { white-space: nowrap; }
          .meta { font-size: 13px; }
          .card { min-height: 420px; padding: 18px 14px; }
          .question { font-size: 25px; }
          .answer { font-size: 20px; }
          .bottomActions { flex-direction: column; }
          .bottomActions .btn { width: 100%; min-width: 0; }
        }
      `}</style>

      <main className="container">
        <header className="header">
          <h1 className="title">Entretien_JIB</h1>
          <p className="subtitle">Révision pour l’entretien de naturalisation</p>
        </header>

        <div className="modebar">
          <button className={`modeBtn ${mode === "revision" ? "active" : ""}`} onClick={() => switchMode("revision")}>📖 Mode révision</button>
          <button className={`modeBtn ${mode === "quiz" ? "active" : ""}`} onClick={() => switchMode("quiz")}>🎯 Mode quiz</button>
        </div>

        <div className="chips">
          {categories.map(cat => {
            const count = cat === "Toutes" ? allQuestions.length : cat === "À revoir" ? review.length : allQuestions.filter(q => q.cat === cat).length;
            return <button key={cat} className={`chip ${category === cat ? "active" : ""}`} onClick={() => chooseCategory(cat)}>{cat} ({count})</button>;
          })}
        </div>

        {!current ? (
          <div className="card"><h2>Aucune carte à revoir.</h2></div>
        ) : (
          <>
            <div className="meta">
              <span>Question {index + 1} / {filtered.length}</span>
              <span className="progress">{progress}% mémorisé</span>
              <span>Total : {allQuestions.length}</span>
            </div>

            <section className="card" onClick={() => mode === "quiz" && setShowAnswer(v => !v)}>
              <div className="badge">{current.cat.toUpperCase()}</div>
              <h2 className="question">{current.q}</h2>

              {showAnswer ? (
                <div className="answerBox">
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
              <button className="btn" onClick={() => { setOrder(shuffleArray(allQuestions)); setIndex(0); setShowAnswer(mode === "revision"); }}>🔀 Mélanger les cartes</button>
              <button className="btn" onClick={() => { setKnown([]); setReview([]); setIndex(0); }}>🧹 Réinitialiser la progression</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
