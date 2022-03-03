import React from 'react';
import * as S from './styled'
import moment from 'moment'


const TweetItem = ({ name, textTweet, username, created_at }) => {
  const timeAt = moment(created_at).format('lll')

  return (
    <S.Wrapper>
      <S.WrapperTweetHead>
        <S.WrapperName> {name}</S.WrapperName>
        <S.WrapperUserName>@{username} -</S.WrapperUserName>
        <S.WrapperCreatedAt>{timeAt}</S.WrapperCreatedAt>
      </S.WrapperTweetHead>

      <S.WrapperTweetText>{textTweet}</S.WrapperTweetText>
    </S.Wrapper>
  )
}

export default TweetItem;