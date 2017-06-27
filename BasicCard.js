const inquirer = require('inquirer');

var CardAdmin = require("./CardAdmin");

const BasicCard = function newCard(front, back) {

    this.front = front;
    this.back = back;
    this.makeCard = function(front, back) {
        console.log("\n" + "Basic Cardmaker open!")
        console.log("\nThe front of the card is: " + front + "\n" + "\nThe back of the card is: " + back);

    };

};

module.exports = BasicCard;
