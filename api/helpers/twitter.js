const axios = require('axios');
const url = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
    get(searchQuery, count) {
        return axios.get(url, {
            params: {
                q: searchQuery,
                count: count
            },
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
    }
}

module.exports = Twitter