import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>        
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/ariscu-img1.png')} />
                <PageTitle>Ariscu Africa</PageTitle>
                <SubTitle>Login</SubTitle>

                <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            </Formik>

            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;
