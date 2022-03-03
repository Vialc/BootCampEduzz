import React, { Children } from 'react';
import * as S from './styled'
import Header from '../header';

const Layout = ( {children} ) => {

    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;