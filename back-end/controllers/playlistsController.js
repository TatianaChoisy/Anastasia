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

exports.displayPlaylistsFromUser = function(req,res) {
    var request = req.params.userID;
    console.log(request);
    playlists.getPlaylistsFromUser(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(data);
            res.json(data);
        }
    })
}