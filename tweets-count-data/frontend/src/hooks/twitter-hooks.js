import { useContext } from 'react';
import { TwitterContext } from '../providers/twitter-provider';

const useTwitter = () => 
{
    const {twitterState, getUser, getUserTweets  } = useContext(TwitterContext);

    return {twitterState, getUser, getUserTweets };
};

export default useTwitter