const prefix = "--";

const auth = require("./auth.json");
const Discord = require("discord.io");
const PingPong = require("./commands/PingPong");
const DiceRoll = require("./commands/DiceRoll");
const Help = require("./commands/Help");
const Schedule = require("./commands/Schedule");
const Lights = require("./commands/Lights");

const bot = new Discord.Client({ // Load bot
    token: auth.token,
    autorun: true
})


const stdin = process.stdin; // Use the terminal to run JS code
stdin.on("data", function (input) {
    input = input.toString();
    try { // Attempt to run input
        let output = eval(input);
        console.log(output);
    } catch (e) { // Failed
        console.log("Error in eval.\n" + e.stack);
    }
});

bot.on("ready", function () { // When the bot comes online...
    console.info("I'm online!");
});

bot.on("warn", function (e) { // When something is not right
    console.error(e);
});

bot.on("message", function (user, userID, channelID, message, event) { // Message detected
    if (message.startsWith(prefix)) { // Message starts with prefix
        let command = message.slice(prefix.length).split(" "); // Split message into words
        switch (command[0]) { // Execute code depending on first word
            case "ping":
                new PingPong().play(bot, channelID);
                break;
            case "roll":
                new DiceRoll().play(bot, channelID, command);
                break;
            case "help":
                new Help().run(bot, channelID);
                break;
            case "schedule":
                new Schedule().run(bot, channelID, user);
                break;
            case "lights":
                new Lights().run(bot, channelID);
                break;
        }
    }
});

bot.on("disconnect", function () {
    bot.connect();
});