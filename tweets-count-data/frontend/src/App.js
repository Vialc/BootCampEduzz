import React from 'react';
import Layout from './components/layout';
import NoSearch from './components/no-search';
import Profile from './components/profile';
import TweetsList from './components/tweetsList';

import useTwitter from './hooks/twitter-hooks';


const App = () => {
  const { twitterState } = useTwitter()
  return (

    <Layout>
      {twitterState.hasUser ? <>
        {twitterState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile />
            <TweetsList />
          </>
        )}
      </> : <NoSearch />}

    </Layout>
  );
}

export default App;
