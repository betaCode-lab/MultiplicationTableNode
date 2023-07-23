const colors = require('colors');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'.yellow
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show table in console'.yellow
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Table dimention'
    })
    .check((argv, options) => {
        if (isNaN( argv.b )) {
            throw 'Base must be a number'.red;
        }

        if (isNaN( argv.l )) {
            throw 'Limit must be a number'.red
        }

        return true;
    })
    .argv;

module.exports = argv;