import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledTextInput,
  StyledInputLabel,
  LeftIcon,
  Colors,
} from './../components/styles';


// Application colours to use by name
const { darkLight, brand, primary } = Colors;

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
                    <StyledFormArea> 
                        <MyTextInput
                            label="Email Address"
                            placeholder="godfreym@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            icon="mail"
                        />
                    </StyledFormArea>}

                </Formik>

            </InnerContainer>
        </StyledContainer>
    );
};
const MyTextInput = ({ label, icon, ...props }) => {
    return(<View> 
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>

        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
    </View>);
};

export default Login;
