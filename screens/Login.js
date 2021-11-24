import React from 'react';


import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/ariscu-img1.png')} />
                <PageTitle>Ariscu Africa</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;
