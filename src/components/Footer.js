import React from "react";
import styled from "styled-components";

const Copy = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 88px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin-top: 110px;
  }

  color: #a9a9a9;
`;

const Link = styled.a`
  text-decoration: none;
  color: #a9a9a9;
`;

const Footer = () => {
  return (
    <Copy>
      <Link href="https://www.linkedin.com/in/sebastian-torres-dev/">
        Sebastian Torres
      </Link>{" "}
      @ <Link href="https://devchallenges.io/">DevChallenges.io</Link>
    </Copy>
  );
};

export default Footer;
