const fs = require('fs');
const _resource = './sonnet.json';
class Sonnet {
    get() {
        let parsedContent = {}
        const content = fs.readFileSync(_resource, 'utf8');
        parsedContent = JSON.parse(content);
        return parsedContent;
    }

    getArray(){
        const sonnets = this.get();
        const array = Object.keys(sonnets)
            .map((key) => {
                return sonnets[key]
            })
            return array 
    }

    getSingle(id){
        const sonnets = this.get();
        const theSonnet = this.getArray()
        .filter(sonnet => sonnet._id === id )
        return theSonnet[0];
    }

    getAmount(){
        const sonnets = this.get();
        return this.getArray().length;
    }
}
    

module.exports = new Sonnet();