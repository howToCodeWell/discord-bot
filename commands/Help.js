class Help {
    run(bot, channelID) {
        let message =
          ">>> ** Welcome to the How To Code Well Bot ** \n"
        + "```Commands: \n"
        + "--help : Show this help usage \n"
        + "--roll : Roll a dice \n"
        + "--ping : Play ping pong \n"
        + "--lights : Coming Soon \n"
        + "--schedule : Get the schedule \n \n"
        + "Want to improve this bot? \n "
        + "Send a PR to https://github.com/howToCodeWell/discord-bot \n "

        + "```\n";

        bot.sendMessage({to: channelID, message: message});
    }
}
module.exports = Help;