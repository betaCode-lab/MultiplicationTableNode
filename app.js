const {saveFile} = require('./helpers/multiplicate.js');
const argv = require('./config/yargs.js');
const colors = require('colors');
    
console.clear();

saveFile(argv.b, argv.s, argv.l)
    .then(filename => console.log(`File ${filename} has been created`.green))
    .catch(error => {
        const { code } = error;

        if (code === 'EPERM') {
            console.log('You don\´t have writing permissions'.red);
        } else {
            console.log('Something wents wrong'.red);
        }
    });