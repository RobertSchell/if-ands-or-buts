const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234

let enterCode = Number(prompt("Please enter pin code: "));

if (enterCode === 1234){
    console.log("Success! Lockbox opened!")
} else if (enterCode !== 1234) {
    console.log("Failure! Failed to open lockbox!")
}