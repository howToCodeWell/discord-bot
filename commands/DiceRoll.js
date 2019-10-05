class DiceRoll {
    play(msg) {
        let max = Math.floor(Math.random() * 7) || 100;
        let min = 1;
        let result = Math.floor(Math.random()*(max-min+1)+min);
        msg.sendMessage("From "+min+" to "+max+", you rolled: **"+result+"**");

    }
}
module.exports = DiceRoll;