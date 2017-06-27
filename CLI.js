var CardAdmin = require("./CardAdmin");
const inquirer = require('inquirer');
const basic = require('./BasicCard');
var cardType;
var input;
  // Here we give the user a list to choose from.
inquirer.prompt([{
    type: "list",
    message: "What would you like to do?\n",
    choices: ["Make a Basic Question and Answer Card (front/back)?", "Make Card with Cloze Deletion (fill in the blank)"],
    name: "choices"

  }]).then(function (answers) { 

  	// Hold the value whether someone selects a "cloze" or "basic"
	var MyAdmin = new CardAdmin(); 

    if (answers.choices === "Make a Basic Question and Answer Card (front/back)?") {

    	input = "basic"

    	console.log("the Card Type you chose is: " + input);
    	//put new set of prompts here
    	inquirer.prompt([
    	{
    type: "input",
    message: "What would you like the front of the card to say\n",
    name: "front"
  },
    	{
    type: "input",
    message: "What would you like the back of the card to say\n",
    name: "back"
  }

  ]).then(function (answers) {
    var front = answers.front
    var back = answers.back

  	MyAdmin.newMaker(front, back);

  });

};

   if (answers.choices === "Make Card with Cloze Deletion (fill in the blank)"){
  
   		input = "cloze"

   		console.log("the Card Type you chose is: " + input);

	     //put new set of prompts here
	     inquirer.prompt([
     
   { 

   	type: "input",
    message: "What would you like the partial sentence to be?\n",
    choices: ["Make a Basic Question and Answer Card (front/back)?", "Make Card with Cloze Deletion (fill in the blank)"],
    name: "partial"

  },

   {
    type: "input",
    message: "What would you like the full answer to be?\n",
    choices: ["Make a Basic Question and Answer Card (front/back)?", "Make Card with Cloze Deletion (fill in the blank)"],
    name: "fullText"
  },

  {
    type: "input",
    message: "What would you like the deleted word to be?\n",
    choices: ["Make a Basic Question and Answer Card (front/back)?", "Make Card with Cloze Deletion (fill in the blank)"],
    name: "cloze"
  }

  ]).then(function (answers) {
     var cloze = answers.cloze;
     var partial = answers.partial;
     var fullText = answers.fullText;
     
 	 MyAdmin.newClozer(cloze,partial,fullText);

  });

};

});







			





