var friends = require('../data/friends.js');

module.exports = function(app) {

    // Get all chirps
    app.get("/api/friends", function(req, res) {
        res.json(friends);

    });

    app.post('/api/friends',function(req,res){
		friends.newFriend = req.body;
	})
};