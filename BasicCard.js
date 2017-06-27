const inquirer = require('inquirer');

var CardAdmin = require("./CardAdmin");

const BasicCard = function newCard(front,back){

this.front = front;
this.back = back;
this.makeCard = function(front, back){

			console.log(front + "\n" + back);
			
		};	

};

module.exports = BasicCard;