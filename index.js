"use strict";
var chalkAnimation = require("chalk-animation");
var figlet = require("figlet");
var os = require("os");
var displayName = process.argv[2] || os.userInfo().username;
var message = "Happy Birthday " + displayName;
var formattedMessage = message.replace(/ /g, "   ");
figlet(formattedMessage, function (err, data) {
    if (err) {
        console.log("error ...");
        console.dir(err);
        return;
    }
    chalkAnimation.rainbow(data).start();
});
