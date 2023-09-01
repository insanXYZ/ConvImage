const yargs = require('yargs');
const fs = require('fs');

// Create 'app' directory if not exists
if (!fs.existsSync('app')) {
  fs.mkdirSync('app');
}

// Create 'controllers', 'models', and 'views' directories if not exists
['controllers', 'models', 'views'].forEach((dir) => {
  if (!fs.existsSync(`app/${dir}`)) {
    fs.mkdirSync(`app/${dir}`);
  }
});

const {renderController , renderModel} = require('./utils/render');


// Command for creating controller
yargs.command({
  command: 'make:controller <name>',
  describe: 'Create a controller',
  handler: (argv) => {
    const controllerName = argv.name;
    fs.writeFileSync(`app/controllers/${controllerName}Controller.js`,renderController(controllerName));
    console.log(`Controller ${controllerName}Controller.js created.`);
  }
});

// Command for creating model
yargs.command({
  command: 'make:model <name>',
  describe: 'Create a model',
  handler: (argv) => {
    const modelName = argv.name;
    fs.writeFileSync(`app/models/${modelName}.js`, renderModel(modelName));
    console.log(`Model ${modelName}.js created.`);
  }
});

// Parse the arguments
yargs.parse();
