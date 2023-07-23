const fs = require('fs');
const colors = require('colors');

const saveFile = async (base = 0, show = false, limit = 10) => {
    try {
        let output = '';
        let colourOutput = '';
    
        for (let i = 1; i <= limit; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
            colourOutput += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.yellow(base * i)}\n`;
        }
    
        if (show) {
            console.log('==================='.yellow);
            console.log(`    Table of ${base}   `);
            console.log('==================='.yellow);
            console.log(colourOutput);
        }
    
        const filename = `table-${base}.txt`;
        fs.writeFileSync(`tables/${filename}`, output);
        return filename;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveFile
}