#!/usr/bin/env node
const Sonnet = require('./lib/Sonnet');
const render = require('./lib/Render');
const pkg = require('./package.json');

function sonnectCLI (){
    const count = Sonnet.getAmount();
    const arg = process.argv[2]
    switch (arg) {
        case "-r" || "--random":
            const magicNum = Math.floor(Math.random() * Math.floor(count));
            const result = Sonnet.getSingle(magicNum);
            console.log(render.lineUp(result));
            break;
        case "-v" || "--version":
            console.log(`Current version is ${pkg.version}`);
            break;
        case "-h" || "--help": 
            const guide = `
            Have a break with William Shakespeare's sonnet in the terminal.

            Usage

            $ sonnet <option>

            Options

              --random, -r      Display a random piece
              --version, -v     Display installed version
              --help, -h        Display help tips

            `;
            console.log(guide);
            break;
        default:
            break;
    }
}

sonnectCLI();