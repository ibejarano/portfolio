import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hola!</h1>
        <h4>Soy Ignacio Bejarano. Desarrollador Web Full Stack</h4>
        <Button as={AnchorLink} href="#contact">
          Contacto
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Hola! soy Ignacio Bejarano. Desarrollador Web Full Stack" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
