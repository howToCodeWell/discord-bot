class Schedule {
    run(msg) {
        let message =
          ">>> ** This is the How To Code Well Schedule** \n \n"
        + "**Podcast:** `https://howtocodewell.fm` \n"
        + "Every Friday \n \n"
        + "**Twitch:** `https://twitch.tv/howtocodewell` \n"
        + "Most Tuesdays, Wednesdays and Thursday mornings at 07:30 BST \n"
        + "Most Sundays at 14:30 BST \n";

        msg.reply(message);
    }
}
module.exports = Schedule;