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
  MsgBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  LeftIcon,
  RightIcon,
  Colors,
} from './../components/styles';


// Application colours to use by name
const { darkLight, brand, primary } = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>        
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/ariscu-img1.png')} />
                <PageTitle>Ariscu Africa</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword:''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => 
                    <StyledFormArea> 
                        <MyTextInput
                            label="Full Name"
                            icon="person"
                            placeholder="John Wick"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
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
                            label="Date of Birth"
                            icon="calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={values.dateOfBirth}
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
                        <MyTextInput
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Create Account</ButtonText>
                        </StyledButton>

                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>

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

export default Signup;
