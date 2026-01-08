const fs = require("fs");

// ASYNC AND SYNC READ
fs.readFile('./server.js', (err, data) => {
    if (err) {
        console.log("Error!");
    } else {
        console.log('first:', data.toString('utf8'));
    }
});

const sync = fs.readFileSync('./script2.js');
console.log('second:', sync.toString('utf8'));

// APPEND
fs.appendFile('./script2.js', 'Das ist fantastich!', (err) => {
    if (err) {
        console.log("Achtung!");
    }
});

// WRITE
fs.writeFile('bye.txt', 'Sad to see you go away.', err => {
    if (err) {
        console.log("Error!")
    }
})

// DELETE
fs.unlink('./scrssssssipt2.js', err => {
    if (err) {
        console.log("Error!");
    }
    
    console.log("Get away!")
});