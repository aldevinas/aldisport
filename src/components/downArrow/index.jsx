// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(122, 122, 122, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 27px;
`;

export function DownArrow() {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <h6>more</h6>
      </ArrowIcon>
    </ArrowContainer>
  );
}
