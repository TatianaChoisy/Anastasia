var playlists = require('../models/playlistsModel');


exports.displayAllPlaylists = function (req, res) {
playlists.getAllPlaylists(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
})
    
// playlists.adds(function (err, data) {
//     if (err) {
//         res.send(err);
//     }
//     else {
//         res.json(data);
//     }
// })


};