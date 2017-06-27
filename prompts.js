var inquirer = require('inquirer');
const UserPrompts = function() {

  // Here we give the user a list to choose from.
  	inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    choices: ["Make a Basic Question and Answer Card (front/back)?", "Make Card with Cloze Deletion (fill in the blank)", "Play All of My Flashcards"],
    name: "choices"

  }]).then(function (answers) { 

    if (answers.choices === "Make a Basic Question and Answer Card (front/back)?") {
    	var input = "basic"
    	console.log("Building your basic card...");
   };

   if (answers.choices === "Make Card with Cloze Deletion (fill in the blank)"){
   		var input = "cloze"
    	console.log("Building your fill-in-the-blank question...");

   };

   if (answers.choices === "Playback All of My Flashcards"){
    	var input = "playback"
    	console.log("Time for a Quiz!");
    };
   
else {

	console.log("Oops! Something went wrong building the card.")
};

};
});
};


  // module.exports = UserPrompts;