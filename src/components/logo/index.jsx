import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

import AldisLogo from "../../assets/logo/logo_croped.png";
// import { theme } from "../../assets/logo/logo_croped.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText = styled.div`
  margin-top: 6px;
  font-size: 40px;
  color: ${theme.primary};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={AldisLogo} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        Aldevinas Mikalauskas
      </LogoText>
    </LogoContainer>
  );
}
