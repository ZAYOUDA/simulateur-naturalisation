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

{ id:169, cat:"Valeurs", q:"Que signifie la devise 'Liberté, Égalité, Fraternité' ?", r:"Les principes fondamentaux de la République française.", astuce:"Devise = valeurs" },

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

{ id:186, cat:"Citoyenneté", q:"Que signifie 'nul n’est censé ignorer la loi' ?", r:"Tout le monde doit respecter la loi.", astuce:"Obligation" },

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
  120:"La justice est indépendante car elle ne dépend pas du pouvoir politique. Les juges appliquent la loi de manière impartiale.",
121:"La France a connu cinq Républiques depuis la Révolution française.",
122:"La République actuelle est la Ve République, instaurée en 1958.",
123:"La Ve République a commencé en 1958.",
124:"La Ve République a été fondée par le général de Gaulle.",
125:"La IVe République a commencé en 1946 après la Seconde Guerre mondiale.",
126:"Elle a pris fin à cause de l’instabilité politique et de la guerre d’Algérie.",
127:"La IIIe République a commencé en 1870.",
128:"Elle a mis en place l’école gratuite, laïque et obligatoire.",
129:"Elle devient stable en 1875.",
130:"La IIe République commence en 1848.",
131:"Elle instaure le suffrage universel masculin.",
132:"La Ire République commence en 1792 après la chute de la monarchie.",
133:"1789 marque la Révolution française et la Déclaration des droits de l’homme.",
134:"Clovis est le premier roi des Francs, il unifie le royaume.",
135:"Il est important car il adopte le christianisme.",
136:"Charlemagne est un empereur qui a construit un grand empire en Europe.",
137:"Hugues Capet est le fondateur de la dynastie capétienne.",
138:"Saint Louis est un roi connu pour sa justice.",
139:"Charles VII est le roi aidé par Jeanne d’Arc.",
140:"Jeanne d’Arc est une héroïne qui a aidé à libérer la France.",
141:"Henri IV est un roi qui a rétabli la paix religieuse.",
142:"Il signe l’édit de Nantes en 1598.",
143:"Louis XIV est le roi Soleil, symbole de la monarchie absolue.",
144:"La monarchie absolue signifie que le roi détient tous les pouvoirs.",
145:"Louis XVI est le roi pendant la Révolution française.",
146:"Il a été exécuté en 1793.",
147:"Les valeurs de la République sont la liberté, l’égalité et la fraternité.",
148:"La liberté signifie pouvoir penser et s’exprimer librement.",
149:"Oui, elle a des limites pour respecter les autres.",
150:"L’égalité signifie que tous les citoyens ont les mêmes droits.",
151:"La fraternité signifie la solidarité entre les citoyens.",
152:"La laïcité est la séparation entre l’État et les religions.",
153:"Oui, chacun peut pratiquer sa religion librement.",
154:"Pour garantir la neutralité de l’école.",
155:"Les citoyens ont des droits comme voter et s’exprimer.",
156:"Ils doivent respecter la loi et payer les impôts.",
157:"Oui, les impôts financent les services publics.",
158:"Le chef de l’État est le Président de la République.",
159:"Le Parlement vote les lois.",
160:"Une démocratie est un système où le pouvoir appartient au peuple.",
161:"La Constitution organise le fonctionnement de l’État.",
162:"Les collectivités sont la commune, le département et la région.",
163:"La commune gère les services locaux et l’état civil.",
164:"La fête nationale est le 14 juillet.",
165:"Les symboles sont le drapeau, la Marseillaise et Marianne.",
166:"La langue officielle est le français.",
167:"Oui, la France fait partie de l’Union européenne.",
168:"La monnaie est l’euro.",
169:"La devise représente les valeurs fondamentales de la République.",
170:"La discrimination est une injustice basée sur des critères interdits.",
171:"Non, elle est interdite par la loi.",
172:"La solidarité consiste à aider les autres.",
173:"La République garantit la liberté, l’égalité et la fraternité.",
174:"Le mandat du Président dure 5 ans.",
175:"Le Président nomme le Premier ministre.",
176:"Le Premier ministre dirige le gouvernement.",
177:"Le gouvernement conduit la politique du pays.",
178:"Le Parlement est composé de l’Assemblée nationale et du Sénat.",
179:"C’est le Parlement qui vote les lois.",
180:"Le Parlement contrôle le gouvernement.",
181:"La justice est rendue par les juges.",
182:"Elle doit être indépendante pour être juste.",
183:"On peut voter à partir de 18 ans.",
184:"Le droit de vote permet de participer aux élections.",
185:"Oui, tout citoyen peut être candidat sous conditions.",
186:"Cela signifie que tout le monde doit respecter la loi.",
187:"L’impôt finance les services publics.",
188:"Il y a 13 régions en métropole.",
189:"Il y a 101 départements.",
190:"Le maire dirige la commune.",
191:"Le préfet représente l’État.",
192:"Les philosophes des Lumières défendaient la liberté.",
193:"Par exemple Voltaire ou Rousseau.",
194:"Napoléon était un empereur français.",
195:"Il a créé le Code civil.",
196:"La Première Guerre mondiale a eu lieu de 1914 à 1918.",
197:"La Seconde Guerre mondiale de 1939 à 1945.",
198:"De Gaulle est le chef de la Résistance.",
199:"Le 8 mai marque la fin de la Seconde Guerre mondiale.",
200:"Le 11 novembre marque la fin de la Première Guerre mondiale.",
201:"L’hymne national de la France est La Marseillaise.",
202:"Marianne représente la République française.",
203:"Les couleurs du drapeau français sont bleu, blanc et rouge.",
204:"La capitale de la France est Paris.",
205:"Le plus long fleuve français est la Loire.",
206:"La plus haute montagne est le Mont-Blanc.",
207:"On peut citer la Seine, la Loire, le Rhône ou la Garonne.",
208:"L’Union européenne compte 27 pays membres.",
209:"Oui, on peut circuler librement dans l’Union européenne.",
210:"Oui, un citoyen européen peut travailler dans un autre pays de l’Union européenne.",
211:"Oui, la France est une grande puissance économique mondiale.",
212:"On peut citer l’aéronautique, le luxe, le tourisme ou le transport.",
213:"La Sécurité sociale est un système de protection sociale.",
214:"Elle est financée par les cotisations sociales et les impôts.",
215:"Oui, l’école est obligatoire en France.",
216:"Oui, l’école publique est gratuite.",
217:"Oui, l’école publique est laïque.",
218:"Non, refuser quelqu’un à cause de sa religion est une discrimination.",
219:"Oui, la France protège les libertés fondamentales.",
220:"Il y a 577 députés à l’Assemblée nationale.",
221:"Il y a environ 348 sénateurs.",
222:"La France compte environ 35 000 communes.",
223:"Louis XIV était appelé le Roi Soleil.",
224:"Versailles symbolise le pouvoir royal et la monarchie absolue.",
225:"Victor Hugo est un grand écrivain français, auteur des Misérables.",
226:"Un monument très célèbre à Paris est la Tour Eiffel.",
227:"Un site touristique célèbre est le Mont-Saint-Michel.",
228:"La France utilise l’euro depuis 2000.",
229:"Oui, les citoyens français votent aux élections européennes.",
230:"L’égalité homme-femme signifie que les femmes et les hommes ont les mêmes droits.",
231:"Oui, l’égalité homme-femme est une valeur essentielle de la République.",
232:"Non, le racisme est interdit et puni par la loi.",
233:"Oui, il faut déclarer ses revenus.",
234:"On paie des impôts pour financer l’État et les services publics.",
235:"Le gouvernement fait appliquer la loi.",
236:"La Constitution est écrite et adoptée par le peuple ou ses représentants.",
237:"La région gère notamment les lycées.",
238:"Le département gère notamment les collèges.",
239:"La commune gère notamment les écoles maternelles et primaires.",
240:"Simone Veil est une femme politique importante, connue pour la loi sur l’IVG.",
241:"La loi Veil de 1975 autorise l’interruption volontaire de grossesse.",
242:"La peine de mort a été abolie en France en 1981.",
243:"La devise de la République est Liberté, Égalité, Fraternité.",
244:"On voit Marianne dans les mairies.",
245:"La France compte environ 67 millions d’habitants.",
246:"La surface de la France est d’environ 675 000 km² avec l’outre-mer.",
247:"Oui, la France est membre de l’ONU.",
248:"La France est membre permanent du Conseil de sécurité de l’ONU.",
249:"Oui, on peut exprimer ses opinions, dans le respect de la loi.",
250:"Oui, on peut manifester en France dans le respect de la loi.",
251:"Oui, la loi est la même pour tous les citoyens.",
252:"Non, chacun doit respecter la loi.",
253:"Les lois peuvent être proposées par le gouvernement ou par les parlementaires.",
254:"Le Président de la République promulgue les lois.",
255:"Une région est une collectivité territoriale.",
256:"Un département est une collectivité territoriale entre la région et la commune.",
257:"Napoléon III était empereur sous le Second Empire.",
258:"La langue de la République est le français.",
259:"La fête nationale est le 14 juillet.",
260:"L’Union européenne permet notamment de circuler, travailler et étudier librement.",
261:"Oui, chacun peut choisir sa religion.",
262:"Oui, chacun est libre de croire ou de ne pas croire.",
263:"La tolérance, c’est respecter les différences.",
264:"Vivre ensemble permet de garantir la paix sociale et le respect entre citoyens.",
265:"Un citoyen est une personne qui a des droits et des devoirs.",
266:"La nationalité est le lien juridique entre une personne et un pays.",
267:"Je souhaite devenir français(e) car je vis en France, je suis intégré(e) et je partage les valeurs de la République.",
268:"L’intégration, c’est participer à la société, respecter les lois et partager les valeurs du pays." 
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
  120:"Séparation politique / justice",
  121:"5 Républiques = actuel",
122:"1958 = aujourd’hui",
123:"1958 = De Gaulle",
124:"De Gaulle = Ve République",
125:"Après guerre",
126:"Instable + Algérie",
127:"1870 repère",
128:"École = République",
129:"1875 stabilité",
130:"1848 = révolution",
131:"Vote masculin",
132:"1792 = fin roi",
133:"1789 = révolution",
134:"Clovis = début",
135:"Clovis = chrétien",
136:"Charlemagne = empire",
137:"987 = Capet",
138:"Saint Louis = justice",
139:"Jeanne d’Arc",
140:"Héroïne France",
141:"Henri IV = paix",
142:"1598 = Nantes",
143:"Louis XIV = pouvoir",
144:"Tout pouvoir",
145:"Louis XVI = révolution",
146:"1793 = mort roi",
147:"L.E.F",
148:"Liberté",
149:"Limites",
150:"Égalité",
151:"Solidarité",
152:"Séparation",
153:"Libre religion",
154:"École neutre",
155:"Droits citoyens",
156:"Devoirs citoyens",
157:"Impôts",
158:"Président",
159:"Lois",
160:"Peuple",
161:"Règles État",
162:"3 niveaux",
163:"Local",
164:"14 juillet",
165:"Symboles",
166:"Français",
167:"UE",
168:"€",
169:"Devise",
170:"Injustice",
171:"Interdit",
172:"Aide",
173:"L.E.F",
174:"5 ans",
175:"Président",
176:"PM",
177:"Dirige pays",
178:"2 chambres",
179:"Vote lois",
180:"Contrôle",
181:"Juges",
182:"Indépendant",
183:"18 ans",
184:"Vote",
185:"Candidat",
186:"Respect loi",
187:"Finance État",
188:"13 régions",
189:"101",
190:"Maire",
191:"Préfet",
192:"Lumières",
193:"Voltaire",
194:"Napoléon",
195:"Code civil",
196:"14-18",
197:"39-45",
198:"Résistance",
199:"8 mai",
200:"11 nov",
201:"Marseillaise",
202:"Marianne",
203:"Bleu blanc rouge",
204:"Paris",
205:"Loire",
206:"Mont-Blanc",
207:"Fleuves",
208:"27",
209:"Libre",
210:"UE travail",
211:"Puissance",
212:"Luxe",
213:"Protection",
214:"Cotisations",
215:"Obligatoire",
216:"Gratuite",
217:"Laïque",
218:"Discrimination",
219:"Libertés",
220:"577",
221:"Sénat",
222:"35k communes",
223:"Soleil",
224:"Versailles",
225:"Hugo",
226:"Tour Eiffel",
227:"Mont-Saint-Michel",
228:"2000",
229:"Vote UE",
230:"Égalité",
231:"Important",
232:"Interdit",
233:"Déclarer",
234:"Impôts",
235:"Appliquer",
236:"Constitution",
237:"Région",
238:"Département",
239:"Commune",
240:"Simone Veil",
241:"IVG",
242:"1981",
243:"Devise",
244:"Mairie",
245:"67M",
246:"Surface",
247:"ONU",
248:"Permanent",
249:"Expression",
250:"Manif",
251:"Égalité",
252:"Respect loi",
253:"Propose lois",
254:"Président signe",
255:"Région",
256:"Département",
257:"Napoléon III",
258:"Français",
259:"Fête",
260:"Libre UE",
261:"Choix",
262:"Libre",
263:"Tolérance",
264:"Paix",
265:"Citoyen",
266:"Nation",
267:"Motivation",
268:"Intégration"
};

function shuffleArray(list){
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App(){
  const [category,setCategory] = useState("Toutes");
  const [index,setIndex] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const [mode,setMode] = useState("quiz");
  const [order,setOrder] = useState(questions);
  const [known,setKnown] = useState([]);
  const [review,setReview] = useState([]);

  const categories = [
    {key:"Toutes", label:"Toutes"},
    {key:"Questions personnelles", label:"Perso"},
    {key:"Histoire, culture et société", label:"Culture"},
    {key:"Institutions françaises", label:"Institutions"},
    {key:"Lois et République", label:"Lois"}
  ];

  const filtered = useMemo(() => order.filter(q => category === "Toutes" || q.cat === category), [order, category]);
  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / questions.length) * 100);

  const goNext = () => { setIndex(i => Math.min(i + 1, filtered.length - 1)); setShowAnswer(mode === "revision"); };
  const goPrev = () => { setIndex(i => Math.max(i - 1, 0)); setShowAnswer(mode === "revision"); }; 

  const switchMode = (newMode) => {
    setMode(newMode);
    setShowAnswer(newMode === "revision");
  };

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
        .modebar {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .modeBtn {
          flex: 1;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid #334155;
          background: rgba(255,255,255,.04);
          color: #e5e7eb;
          font-weight: 800;
          cursor: pointer;
          font-size: 15px;
        }
        .modeBtn.active {
          border-color: #60a5fa;
          background: rgba(37,99,235,.28);
          color: #bfdbfe;
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
        .revisionCard {
          cursor: default;
          gap: 22px;
        }
        .revisionQuestion {
          margin-bottom: 6px;
        }
        .revisionAnswerBox {
          width: 100%;
          max-width: 900px;
          padding: 20px;
          border-radius: 18px;
          border: 1px solid rgba(34,197,94,.35);
          background: rgba(34,197,94,.08);
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
          .modebar {
            gap: 8px;
            margin-bottom: 10px;
          }
          .modeBtn {
            padding: 10px 8px;
            font-size: 13px;
            border-radius: 14px;
          }
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
          .revisionCard {
            gap: 14px;
            justify-content: flex-start;
            overflow-y: auto;
          }
          .revisionAnswerBox {
            padding: 14px;
            border-radius: 16px;
          }
          .revisionQuestion {
            margin-bottom: 0;
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
        <div className="modebar">
          <button onClick={() => switchMode("quiz")} className={`modeBtn ${mode === "quiz" ? "active" : ""}`}>🎯 Mode quiz</button>
          <button onClick={() => switchMode("revision")} className={`modeBtn ${mode === "revision" ? "active" : ""}`}>📖 Mode révision</button>
        </div>

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

          <div onClick={() => mode === "quiz" && setShowAnswer(!showAnswer)} className={`card ${mode === "revision" ? "revisionCard" : ""}`}>
            <div className="badge">{current.cat.toUpperCase()}</div>
            {mode === "revision" ? <>
              <h1 className="question revisionQuestion">{current.q}</h1>
              <div className="revisionAnswerBox">
                <h2 className="answerTitle">Réponse modèle</h2>
                <p className="answer">{sampleAnswers[current.id]}</p>
                {memoryTips[current.id] && <div className="memoryTip"><strong>Astuce :</strong> {memoryTips[current.id]}</div>}
              </div>
            </> : !showAnswer ? <>
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
