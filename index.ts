const chalkAnimation = require("chalk-animation");
const figlet = require("figlet");
const os = require("os");
let displayName = process.argv[2] || os.userInfo().username;
let message = `Happy Birthday ${displayName}`;
let formattedMessage = message.replace(/ /g, "   ");
figlet(formattedMessage, function (err, data) {
  if (err) {
    console.log("error ...");
    console.dir(err);
    return;
  }
  chalkAnimation.rainbow(data).start();
});
