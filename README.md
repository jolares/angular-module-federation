# Angular Module Federation

## [About Case Studies](CASE_STUDIES.md)

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

## References

* [Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)
* [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* [TypeScript Lang](https://www.typescriptlang.org/)

* [The Microfrontend Revolution Series: Module Federation in Webpack 5](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
* [Angular Elements Series](https://www.angulararchitects.io/aktuelles/angular-elements-part-i/)