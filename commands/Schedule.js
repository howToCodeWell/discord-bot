class Schedule {
    run(bot, channelID, user) {
        let message =
          ">>> ** This is the How To Code Well Schedule** \n \n"
        + "**Podcast:** `https://howtocodewell.fm` \n"
        + "Every Friday \n \n"
        + "**Twitch:** `https://twitch.tv/howtocodewell` \n"
        + "Most Tuesdays, Wednesdays and Thursday mornings at 07:30 BST \n"
        + "Most Sundays at 14:30 BST \n";

        bot.sendMessage({to: channelID, message: message});
        bot.setPresence({
            game: {
                name: "Soon!",
                url: "https://twitch.tv/howtocodewell",
                type: 1
            },
        });
    }
}
module.exports = Schedule;