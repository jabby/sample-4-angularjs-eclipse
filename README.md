sample-4-angularjs-eclipse
==========================

##Install project

``` bash
npm install
bower install
```

##Run project
``` bash
grunt serve
``` 

Open the url [http://localhost:9000/](http://localhost:9000/)

## Idea for using bower in angularjs-eclipse

Bower is a package manager for JS project.
My idea is to use the bower.json and .bowerrc project files to know which scripts will be parse.

### .bowerrc

Include informations about scripts location.

In this project, the root folder of depencies is : bower_components

``` javascript
{
  "directory": "bower_components"
}
``` 

### bower.json

This file contains informations about dependencies to be parse and folders to find them. This informations are in the key "dependencies".

Example : 

``` javascript
{
  "name": "sample4-angularjs-eclipse",
  "version": "0.0.0",
  "dependencies": {
    "jquery": "2.1.1",
    "angular": "1.3.0",
    "momentjs": "2.8.3"
  }
}
```

With the previous example, you can know that there are 3 dependencies. Each are store in the following folders : 
*   bower_components/jquery
*   bower_components/angular
*   bower_components/momentjs

Notice that bower_components is in fact the information store in the .bowerrc file.

### How to know which file is needed ?

In each folder above, there is a new bower.json file. 
When you open this file you will found something like this : 

``` javascript
{
  "name": "moment",
  "version": "2.8.3",
  "main": "moment.js",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests",
    "tasks",
    "component.json",
    "composer.json",
    "CONTRIBUTING.md",
    "ender.js",
    "Gruntfile.js",
    "package.js",
    "package.json"
  ]
}
```

For each dependcy, files to be parse are indicates in the key "main". So for momentjs dependency, we need to parse file store in bower_components/momentjs/moment.js

By convention, these files are not minified.

You can found more informations at [https://github.com/bower/bower.json-spec](https://github.com/bower/bower.json-spec) 


 
