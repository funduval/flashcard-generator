const inquirer = require('inquirer');

var CardAdmin = require("./CardAdmin");

const BasicCard = function newCard(front,back){

this.front = front;
this.back = back;
this.makeCard = function(){

			console.log('BasicCard.makeCard is working')
			
		};
		console.log("newCard works!")

};

module.exports = BasicCard;