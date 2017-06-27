var fs = require("fs");
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var CardAdmin = function() {

    this.newClozer = function(cloze, partial, fullText) {

        var newClozeInstance = new ClozeCard(cloze, partial, fullText);

        newClozeInstance.makeCloze(cloze, partial, fullText);

    };

    this.newMaker = function(front, back) {

        var newBasicInstance = new BasicCard(front, back);

        newBasicInstance.makeCard(front, back);

    };

};

module.exports = CardAdmin;
