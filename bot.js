const auth = require("./auth.json");
const {YoutubeDataAPI} = require("youtube-v3-api");
const Discord = require('discord.js');
const youTubeAPI = new YoutubeDataAPI(auth.tokens.youtube_token);
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
client.login(auth.tokens.discord);
