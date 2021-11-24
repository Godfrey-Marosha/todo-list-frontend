import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { View, ActivityIndicator } from 'react-native';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  StyledInputLabel,
  LeftIcon,
  RightIcon
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
                {({ handleChange, handleBlur, handleSubmit, values }) => 
                <StyledFormArea> </StyledFormArea>}

            </Formik>

            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, ...props }) => {
    return(
        <View> 
        
        </View>
    )
}

export default Login;
