class PingPong {
    play(bot, channelID) {
        bot.sendMessage({to: channelID, message: "Pong!"});
        bot.setPresence({
            game: {
                name: "Ping Pong"
            },
        });
    }
}

module.exports = PingPong;