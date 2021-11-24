import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
                <PageTitle>Ariscu Application</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;