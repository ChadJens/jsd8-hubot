// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

module.exports = function(bot) {
  bot.hear(/it's/i, function(msg) {
    if (Math.random() > 0.5) {
      return msg.reply("Pardon, but you'd want to use *its* instead of *it's*. Can you figure out why?");
    }
  });
  bot.hear(/there/i, function(msg) {
    let rand = Math.random();
    if (rand < 0.33) {
      return msg.reply("Sorry to interrupt, but for groups you should use *they're*. Keep at it :)");
    }
    else if (rand < 0.66) {
      return msg.reply("Whoops! There refers to place or position, while *their* refers to ownership. You'll get it!");
    } 
  });
  bot.respond(/(.*)/i, function(msg) {
    return msg.reply("Sorry, no time to chat. Working."); 
  });
  bot.hear(/Chad/i, function(msg) {
    return msg.send("Praise be to the Creator!"); 
  });
}

/* What I want to learn to do
- How can I have a counter that increments every time the bot is called?
- How can I get this counter to de-increment over time?
- How could I find out if two commas were used within a set number of characters (regEx?)




/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/