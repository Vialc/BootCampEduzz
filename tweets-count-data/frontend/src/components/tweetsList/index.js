import React, { useEffect, useState } from 'react';
import useTwitter from "../../hooks/twitter-hooks"
import TweetItem from '../tweetItem';
import NoTweet from '../no-tweet'
import * as S from './styled';
import TweetFilter from "../tweet-filter"

const TweetsList = () => {
  const { twitterState, getUserTweets  } = useTwitter()
  const [hasUserForSearchTweets, setHasUserForSearchTweets] = useState(false)

  useEffect(() => {
    if (twitterState.user.id) {
      getUserTweets(twitterState.user.id)
      setHasUserForSearchTweets(twitterState.tweets)
    }
    setHasUserForSearchTweets(twitterState.tweets)
  }, [twitterState.user.id])

  return (
    <>
      {hasUserForSearchTweets ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab> Tweets </S.WrapperTab>
            <S.WrapperTab> Retweets </S.WrapperTab>
            <S.WrapperResultsCount>
            <S.WrapperResultsCount>
            <h3>Total de Tweets encontrados: {hasUserForSearchTweets.length}</h3>
            </S.WrapperResultsCount>
              <TweetFilter  setHasUserForSearchTweets={setHasUserForSearchTweets} />
            </S.WrapperResultsCount>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            {twitterState.received_tweets ? (
              // {hasUserForSearchTweets ? () : ()}
                <S.WrapperList>
                {hasUserForSearchTweets.map(item => (
                  <TweetItem
                    key={item.id}
                    name={twitterState.user.name}
                    username={twitterState.user.username}
                    created_at={item.created_at}
                    textTweet={item.text}
                  />
                ))}
              </S.WrapperList>
              
              
              
              
              ) : (
              <NoTweet />)
            }
          </S.WrapperTabPanel>
          <S.WrapperTabPanel><S.WrapperList> <TweetItem name="name 2" textTweet="text 2" /></S.WrapperList> </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (<></>)
      }</>
  )
}

export default TweetsList;