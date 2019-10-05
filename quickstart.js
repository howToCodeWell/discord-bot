API = require('./youTube/YouTubeAPI');
var {google} = require('googleapis');

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function getChannel(auth) {
    var service = google.youtube('v3');
    service.channels.list({
        auth: auth,
        part: 'snippet,contentDetails,statistics',
        forUsername: 'HowToCodeWell'
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var channels = response.data.items;
        if (channels.length == 0) {
            console.log('No channel found.');
        } else {
            console.log('This channel\'s  ID: %s title is \'%s\', and ' +
                'it has %s views.',
                channels[0].id,
                channels[0].snippet.title,
                channels[0].statistics.viewCount);
        }
    });
}

/**
 * Search videos
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function searchPlaylists(auth) {
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

        return playlists;

    })
        .then(function (data) {

        });
}

// let query = 'Docker';
let playlists = API.makeCall(searchPlaylists);
console.log(playlists);