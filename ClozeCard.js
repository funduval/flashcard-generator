const inquirer = require('inquirer');

var CardAdmin = require("./CardAdmin");

const ClozeCard = function newCloze(cloze, partial, fullText) {

    this.cloze = cloze;
    this.partial = partial;
    this.fullText = partial + cloze;

    this.makeCloze = function(cloze, partial, fullText) {
        console.log("\n" + "Clozemaker open!")
        console.log("\n" + cloze + "\n" + partial + "\n" + fullText)

    };

};

module.exports = ClozeCard;
