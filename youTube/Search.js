API = require('./youTube/YouTubeAPI');
var {google} = require('googleapis');

/**
 * Search playlists
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function playlists(auth) {
    var service = google.youtube('v3');
    service.search.list({
        auth: auth,
        part: 'id,snippet',
        channelId: 'UCjFs9wBGz4HlEJGUB6jzUmw ',
        q: 'php',
        type: 'playlist'
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        let playlists = [];

        let results = response.data.items;
        let i = 0;
        for(i = 0; i < results.length; i ++) {
            let record = results[i];
            let item = {
                'title': record.snippet.title,
                'url': 'https://youtube.com/playlist?list=' + record.id.playlistId
            };
            playlists.push(item);
        }
    }).resolve(playlists);
}

let query = 'Docker';
let playlists = API.makeCall(searchPlaylists(query));
console.log(playlists);

//..
let search = YouTubeAPI;
results = search.playlists(search_term);

