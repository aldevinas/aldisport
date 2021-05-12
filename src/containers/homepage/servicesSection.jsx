import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>My work environment and tools</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Web projects with react"
        description="I build and deliver fully integrated webapps
          with customized control panels that fit your 
          needs."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Any device optimized"
        description="I build and deliver fully integrated webapps
          with customized control panels that fit your 
          needs."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="MERN work environment"
        description="For bigger projects I have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
