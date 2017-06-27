var fs = require("fs");
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');


var CardAdmin = function() {

    this.newCloze = function(cloze, partial, fullText) {

    var newCloze = new ClozeCard(cloze, partial, fullText);

    newCloze.makeCloze(cloze, partial, fullText);

    };

  this.newCard = function(front, back) {

    var newCard = new BasicCard(front, back);

      newCard.makeCard(front, back);

  };

};

module.exports = CardAdmin;
