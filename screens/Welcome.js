import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  Avatar,
  WelcomeImage,
  WelcomeContainer,
} from './../components/styles';

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/ariscu-img3.jpg')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome Home</PageTitle>
          <SubTitle welcome={true}>{'John Wick'}</SubTitle>
          <SubTitle welcome={true}>{'johnwick@gmail.com'}</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />

            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;