import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#projects">Proyectos</AnchorLink>
    <AnchorLink href="#about">Sobre Mi</AnchorLink>
    <AnchorLink href="#contact">Contacto</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
