# Module Federation Case Studies

Module Federation provides valuable use cases when it comes to dependency sharing & management, building and serving micro-frontend applications that work in isolation and in conjunction, routing between micro-frontends, and other related build + serve optimizations. The following is a list of experiment-based case-studies performed in this project.

## Dependency Management

Module Federation allows us to share libraries amogst micro-frontend applications that can be build and served in isolation, dodging the need to load the same library several times or having to implement an adhoc solution for this problem.


### Case Study 1: Version-Mismatch-Hell

The case represents an instance in which a micro-frontend project, `mf2`, requires a different version of @angular/material from the one specified in package.json used by other host and remote micro-frontend applications (i.e. shell and mf1). In practice, this may
occur as a result of a company-wide dependency upgrades, and the lack of capacity from a project like `mf2` to meet the new version requirements for the time being, regardless of what the underlying reason might be.

By default, module Module Federation defaults to using the highest available version for any given library. When
package.json specifies a newer version and a micro-frontend requires and older version, it will use the newer version provided and jsut log a warning message;However, if such new version
contains breaking changes, `mf2` will fail. Module Federation allows us to specify a configuration as the one in the code snippet below to watch for depdenency requirements, and if the right version is not provided (as specified in package.json or from any other micro-frontend loaded earlier), it will provide its own at
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

## TODOs


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
