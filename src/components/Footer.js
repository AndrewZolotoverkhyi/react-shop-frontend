import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "react-bootstrap";
import Github from "../icons/Github";

const SocialMedia = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const NavbarStyled = styled(Navbar)`
  background-color: rgb(70, 70, 104);
`;

export default function Footer() {
  return (
    <NavbarStyled fixed="bottom">
      <SocialMedia>
        <Github/>
      </SocialMedia>
    </NavbarStyled>
  );
}
