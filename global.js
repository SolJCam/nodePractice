var readline = require('readline'); //node/es5 syntax
var util = require('util'); //node/es5 syntax
//import readline from 'readline-promise'; must npm-install to use es6 syntax
//import util from 'util'; must npm-install to use es6 syntax

// console.log(__dirname);

// console.log(__filename);

// console.log("HELLO FROM NODE");

var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name?', (name) => {

    //console.log(`My name is ${name}`);
    RL.setPrompt(`${name} how old are you?`);

    RL.prompt();

    RL.on('line', (age)=>{

        if(age<18){

            util.log(`${name.trim()} because you are ${age} years old, you cannot proceed.`);
            RL.close();

        }else{

            util.log(`${name.trim()} it\'s great you are ${age} years old because you can enjoy our services.`);
            RL.close();
        }

    });

})

// console.log(RL);