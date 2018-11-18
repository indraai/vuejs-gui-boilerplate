#!/usr/bin/env node
'use strict'
// the indra design cli
// 1. create a new project for the users
// 2. create a component for the users


const cmd = require('commander');
const path = require('path');
const fs = require('fs');

const {version} = require('./package.json');

cmd.version(version)
  .option('-c, --comp <value>', 'create a new component')
  .parse(process.argv);

if (cmd.comp) {
  const cBlank = path.join(__dirname, 'src', '_blank', 'component');
  const cPath = path.join(__dirname, 'src', 'components');
  // create the component name and the store name for the component
  // component name should have a camel case Indra name
  // while the store component should be all lower case
  const cComp = 'Indra' + cmd.comp.charAt(0).toUpperCase() + cmd.comp.substr(1).toLowerCase();
  const cStore = cmd.comp.toLowerCase();
  if (fs.existsSync(path.join(cPath, cStore))) {
    console.log('that component already exists');
  }
  else {
    console.log('comp: ', cPath, cComp, cStore);
    fs.readdir(cBlank, (err, items) => {
      if (err) console.error(err);
      console.log(items);
    })
    console.log('CREATE A NEW COMPONENT', cmd.comp);
  }
}
