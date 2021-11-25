import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledTextInput,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  LeftIcon,
  RightIcon,
  Colors,
} from './../components/styles';


// Application colours to use by name
const { darkLight, brand, primary } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>        
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/ariscu-img1.png')} />
                <PageTitle>Ariscu Africa</PageTitle>
                <SubTitle>Account Login</SubTitle>

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
                            icon="mail"
                            placeholder="godfreym@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                    }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return(<View> 
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>
        )}
    </View>);
};

export default Login;
