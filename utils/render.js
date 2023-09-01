class render{
    renderController(name){
        return `
    // const model = require('../models/{modelName}')

    class ${name}Controller{

    }
    module.exports = new ${name}Controller();
        `
    }

    renderModel(name){
        return `
    const mongoose = require('mongoose');

    const ${name} = mongoose.model('${name}',{
        //schema
    })
        
    module.exports = ${name};
        `
    }
}

module.exports = new render();