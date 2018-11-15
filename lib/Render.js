const { blue } = require('chalk');

class Render{
    lineUp(sonnet={}){
        return `\n${sonnet.lines.map(line => blue(line)).join('\n')} 
            \n\u{1F343}  ${sonnet.title}\n`;
    }
}

module.exports = new Render();