const fs = require('fs');

module.exports = {
    writeFile: (filename, data,) => 
    
    fs.writeFile(filename, data, (err) => {
        if (err){
            console.log(err);
            return;
        }
        console.log('Successfully created README.md file');
    }),
};