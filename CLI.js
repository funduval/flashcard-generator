var CardAdmin = require("./CardAdmin");
const inquirer = require('inquirer');
const basic = require('./BasicCard');

// Hold the value whether someone selects a "cloze" or "basic"
var cardType = process.argv[2];

// Either way, they need to provide a "question"
var front = process.argv[3];

// And they will need to provide an "answer"
var back = process.argv[4];



// Create an instance of the CardAdmin. 

var MyAdmin = new CardAdmin(); 

			if (cardType === "cloze") {

				var cloze = back;
				var partial = front;
				var fullText = partial + cloze;
				console.log("Cloze is: " + cloze)

//may have to pass variables			  	
			  	MyAdmin.newCloze(cloze,partial,fullText);
			}

			else {
//may have to pass variables
			
			  	MyAdmin.newCard(front, back);
			}

			





