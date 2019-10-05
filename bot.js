// const prefix = "--";
//
const auth = require("./auth.json");
// const Discord = require('discord.js');
// const PingPong = require("./commands/PingPong");
// const DiceRoll = require("./commands/DiceRoll");
// const Help = require("./commands/Help");
// const Schedule = require("./commands/Schedule");
// const Lights = require("./commands/Lights");
const Question = require("./commands/Question");
// const client = new Discord.Client();
//
// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });
//
// client.on("message", msg => {
//
//         if ('dm' === msg.channel.type) {
//             msg.reply('test')
//             // new Question().ask(msg);
//         } else {
//             // if (msg.content.startsWith(prefix)) {
//             //     let command = message.slice(prefix.length).split(" ");
//             //     switch (command[0]) {
//             //         case "ping":
//             //             new PingPong().play(msg);
//             //             break;
//             //         case "roll":
//             //             new DiceRoll().play(msg);
//             //             break;
//             //         case "help":
//             //             new Help().run(msg);
//             //             break;
//             //         case "schedule":
//             //             new Schedule().run(msg);
//             //             break;
//             //         case "lights":
//             //             new Lights().run(msg);
//             //             break;
//             //     }
//             // }
//         }
//     }
// );
//
// client.login(auth.token);

const {YoutubeDataAPI} = require("youtube-v3-api");
const youTubeAPI = new YoutubeDataAPI(auth.youtube_token);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if (msg.channel.type === 'dm' && msg.content.startsWith('search: ')) {
        let term = msg.content.split('search: ').pop();
        youTubeAPI.searchAll("Node Js", 25).then((data) => {
            console.log(data);
        }, (err) => {
            console.error(err);
        });

        return msg.author.send('Searching for videos on "' + term + '" .... Please wait')
    }
});
client.login(auth.token);