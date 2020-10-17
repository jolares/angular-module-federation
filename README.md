# Angular Module Federation

## [About Case Studies](CASE_STUDIES.md))

## Getting Started

### 1 Installing Project Dependencies

* To install node packages for the projects and schematics aplication, run
  `npm run setup:dev:all`

  > **Note**: you **must** use **yarn** during the beta phase of angular cli 11 because it allows for overriding dependencies and force the cli to use Webpack 5.


### 2 Building & Serving All Federation Projects

* To build all micro-frontend projects, run `npm run build:all`
* To serve all micro-frontend projects using the angular dev-server, run
  `npm run start:all`

> Note: To build and serve all micro-frontend projects's production bundles, run:<br>
>`npm run start:prod:all`


### Building & Serve Micro-Frontend(s) in Isolation

* To build a specific micro-frontend app, including the Shell App, run a command using this notation:
  `npm run build:${project-name}`
  * Examples:
    * To build the shell app, run `npm run build:shell`
    * To build micro-frontend-1, run `npm run build:mf1`
    * ...

* To serve a specific micro-frontend app using the angular dev-server, use the following notation:
  `npm run serve:${project-name}`
  * Examples:
    * To build the shell app, run `npm run serve:shell`
    * To build micro-frontend-1 (remote 1), run `npm run serve:mf1`
    * ...

> **Note:** when serving any micro-frontend(s) along the shell application, always make sure all micro-frontend(s) are served before `shell` is loaded to the browser.


## 3 Project Scaffolding

Lets first get familiar with the federation's folder structure:

```
angular-module-federation/
  |- /projects
  |  '- shell                        // Shell MF App (Host)
  |  '- webpack.shell.config.js
  |  '- mf1
  |  '   '- webpack.mf1.config.js
  |  '- mf2
  |  '   '- webpack.mf2.config.js
  |  '- mf{n}                        // Micro-frontend Apps (Remotes)
  |
```

## Adding New Micro-Frontend Project

### Schematics

* To create a new [remote] micro-frontend, run:
  `schematics schematics:project --name={PROJECT_NAME}`


## About

## Dependency Management

Module Federation allows us to share libraries amogst micro-frontend applications that can be build and served in isolation, dodging the need to load the same library several times or having to implement an adhoc solution for this problem.


### Case Study 1: MF2 Requires an Earlier Version of Angular Material

This case study describes an instance in which a micro-frontend project, `mf2`, requires a different version of @angular/material
from the one specified in package.json and used by other host and remote applications (i.e. shell and mf1). In industry, this may
happen as a result of a company-wide dependency upgrade, and lack of capacity from `mf2` to meet such requirement at the time being, for whatever underlyin reason.

By default, module federation defaults to loading the highest available version, and logs a warning message. However, if such version
contains breaking changes, `mf2` will fail. Module Federation allows us to specify a configuration as follows to specify dependency
requirements, and if not provided as specified in package.json or other earlier-loaded micro-frontends, it will provide its own at
a working version.

```
 // mf2's webpack.config.js
  ...
  shared: [
    ...,
    "@angular/material": {
      // optionally, this enables failure detection at build time, specifying that mf2 requires a strictly compatible version.
      strictVersion: true,
      // optionally, this specifies the working version range.
      requiredVersion: ">=1.1.0 <3.0.0" //
    }
  ]
```


### TODO 2: Shared Multibrowser Support Setup & Theming

Can share
Can have adhoc-alone config


### TODO 3: Navigation

Has standalone routing
Has shared routing
Has non-router navigation

### TODO 4: Externals

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 5: Dockerize

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 6: Production Server

Serves onlu needed dependencies (skip the ones host has)
Serves all depencies when host does not have them

### TODO 7: NgRx Store

MF1 has standalone store
MF1 and Shell share Store

### TODO 7: Setup Unit & E2E testing infrastructure

has flexibility to use jest, karma, and both
add component and class tests included in component schematics

### TODO 8: Setup Internationalization

All microfrontends have i18n and include schematics

### TODO 9: Projects can be configured as CustomElements


## References

1. [The Microfrontend Revolution: Module Federation in Webpack 5](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
2. [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
3. [Webpack](https://webpack.js.org/)
4. [TypeScript Lang](https://www.typescriptlang.org/)
5. TODO: add new angular-arkitects resources.
