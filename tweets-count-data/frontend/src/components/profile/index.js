import React from 'react';
import * as S from './styled'
import useTwitter from "../../hooks/twitter-hooks"
import moment from 'moment'


const Profile = () => 
{
    const { twitterState } = useTwitter();
    const timeAt = moment(twitterState.user.created_at).format('lll')

    return <S.Wrapper>

        <S.WrapperProfile>

            <S.WrapperUser>
                <S.WrapperProfileImage src={twitterState.user.profile_image_url} alt="Avatar of User" />
                <h1>{twitterState.user.name}</h1>
            </S.WrapperUser>

            <S.WrapperProfileUsername>
                <h4>@ </h4>
                <span>{twitterState.user.username}</span>
            </S.WrapperProfileUsername>
            <S.WrapperCreatedAt>
                <span>criado em {timeAt}</span>
            </S.WrapperCreatedAt>

                <S.WrapperProfileInformations>
                    <h4>{twitterState.user.tweet_count}</h4>
                    <span>Tweets</span>
                </S.WrapperProfileInformations>
                <S.WrapperProfileInformations>
                    <h4>{twitterState.user.followers_count}</h4>
                    <span>seguidores</span>
                </S.WrapperProfileInformations>
        </S.WrapperProfile>

    </S.Wrapper >;
}

export default Profile