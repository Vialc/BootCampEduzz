import React, { useState } from 'react';
import * as S from './styled';
import useTwitter from '../../hooks/twitter-hooks'
import img from '../../assets/image/logoAPI.png'



const Header = () => {
    const { getUser } = useTwitter();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <S.Wrapper>
            <input type="text" backgroundcolor='#fff' placeholder='Insira o usuário sem o @' className='username'
                onChange={(event) => setUsernameForSearch(event.target.value)}
            />

            <button type='submit' onClick={submitGetUser}>
                Pesquisar
            </button>
            <S.WrapperLogoImage src={img} alt="Logotipo" />
        </S.Wrapper>
    );
}

export default Header;