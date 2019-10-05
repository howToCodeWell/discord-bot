class Question {
    ask(msg) {
        console.log('Direct message');
        if(msg.content !== 'search:') {
            msg.reply("Sorry I don't understand the question. Please start you Dm with `search: <SEARCH_TERM>`")
        }

    }
}
module.exports = Question;