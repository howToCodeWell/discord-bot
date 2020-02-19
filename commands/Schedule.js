class Schedule {
    run(bot, channelID, user) {
        let message =
          ">>> ** This is the How To Code Well Schedule** \n \n"
        + "**Podcast:** `https://howtocodewell.fm` \n"
        + "Every Friday \n \n"
        + "**Twitch:** `https://twitch.tv/howtocodewell` \n"
        + "Most Tuesdays and Thursday mornings at 07:00 GMT \n"
        + "Most Sundays at 14:30 BST \n";

        bot.sendMessage({to: channelID, message: message});
    }
}
module.exports = Schedule;