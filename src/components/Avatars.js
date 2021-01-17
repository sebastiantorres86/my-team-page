import React from "react";
import Avatar from "./Avatar";
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin-top: 96px;
`

const Avatars = ({ avatarInfo }) => {
  return (
    <Row>
      {avatarInfo.map((data, i) => (
        <Avatar key={i} data={data} />
      ))}
    </Row>
  );
};

export default Avatars;
