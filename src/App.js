import React, { useState, useEffect } from "react";
import dataService from "./services/info";
import styled from "styled-components";
import Header from "./components/Header";
import Avatars from "./components/Avatars";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  margin: 71px 12px;
  @media only screen and (min-width: 768px) {
    margin: 110px 240px 30px;
  }
`;

const heading = "The creative crew";
const subheading = "who we are";
const copy =
  "We are team of creatively diverse. driven. innovative individuals working in various locations from the world.";

const App = () => {
  const [avatarInfo, setAvatarInfo] = useState([]);

  useEffect(() => {
    console.log("effect");
    dataService.getAll().then((response) => {
      console.log("promise fulfilled");
      setAvatarInfo(response.data);
    });
  }, []);

  console.log("render", avatarInfo.length, "notes");

  return (
    <Wrapper>
      <Header heading={heading} subheading={subheading} copy={copy} />
      <Avatars avatarInfo={avatarInfo} />
      <Footer />
    </Wrapper>
  );
};

export default App;
