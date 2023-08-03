Un modèle métier anémique modèle métier anémique est un modèle de domaine logiciel où les objets de domaine contiennent peu ou pas de logique métier.
Les "objets métiers" sont des structures de données et la logique métier est déportée dans d'énormes classes de "service".

* https://en.wikipedia.org/wiki/Anemic_domain_model
* https://martinfowler.com/bliki/AnemicDomainModel.html

Un modèle métier riche (le terme que j'avais choisi n'est peut-être pas judicieux) est un modèle de domaine logiciel où la logique métier est modélisée et porté par les objets du domaine.
Le Domaine devient une sphère de connaissance, d'influence et d'activité.

* https://martinfowler.com/eaaCatalog/domainModel.html
* https://dev.to/guillaume_agile/modele-metier-ou-modele-anemique-comment-les-distinguer-1kij
* https://blog.octo.com/domain-driven-design-des-armes-pour-affronter-la-complexite/
* https://blog.eleven-labs.com/fr/domain-anemia/

## Twitter

> PHELIZOT Yvan @yoda044 (https://twitter.com/yoda044/status/1520345496807747585?s=20&t=ugDreZtuKpINBfBLlgmzmw)
>
> J'ai bien le lift pass pricing kata de @johan_alps. Je pense que ça peut correspondre à ce que tu cherches
> https://github.com/martinsson/Refactoring-Kata-Lift-Pass-Pricing


> Jonathan Laurent @Johjo07 (https://twitter.com/Johjo07/status/1520126957819772929?s=20&t=ugDreZtuKpINBfBLlgmzmw)
>
> On vient justement de publier sur un slack où je suis ce repo github (avec une présentation) de @clem_bouillier
:
> https://github.com/devcrafting/architecture-styles
>
> Je n'ai regardé que les slides en français.
>
> Cela pourrait peut-être t'aider.

> Yoan Thirion @yot88 (https://twitter.com/yot88/status/1519944400020942848?s=20&t=ugDreZtuKpINBfBLlgmzmw)
>
> Hello @fhiegel ce kata là devrait te plaire : https://github.com/katalogs/csharp-katas-log/blob/master/OrderShippingKata/README.md
> Il est dispo dans d’autres langages ici : https://github.com/racingDeveloper/tell-dont-ask-kata

> Yassine Meherzi @yassine_meherzi (https://twitter.com/yassine_meherzi/status/1519953816342433792?s=20&t=ugDreZtuKpINBfBLlgmzmw)
>
> Si j'ai bein compris, vous souhaitez appliquer"Tell Don't Ask" qui est bien expliqué par
@martinfowler
> https://martinfowler.com/bliki/TellDontAsk.html
> et aussi par
> @makagon
>
> http://rubyblog.pro/2016/09/tell-dont-ask-principle ()

> Mohammed Lamzira @mlamzira (https://twitter.com/mlamzira/status/1519960223427055617?s=20&t=ugDreZtuKpINBfBLlgmzmw)
>
> J’ai peut ê un exo, de recrutement à la base, qui soit très compliqué à modeliser de maniere anemique, sinon ça donne un code 💩
>
> https://github.com/gjambet/exo-tournament
> https://github.com/mlamzira/gossips-kata

--- 
- > HadrienMP (https://twitter.com/HadrienMP/status/1519942232685621248?s=20&t=ugDreZtuKpINBfBLlgmzmw)
  >
  > Moi personnellement non. Mais je vois des possibilités. Genre tu casses un invariant métier dans leur code, et tu leur demande de rendre le bug que tu as introduit techniquement impossible (si on ignore les trucs genre introspection).
    - > HadrienMP @HadrienMP
      >
      > Tu peux aussi juste faire des katas en mode **calisthenics** pour qu’iels voit que c’est possible et ce que ça donne. Et sinon j’ai un talk qui explique l’importance de l’encapsulation en prof fonctionnelle que je pourrais te retrouver
    - > Fabien Hiegel @fhiegel
      >
      > Bonne idée les callistenics 🙂
      > Avant ça, j'ai déjà :
      > 1. Primitive Obsession
      > 2. Tell, Don't Ask
      >
      > Si tu as des idées d'exercice sur lesquels les appliquer, je suis preneur.
    - > HadrienMP @HadrienMP
      >
      > Comme ça tout de suite je ne suis pas certain. L’idéal serait un kata où tout est string. Comme ça tu peux bien tout mélanger. Genre RPN mais tu peux t’en sortir avec string et int. C’est dur de montrer ça dans un kata. Tu vois l’intérêt dans des grosses code bases.
    - > Xavier Detant @XDetant
      >
      > J'aime bien le kata bank pour ça perso. Avec un max de règles métiers (genre différents types de comptes qui fonctionnent différemment)
    - > Nicolas Fédou @CoulasFedou
      > Le fruit shop de Bruno a de bonnes règles qui génèrent du legacy aussi.
    - > Nicolas Fédou @CoulasFedou
      >
      > En plus des règles sur les fruits, tu peux ajouter des remises selon les clients pour croiser un peu les prises de décisions
>

> Johan Martinsson @johan_alps
>
>Peut-être bien. Ce code a toute la logique non pas dans le service mais carrément dans le contrôleur 😈
>
> Une près démo se trouve dans ce playlist https://youtube.com/watch?v=1cZ3nTTyN6s&list=PLNfSqeELe2EKSIyY4ngBJ_GlOtJe3gg8d
ce serait plutôt le 3e et 4e qui serait intéressant