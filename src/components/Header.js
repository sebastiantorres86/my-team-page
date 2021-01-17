import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Heading = styled.h1`
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.045em;
  margin: 0 0 38px;
  padding: 0;
  flex: 100%;
  @media only screen and (min-width: 768px) {
    flex: 50%;
  }

  color: #000000;
`;

const Column = styled.div`
  flex: 100%;
  @media only screen and (min-width: 768px) {
    flex: 50%;
  }
`;

const Subheading = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin: 0px 0px 10px;
  line-height: 27px;
  text-transform: uppercase;

  color: #000000;
`;

const Copy = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  padding-right: 2rem;
  margin: 0;

  color: #000000;
  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`;

const Header = ({ heading, subheading, copy }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Column>
        <Subheading>{subheading}</Subheading>
        <Copy>{copy}</Copy>
      </Column>
    </Container>
  );
};

export default Header;
