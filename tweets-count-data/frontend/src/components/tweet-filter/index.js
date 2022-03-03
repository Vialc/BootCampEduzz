import React, { useState } from 'react';
import useTwitter from "../../hooks/twitter-hooks"
import * as S from './styled'



const TweetFilter = (props) => {
    const { twitterState  } = useTwitter()
    const [search, setSearch] = useState('')


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const pushTweets = twitterState.tweets
        const results = pushTweets.filter((tweets) => tweets.text.toLowerCase().includes(search))
        props.setHasUserForSearchTweets(results)
    }

    return <S.Wrapper>
        <input type="text" placeholder='Insira a palavra para pesquisa' value={search} className='wordsearch'
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
        <button type='submit' onClick={handleOnSubmit}>
            Pesquisar Palavra
        </button>
    </S.Wrapper>;
}

export default TweetFilter;