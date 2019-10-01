class Lights {
    run(bot, channelID, user) {
        let message =
          ">>> ** Lights -> WHAT COULD THIS BE .....** \n \n"
        + "Coming soon \n"

        bot.sendMessage({to: channelID, message: message});
    }
}
module.exports = Lights;