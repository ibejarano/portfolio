import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Ignacio Bejarano Web Dev" />
      </Thumbnail>
      <Details>
        <h1>Sobre mi</h1>
        <p>
          Me llamo Ignacio Bejarano tengo 29 años y soy ingeniero Mecanico. Actualmente estoy búsqueda de un cambio de carrera hacia el desarrollo Web, desde 2018 que vengo estudiando
          y haciendo proyectos en mi tiempo libre. 
        </p>
        <Button as={AnchorLink} href="#contact">
          Contacto
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
