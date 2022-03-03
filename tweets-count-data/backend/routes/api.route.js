// Get User objects by username, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start

const needle = require('needle');
const router = require('express').Router()

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/by?usernames="



router.get('/search', async (req, res, next) => {
    try{

        const params = {
            usernames: req.query.username, // Edit usernames to look up
            "user.fields": "id,created_at,name,verified,profile_image_url,url,public_metrics", // Edit optional query parameters here
        }

    const users = await needle("get", endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAC3QZQEAAAAA88ctxA3JsB8rxOoW3L5G82%2BuQxg%3Dx0MflJo1ECEPx7LlpwXU1b5shhwtddpsgz4gHMqtoGptj2nG15`
        }
    })
    
      res.send(users.body)
} catch (error) {
    next (error)
}
  })

  router.get('/search/tweets', async (req, res, next) => {
    const userId = req.query.id;
    const url = `https://api.twitter.com/2/users/${userId}/tweets`;
    
    // The code below sets the bearer token from your environment variables
    // To set environment variables on macOS or Linux, run the export command below from the terminal:
    // export BEARER_TOKEN='YOUR-TOKEN'
    const bearerToken = process.env.BEARER_TOKEN;
    
    const getUserTweets = async () => {
        let userTweets = [];
    
        // we request the author_id expansion so that we can print out the user name later
        let params = {
            "max_results": 100,
            "tweet.fields": "created_at",
            "expansions": "author_id",
            "exclude": "retweets"
        }
    
        const options = {
            headers: {
                "User-Agent": "v2UserTweetsJS",
                "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAC3QZQEAAAAA88ctxA3JsB8rxOoW3L5G82%2BuQxg%3Dx0MflJo1ECEPx7LlpwXU1b5shhwtddpsgz4gHMqtoGptj2nG15`
            }
        }
    
        let hasNextPage = true;
        let nextToken = null;
        let userName;
        //res.send("Retrieving Tweets...")
    
        while (hasNextPage) {
            let resp = await getPage(params, options, nextToken);
            if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
                userName = resp.includes.users[0].username;
                if (resp.data) {
                    userTweets.push.apply(userTweets, resp.data);
                }
                if (resp.meta.next_token) {
                    nextToken = resp.meta.next_token;
                } else {
                    hasNextPage = false;
                }
            } else {
                hasNextPage = false;
            }
        }
        res.send(userTweets)
        console.dir(userTweets, {
            depth: null
        });
        console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);
    
    }
    
    const getPage = async (params, options, nextToken) => {
        if (nextToken) {
            params.pagination_token = nextToken;
        }
    
        try {
            const resp = await needle('get', url, params, options);
    
            if (resp.statusCode != 200) {
                console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
                return;
            }
            return resp.body;
        } catch (err) {
            throw new Error(`Request failed: ${err}`);
        }
    }
    
    getUserTweets();
  })


module.exports = router