import axios from "axios";
import React, { createContext, useCallback, useState } from "react";

export const TwitterContext = createContext({
  loading: false,
  //received_tweets: false,
  user: {},
  tweets: [],
  retweets: [],
});

const TwitterProvider = ({ children }) => {
  const [twitterState, setTwitterState] = useState({
    hasUser: false,
    loading: false,
    received_tweets: false,
    user: {
      id: 0,
      username: undefined,
      name: undefined,
      created_at: undefined,
      followers_count: undefined,
      tweet_count: undefined,
      profile_image_url: undefined,
    },
    tweets: [],
    retweets: [],
  });

  const getUser = (username) => {
    setTwitterState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
      axios.get(`api/search`, {
        params: {
          username,
        },
      })
      .then(response  => {
        setTwitterState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: response.data.data[0].id,
            username: response.data.data[0].username,
            name: response.data.data[0].name,
            created_at: response.data.data[0].created_at,
            followers_count: response.data.data[0].public_metrics.followers_count,
            tweet_count: response.data.data[0].public_metrics.tweet_count,
            profile_image_url: (response.data.data[0].profile_image_url.replace('_normal', ''))
          },
        }));
      })
      .finally(() => {
        setTwitterState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserTweets = (id) => {
      axios.get(`api/search/tweets`, {
        params: {
          id,
        },
      })
      .then(response  => {
       // console.log("data: " + JSON.stringify(response))
        setTwitterState((prevState) => ({
          ...prevState,
          received_tweets: true,
          tweets: response.data,
        }));
      })
  };

  const contextValue = {
    twitterState,
    getUser: useCallback((username) => getUser(username), []),
    getUserTweets: useCallback((id) => getUserTweets(id), []),
  };

  return (
    <TwitterContext.Provider value={contextValue}>
      {children}
    </TwitterContext.Provider>
  );
};

export default TwitterProvider;