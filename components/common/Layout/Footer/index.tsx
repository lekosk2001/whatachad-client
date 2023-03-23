import React from "react";
import { FooterContainer, GitLink } from "./styles";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <h2>What a Chad 🔱</h2>
      <GitLink href="https://github.com/whatachad" target="_blank">
        <BsGithub /> All rights reserved.
      </GitLink>
    </FooterContainer>
  );
};

export default Footer;
