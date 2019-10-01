class DiceRoll {
    play(bot, channelID, command) {
        let max = parseInt(command[1]) || 100;
        let min = 1;
        let result = Math.floor(Math.random()*(max-min+1)+min);
        bot.sendMessage({to: channelID, message: "From "+min+" to "+max+", you rolled: **"+result+"**"});
        bot.setPresence({
            game: {
                name: "Dice"
            },
        });

    }
}
module.exports = DiceRoll;