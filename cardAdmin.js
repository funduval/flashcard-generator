var fs = require("fs");
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');


var CardAdmin = function() {

    this.newCloze = function(cloze, partial, fullText) {

    var newCloze = new ClozeCard(cloze, partial, fullText);

    // var question = "\nQuestion: " + newCloze.partial + " ..."

    // var answer =  "\nAnswer: " + newCloze.fullText

    // fs.appendFile("log.txt", logTxt);

    newCloze.makeCloze(cloze, partial, fullText);

    };

  this.newCard = function(front, back) {

    var newCard = new BasicCard(front, back);
    // var logTxt = "\nFront: " + newCard.front + "\nBack: " + newCard.back 

    // fs.appendFile("log.txt", logTxt);

//may have to pass variables
      newCard.makeCard(front, back);

  };

};

module.exports = CardAdmin;
