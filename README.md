# Préface

Le projet Annotator est un projet Universitaire réalisé dans le cadre du cours "Développement des systèmes informatiques" à l'Université du Québec en Outaouais (UQO).
Trois groupes travaillent en parallèle sur le même projet, le titre du dépôt "Annotator1" fait référence au groupe de travail numéro 1 qui travaille sur ce projet.

# Annotator

Le logiciel Annotator est un logiciel qui sera disponible sur internet à partir d'un navigateur Web. Il permet d'annoter des textes et des groupements de textes (Corpus).

# Plus d'informations

Pour plus d'informations, vous pouvez consulter le wiki du projet qui contient un extrait du cahier des charges et permet de mieu comprendre l'enjeu du projet.

#  Structure du projet
```
Annotator1/                       -- root du projet avec fichiers docs
├── e2e/                          -- Permet de stocker les tests de type end-to-end.
└── src/                          -- fichiers sources propre à l'excécution de l'application
    ├── app/                      -- la structure de nos modules ainsi que les composantes de base
    │	├── directives/           --
    │	├── guard/                -- reimportation de la session
    │	├── models/               -- 
    │	├── components/           --  
    │       ├── Annotation        -- fonctionnalité de l'annotation
    │       ├── login             --
    │       ├── register          --
    │       ├── project           -- fonctionnalité de la gestion de projet
    │       ├── page-not-found    --
    │       ├── home              --
    │       └── admin             --
    │	├── firebase/             -- serveur firebase
    │	├── services/             --
    │	└── shared/               --
    │       ├── component         --  contient l'en-tête et le pied de page
    │           ├── headers       --
    │           └── footer        --
    │       └──modules            -- inscrit les composants partager aux utilisateurs.
    ├── assets/                   -- fichiers ressources
    ├── test/                     -- fichiers des tests
    └── environments/             -- description des environnements (prod, test, dev)
```

# Annotateur

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
