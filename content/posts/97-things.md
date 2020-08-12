---
title: '97 Astuces'
date: "2020-xx-xx"
template: "post"
draft: true
slug: "tips--use-of-jacoco"
category: "Tips"
tags:
  - "DevTools"
  - "Qualité"
description: >
  Comment produire un rapport de couverture de code, sur une application Java multi-module,
  avec et sans, les tests d'intégration, à l'aide de JaCoCo.
socialImage: ''
---
https://medium.com/@biratkirat/step-1-act-with-prudence-edward-garson-a42ec475270a

https://github.com/97-things/97-things-every-programmer-should-know
https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/content/en/

# 97 Astuces que tout développeur devrait connaître

Il vous aura peut-être marqué, ce livre vient de sortir "97 Things every Programmer Should know", une compilation de conseils donnés par de célèbres acteurs de la scène de l'IT d'aujourd'hui (2020).

Touyt le contenu du livre est disponible sous license [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 license](http://creativecommons.org/licenses/by-nc-sa/3.0/), sur [Github](https://github.com/97-things/97-things-every-programmer-should-know)

Je vous propose de balayer de maniàère superficielle ces 97 Astuces.



## #1. Agir avec Prudence

### Seb Rose

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501124.png.jpg)

*Whatever you undertake, act with prudence and consider the consequences*.

—Anonyme

Il apparaît, dans le développement logiciel, que l'on soit parfois amené à choisir entre "*faites le vite*" et "*faites le bien*". Souvent le "*faites-le vite*" est accompagné de l'intention "*on l'améliorera plus tard*". Martin Fowler appelle cette pratique la "*deliberate technical debt*" (dette technique intentionnelle), à ne pas confondre ,avec la dette technique accidentelle ou "*inadvertent technical debt*" [[1]][1].

La dette technique est un prêt, que vous contractez sur le budget de votre projet. Soyez prudent quand vous en introduisez, et conscient de ses conséquences. Plus vous la conserverez, plus elle sera difficile à rembourser, et parfois, ce sera tout bonnement impossible.

Remboursez votre dette aussi vite que possible, faire autrement serait imprudent.

------

[[1](#CHP-1-FNOTE-1)] http://martinfowler.com/bliki/TechnicalDebtQuadrant.html

## #2. Appliquez les principes de la programmation Fonctionnelle

### Edward Garson

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501126.png.jpg)

Avec le paradigme de la programmation fonctionnelle bien en tête, vous améliorerez grandement la qualité de votre code, même dans des languages utilisant d'autres paradigmes. En effet, votre design fera preuve d'une meilleure [transparence référentielle][].

La transparence référentielle est une propriété souhaite de votre design: cela implique que vos fonctione sont **pures**, c'est à dire qu'elle a les mêmes effets pour les mêmes entrées, où qu'elles soient appelées dans votre système, et qu'elle ont moins d'effet de bord (idéalement : aucun).

[transparence référentielle]: https://fr.wikipedia.org/wiki/Transparence_référentielle

## #3. Demandez-vous "Que ferait l'utilisateur ?" (Vous n'êtes pas l'utilisateur)

### Giles Colborne

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501128.png.jpg)

Nous avons tous tendence à croire que les autres personnes réfléchissent comme nous. Ce n'est pas le cas, et il existe un biais cognitif pour le décrire: l'Effet de faux consensus.

Le meilleur moyen pour comprendre comment l'utilisateur fonctionne, c'est de l'observer. Regardez le utiliser l'application que vous développer, et proposez-lui de vrais tâches à faire, avec ses propres mots, et non avec les vôtres.

## #4. Automatisez vos standards de code

### Filip van Laenen

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501130.png.jpg)

Au début d'un projet, tous les participants ont les meilleures intentions du monde. Les developpeurs écrivent les standards de code du projet dans des guide de contribution, auxquels tout le monde adhère.

Mais à un moment, tout bascule, et respecter les standards de coede devient une tâche longue et ennuyeuse.

Pourquoi met-on en place des standards de code ? Pour garder un format uniforme d'un développeur à l'autre ? Pour éviter certains "anti-patterns" et limiter l'apparition de bugs communs ? 

Il existe pléthore d'outils produisant des rapports sur la qualité du code, et permettant de maintenir les standards de code. Mais seules, ces solutions ne sont pas suffisantes : il faut automatiser et imposer les standards de code lorsque c'est possible. Quelques exemples:

- Assurez vous que le formattage du code entre dans le processus de "Build" de l'application. 
- Faites tournez des analyseurs de code statiques pour détecter les aintipatterns honnis : cassez le Build quand vous en trouvez un.
- Apprenez à configurer ces outils pour vous-même
- Ne vous arrêtez pas à mlesurer la couverture de code, mais automatisez l'analyse des résultats. De la même manière, cassez le Build lorsque la couverturee es trop basse.

Tentez de faire ceci pour tout ce qui vous semble important. Et pour ce que vous ne pouveaz pas automatiser, conservez des guidelines, en gardant à l'esprit que tout le monde ne les respectera pas scrupuleusement.

Enfin, vos standards devraient évoluier dans le temps, et non pas être figés. Au fur et à mesure de l'évolution des besoin du projet, ce qui parrassait pertinent au début a peut-être moins de sens quelques mois plus tard.

## #5. La beauté réside dans la simplicité

## Chapter 5. Beauty Is in Simplicity

### Jørn Ølmheim

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501132.png.jpg)

Qu'est ce que le beau code ? Cette question est très subjective, car la perception de la beauté réside en chacun.

Néanmois, nous recherchons souvent un certain nobmre de chose dans le code:

-  Lisibilité
- Maintenabilité
- Répidité de développement
- L'insaisissable qualité de la beauté

Pensez au code que vous avez rencontré dans votre vie. Si vous n'en avez jamais lu, faites le! Maintenent ! Une fois que c'est fait, rappelez vous ce qui vous a plu.

Pour ma part, la simplicité est la base de toute la beauté.

## #.6 Avant de Refactorer

### Rajith Attapattu

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501134.png.jpg)

Pensez aux éléments suivants :

- La meilleure approche pour restructurer, commence par faire le point sur la codebase existante, et ses tests.
- Ne vous laissez pas aller à tout réécrire
- Plusieurs petits changements incrémentaux valent mieux qu'un changement radical



## #7. Méfiez-vous du partage

## Chapter 7. Beware the Share

### Udi Dahan

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501136.png.jpg)

Et pensez au contexte.

Mutualiser du code, entre deux modules indépendants d'un système, est parfois une mauvaise idée. Surtout quand les règles métiers des deux modules peuvent évoluer indépendemment l'une de l'autre : ne mutualisez pas systématiquement le code dupliqué, et pensez au contexte.

## #.8 La règle du Boy Scout

### Robert C. Martin (Uncle Bob)

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501138.png.jpg)

> Laissez toujours le campement plus propre que lorsque vous y êtes entré.

Quelque soit l'auteur originel du code que vous avez sous les yeux, si vous pensez pouvoir l'améliorer, même un tout petit peu, alors faites-le. Améliorez continuellement la codebase que vous partagez avec vos collègues.



## #9. Commence par vérifier ton code avant de chercher le fautif ailleurs

### Allan Kelly

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501140.png.jpg)

Les bugs du compilateur sont très rares. Partez du principe que les outils que vous utilisez sont stables, matures, et utilisé dans de nombreux contextes (à moins que vous n'utiliseiez une version 0.1 ou une alpha).

Investissez votre énergie dans la recherche des bugs chez vous, pas chez les autres.

## #10. Choisissez vos outils avec attention

### Giovanni Asproni

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501142.png.jpg)

Les applications d'aujourd'hui sont rarement construites à partir de rien : elles sont assemblées à partir d'outils existants pour de bonnes raisons.
Cependant, choisir le bon ensemble d'outils est parfois un casse-tête sans nom. Regardez les raisons à l'origine de la création des outils, et à leur raison d'être. Par exemple, si vous êtes dans un contexte asynchrone sur l'ensemble de votre système, évitez d'introduire un outil synchrone.

## #11. Développez dans le Language du Domaine Métier

### Dan North

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501144.png.jpg)

Prenons l'exemple de deux codebases.

Dans la première vous trouvez ceci :

```java
if (portfolioIdsByTraderId.get(trader.getId())
    .containsKey(portfolio.getId())) {...}
```

Après moult réflexion, vous vous rendez compte qu'il y a des associations de portfolios et de trader, dans un objet comme celui-ci :

```java
Map<int, Map<int, int>> portfolioIdsByTraderId;
```

Et, peu à peu, vous vous rendez compte que ce dictionnaire conditionne la visibilité des portfolios par trader.

Dans la seconde code base, vous tombez sur ceci :

```java
if (trader.canView(portfolio)) {...}
```

Pas de prise de tête. Vous savez ce que le code fait, même si vous ne savez pas comment. Peut-être qu'il s'agit de Map de Map, comme dans l'exemple précédent, mais il s'agit de la logique du trader, pas de la votre.

Et maintenant, sur quelle codebase préféreriez-vous travailler ?

## #12. Le code EST le design

### Ryan Brush

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501146.png.jpg)

Projettons nous dans un futur immaginaire, où des robots sont en mesure de nous construire n'importe quoi à partir d'air et sans énergie. A une condition. Qu'on leur fournisse des plans clairs et précis.

Immaginez la révoluition dans le monde de la construction ; si quelque chose cloche sur un bâtiment ou une voiture, il suffit de corriger les plans et de les donner aux robots. Ils reconstruiront l'objet pour un coût négligeable.

Et si je vous disais que ce monde exsite déjà en informatique ? Que les robots du futur, sont les compilateurs d'aujourd'hui  ? Et que les plans clairs et précis, ne sont que le code. Le code d'aujourd'hui est le designe des plans de demain.

## #13. L'aspect du code compte

### Steve Freeman

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501148.png.jpg)

TL;DR We don’t have to spend much time making layout beautiful, explore the powerful IDE and use auto-formatter.

Nous passons tous plus de temps à naviguer, et à lire du code, qu'à en écrire. Et ce, dans le but de trouver où coder. Il existe plusieurs moyens de rendre cette lecture plus facile :

- Rendre le code facile à scanner, visuellement : les gens sont doués pour faire correspondre des motifs visuels entre eux. Si le code est homogène, il sera plus facile de trouver les différences
- Rendre la disposition du code expressive: les formateurs automatique de code permettent de grouper les structures du code, par l'indentation, les sauts de lignes, etc. Réfléchissea au paramétrage de ces outils, car mettre en évidence ces structure aide à comprendre l'inbtention du code, et sert à autre chose qu'à suivre la synthaxe d'un langage
- Rencdre le code compact: plus ('ai de code sous mes yeux, moins j'en garde en tête. Aujourd'hui, les IDE mettent en évidence le code avec de la coloration syntaxique, et des liens internes. Servez-vous en

Je voudrais que l'allure générale du code m'aide à le comprendre, rien de plus.

## #14. La Revue de Code

### Mattias Karlsson

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501150.png.jpg)

Vous devez faire de la revue de code. Pourquoi ? Parfce que ça améliore la qualité du code, et que cela diminue la fréquence des ratés.

Comment ? La reveue de code est un moment incroyablme pour partager la connaissance d'un proijet,et contribue à améliorer la propriété collective du code.

## #15. Coder en raisonnant

### Yechiel Kimchi

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501152.png.jpg)

Regardez votre code, et réfléchissez. Essayez de savoir s'il est correct ou si vous détectez des erreurs, techniques comme fonctionnelles. Il serait préférable d'utiliser un outil automatisé, tel un compilateur ou des tests automatisés, mais ce n'est pas toujours possible

Une alternative serait de découper le code en petites portions compréhensibles (par exemple des méthode de 5 à 10 lignes), et de réfléchir pour savoir chaque petite portion de code est correcte ou non. Cette façon de faire vous rappelle-t-elle quelque chose ?

La plupart des "bonnes" pratiques que l'on connait aujourd'hui, cherchent à faciliter la réflexion sur le code. 

## #16. Un Commentaire sur les commentaires

### Cal Evans

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501154.png.jpg)

Les commentaires ne sont pas nécessairement un mal. Faites en sorte que le code puisse être compris par les développeurs qui  passeront derrière vous.

Mais n'en faites pas trop : assurez vous que vos commentaires clarifient le code, sans l'obfusquer. Le futurs développeurs doivent comprendre ce que fait le code en rapport avec le commentaire, sans avoir besoin de lire les détails d'implémention.

## #17. Ne commentez que ce que le code ne peut pas dire de lui-même

### Kevlin Henney

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501156.png.jpg)

Ecrire de bons commentaires est une compétence à part entière. Elle consiste principalement à à quel moment, il faut ne pas en écrire. Un commentaire erroné n'a pas de valeur, et peut avoir un effet négatif. Il peut nuire à la concentration, et être source de distraction. De plus, il est plus facile pour un commentaire faux, de survivre dans une code base, qu'un bug dans le code, car un commentaire n'est pas exécut.

Comment qualifier la valeur d'un commentaire ? Il doit expliciter quelque chose que le code ne peut lui-même dire. Lorsqu'une portion de code est commentée, cherchez à la remanier, pour qu'elle exprime par elle-même l'intention du commentaire. Extrayez des méthodes, renommez-les, exprimez l'intetion du code par son design. La différence entre ce qu'exprime le code, et ce que vous voulez dire au global, est un bon candidat pour en faire un commentaire.

## #18. Apprendre en continu

### Clint Shank

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501158.png.jpg)

N'importe qui sur Terre peut apprendre à faire votre métier. Travaillez votre employabilité, et continuez d'apprendre. Sinon, vous devenez un dinosaure, et vous disparaîtrez quand plus personne n'aura besoin de vous.

Comment faire ? Certain emplyeurs vous accompagnent, d'autres non, et pour assurez votre sécurité, il est de votre responsabilité de prendre en charge votre éductation.

Beaucoup de méthodes permettant de progresser, sont gratuites, et disponibles sur Internet. [Consulter la liste de l'article original](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_18)

La technologie évolue vite. Ne restez pas derrière.

## #19. Commodité n'est par aider

https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_19

### Gregor Hohpe

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501160.png.jpg)

Ecrire de bonnes API de code, n'est pas chose aidée, et connaître les bonnes pratiques, ne permet pas automatiquement de les appliquer proprement.

Par exemple, sur une APi de 'stratégie', je rencontre souvent des "arguments de commodité" :

- Je ne veux pas que mes consommateurs, fassent deux appels séparés pour faire cette unique chose
- Pourquoi faire une seconde méthode, alors que celle-ci fait déjà presque le travail ? Il suffit de rajouter un simple booléan.
- Regarde c'est très simple: si le second paramètre finit par ".txt", alors la méthode considère que le premier paramètres est un nom de fichier: on n'a pas vraiement besoin de deux méthodes.

Ce genre d'argument, est scuceptible de diminuer la lisibilité du code, et de conduire à des méthodes telles que : 

```
parser.processNodes(text, false);
```

Il n'y a rien de mal à user de commodité, tant qu'elle ne nuit pas au design des API. Les API sont supposées masquer la complexité sous-jascente du programme. Un vocabulaire cohérent et réfléchi permet de rendre le code expressif et compréhensif dans la couche logicielle appelant vos API.



## #20. Déployez vite et souvent

## Chapter 20. Deploy Early and Often

### Steve Berczuk

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501162.png.jpg)

Le processus d'installation/déploiement, est la première chose visible pour l'utilisateur final. Ce dern ier utilise une application déployée. 

Entamez votre projet avec le processus d'installation. Ainsi, vous aurez créé et livré un élément à forte valeur ajoutée pour l'utilisateur final.De plus, vous aurez la possibilité de l'affiner au fil de la vie du projet. Vous devriez tester et remanier ce processus comme vous le faites avec le code.

Le processus d'installation/déploiementest indispensable à la productivité de votre utilkisateur final. Ne le négligez pas.



## #21. Séparez les exception techniques des exception métier

### Dan Bergh Johnsson

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501164.png.jpg)

Au runtime, il y a deux raison pour lesquelles les choses se passent mal

- l'impossibilité d'utiliser l'application pour des raison techiques
- la prévention d'une mauvaise utilisation de l'application pour des raissons métiers

Les langages modernes ont un moyen pour signaler ce genre de problème : lancer une Exception. Seulement, elles sont utilisées indéféremment les deux raisons ci-dessus, ce qui peut être source de confusion.

Mélanger les Exception métier et les Exceptions techniques dans une même hiérachie ajoute de la complexité dans les couches qui les traitent. Bien séparer les responsabilités améliore la clarté, et augmente les chances de traiter les exception techniques dans les couches technies, et les exception métiers, dans les couches clientes.

## #22. Entraînez-vous, volontairement, encore et encore

### Jon Jagger

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501166.png.jpg)

L'entraîment volontaire, ou "Deliberate Practice" en anglais, va au delà de la résolution d'un problème. Il s'agit de la répétition d'un exercice, pour acquérir une expertise sur une compétence. Cela signifie répéter l'exercice, encore et encore, jusqu'à atteindre le nieau de maîtrise satisfaisant.

A quel niveau peut on considérer avoir acquis la maîtrise de l'exercice ? Peter Norvig donne "10 000 heures, c'est le nombre magique". Cela représente environ 20h par semaine, pendant 10 ans.

Mais l'entraînement volontaire va encore au-delà de la simple répétition. Il s'agit de se mettre dans uns situation qui vous tire un tout petit peu plus vers le haut, de chercher à résoudre la problématique, puis d'analyser votre performance pour vous améliorer la fois suivante.

L'entraînement volontaire est une question d'apprentissage. D'un apprentissage qui vous change. D'un apprentissage qui modifie votre comportement et vos habitues. Courage!

## #23. Les idiomes spécifiques du domaine

### Michael Hunger

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501168.png.jpg)

Lorsque vous écoutez une discussion entre experts, vous vous rendrez compte qu'ils utilisent un vocabulaire différent de leur langage de tous les jours. Et ce, quel que soit le domaine d'expertise. C'est ce q'uon appelle des DSL (Domain-Specific Languages) : chaque domaine spécifgique possède son vocabulaire spécifique.

Les DSL peuvent être de deux sortes: les internes et les externes.

- **Les DSL internes**, généralement du sucre syntaxique dans un langague de programmation, permettant de se rapprocher du langage naturel. Ce genre de DSL utilise des pattenrs, comme les Builders, du chainage de méthode et des annotations
- **Les DSL externes**, généralement du texte ou des diagrammes, sont souvent analysés par des outils (parsers, transformers) et convertis en éléments d'un modèle applicatif. Exemple: AndroMDA, Gherkins.

Adaptez votre DSl au public que vous visez. En masquant la complexité technique les DSLs permettent à leurs usagers d'adapter leur système en toute autonomie, sans l'aide de développeurs.

## #24. N'ayez pas peur de casser des choses

## Chapter 24. Don’t Be Afraid to Break Things

### Mike Lewis

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501170.png.jpg)

Dans le monde de l'industrie logicielle, tout le monde a rencontré une application qualifiée, au mieux, de précaire. Sur ce genre d'application, à chaque fois que l'on modifie quelque chose, on est susceptibles de casser une autre focntionnalité, sans lien apparent. Dans ce contexte, chaque fonctionalité est livrée avec le moins de modification possible. C'est l'équivalent de jouer au jenga, mais sur un logiciel.

Une telle aplication est malade, et nécessite un médecin qui amputerait les portions malades pour les soigner. 

Tel un chirurgien, ne craignez pas votre code, et ne vous laissez pas paralyser par la peur du changement. Investissez du temps dans le remaniement du code, car cela apportera des bénéfices sur la durée du projet. Prenez soin de votre application. Soignez-la. Nettoyez-la.

Cett attitude est contagieuse, et inspirera vos collègues. Il se mettrront à leur tour à prendre soin de l'application. Gardez une liste des "mesure d'hygiène" de l'application, que l'équipe  prendra soin sur la durée du projet. Ne cessez jamais de prendre soin de la santé générale de votre application.

## #25. Ne soyez pas laxistes avec vos données de test

### Rod Begbie

![image with no caption](97-things-every-img/httpatomoreillycomsourceoreillyimages501172.png.jpg)

L'histoire du développement possède plusieurs anectotes croustillantes autour du "Personne ne verra ça", qui, subitement, devient visible. Le type de fuite varie, et peut être préjudiciable, pour une personne, une équipe, ou toute l'entreprise. Par exemple :

-  Lors d'une démo, le client clique sur un bouton non-implémenté. Un message lui dit "Ne recommence pas, bâtard !"
- Un développeur maintenant une application legacy, se voit demander de mettre en place une fenêtre de gestion des erreurs. Subitement les utilisateurs se voient afficher des messages "La base de donnée sacrée a été corrompue, Batman!" lorsque quelque chose casse.
- Quelqu'un a confondu les interfaces d'administration  de tests et de prod, et a saisi quelques données "rigolotes" en production. Les utilisateur peuvent désormais acheter le "Conseiller personnel de Bill Gates" pour la modique somme de 1M€

Rappelez-vous du vieil adage :

> Un mensonge peut faire le tour de la terre le temps que la vérité mette ses chaussures. — Mark Twain

Adage, déjà vrai en ces temps, où Twittern Facebook, LinkedIn, n'existaient pas encore.

En bref, dès que vous écrivez du texte dans votre code, qu'il s'agisse de commentaires, de logs ou de données de test, réfléchissez à quoi cela ressemblerait s'il devienait public. 
