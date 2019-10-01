class Lights {
    run(bot, channelID, user) {
        let message =
            ">>> ** Lights -> WHAT COULD THIS BE .....** \n \n"
            + "Coming soon \n";

        bot.sendMessage({to: channelID, message: message});
        bot.setPresence({
            game: {
                name: "It's Dark In Here!",
                type: 3
            },
        });
    }
}

module.exports = Lights;