class PingPong {
    play(bot, channelID) {
        bot.sendMessage({to: channelID, message: "Pong!"});
    }
}
module.exports = PingPong;