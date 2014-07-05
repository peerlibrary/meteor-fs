fs smart package
================

Meteor smart package for [fs](http://nodejs.org/api/fs.html) node.js module. It makes sure that all blocking `*Sync`
functions do not really block the whole process but are [fibers](https://github.com/laverdet/node-fibers)-enabled
synchronous ([blocking](https://github.com/peerlibrary/meteor-blocking)) functions.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `fs` object into the global scope.

Server side only.

Installation
------------

```
mrt add fs
```
