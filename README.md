# base-react-app

This is an opinionated base template of what I think a React app should start its life as.

Objectives:

* Minimalism
* Universal Rendering

Stack:

* React
* Webpack
* Express
* Babel

This stack represents the absolute minimum to run a React Universal application. I originally considered Rollup, but it is incredibly unfriendly to a universal javascript codebase (no version of Node supports import/export modules, but it insists on using its own Babel Preset that doesn't support modules).

Dev Stack:

* ESLint
  * Babel
  * React
  * Import w/Resolver

The stack lints ES2015, React, and also supports import checking, which is a huge convenience that modules brings to Node.
