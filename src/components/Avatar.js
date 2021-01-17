import React from "react";
import styled from "styled-components";

const Name = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin: 10px 0 0;

  color: #000000;
  @media only screen and (min-width: 768px) {
    margin: 15px 0 0;
  }
`;

const Position = styled.h3`
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  width: 107px;
  margin-top: 0;

  text-transform: uppercase;

  color: #000000;
  transform: rotate(90deg);
  position: absolute;
  right: -62px;
  top: 47px;
  @media only screen and (min-width: 768px) {
    right: 0px;
    top: 45px;
    font-size: 12px;
    line-height: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Column = styled.div`
  flex: 40%;
  max-width: 40%;
  padding: 0;
  margin-bottom: 0;
  :nth-child(2n) {
    margin-top: 50px;
  }

  position: relative;
  @media only screen and (min-width: 768px) {
    flex: 25%;
    max-width: 25%;
    padding: 0 70px 0 0;
    margin: 0;
    :nth-child(2) {
      margin: 64px 0 0;
    }
    :nth-child(5) {
      margin-top: 150px;
    }
  }
`;

const Avatar = ({ data }) => {
  return (
    <Column>
      <Position>{data.position}</Position>
      <Image src={data.image} alt={data.name} />
      <Name>{data.name}</Name>
    </Column>
  );
};

export default Avatar;
