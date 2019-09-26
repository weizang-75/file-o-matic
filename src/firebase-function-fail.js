"use strict";
/*
    sketch2jsx
    errr, yeh. just run this, really. It should **just work**
*/

const fs = require("fs");
const colors = require("colors");
const {config} = require('./config');

function exitGracefully (error){
    console.log ('\n[ERROR] '.red + error.cyan +'\n');
    console.log ('___________________\nsketch2jsx failed\n===================\n'.red);
}
function checkPathExists (path) {
    if (fs.existsSync(path)) {
        return true;
    }
    return false;
}

function sketch2jsx (config) {
    console.log ('==================\n'.rainbow+'sketch2jsx started'.white+'\n__________________'.rainbow);
    
    console.log ('\nChecking whether "'.gray+ config.srcDir.yellow +'" directory exists'.gray);
    if (!checkPathExists(config.srcDir)){ 
        return exitGracefully('Could not find source directory.\nCheck srcDir in config.js')
    }
    console.log ('It does. move on.'.green);
    return console.log ('___________________\n'.rainbow+'sketch2jsx complete'.white+'\n===================\n\n'.rainbow);
    
}

sketch2jsx(config);
