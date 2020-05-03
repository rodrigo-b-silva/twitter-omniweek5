const Tweet = require('../models/Tweet')

module.exports = {
    async store(req, res){
        const id = req.params.id

        let tweet = await Tweet.findById(id);

        tweet.set({ likes: tweet.likes + 1 });
        
        await tweet.save()

        req.io.emit('like', tweet)

        res.json(tweet)
    }
}