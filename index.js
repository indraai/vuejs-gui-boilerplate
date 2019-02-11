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
  const comp = {
    name: 'Indra' + cmd.comp.charAt(0).toUpperCase() + cmd.comp.substr(1).toLowerCase(),
    store: cmd.comp.toLowerCase(),
    dir: path.join(cPath, cmd.comp.toLowerCase()),
  }
  if (fs.existsSync(path.join(comp.dir, comp.name))) {
    console.log('That component already exists.');
  }
  else {

    console.log('Name: ', comp.name);
    console.log('Store: ', comp.store);
    console.log('Path: ', comp.dir);

    // first let's create out new directory once we have found that one does not exist already
    fs.mkdirSync(comp.dir)

    // now we are looping through the files let's read them and change any values and write them to their new folder.
    fs.readdir(cBlank, (err, items) => {
      if (err) console.error(err);
      items.forEach(item => {
        const itemName = item === 'test.js' ? 'index.test.js' : item;
        const blankPath = path.join(cBlank, item);
        const itemPath = path.join(comp.dir, itemName);
        const itemContent = fs.readFileSync(blankPath, 'utf8')
                        .replace(/:component:/g, comp.name)
                        .replace(/:store:/g, comp.store);
        fs.writeFileSync(itemPath, itemContent)
        console.log('File: ', itemPath);
      });
      console.log(`${comp.name} has been created`);
    });
  }
}
