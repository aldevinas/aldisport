import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Marginer } from "../marginer";



const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



export function Navbar(props) {
  return (
    <NavbarContainer>
      {/*<AccessibilityContainer>*/}
        <Button small>Client Side</Button>
        <Marginer direction="horizontal" margin="8px" />
      {/*</AccessibilityContainer>*/}
    </NavbarContainer>
  );
}
