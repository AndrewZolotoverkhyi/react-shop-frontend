import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
  padding: 70px 0;
  margin: auto;
`;

const MenCardContainer = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    border: 2px solid #353b40;
  }
  border-radius: 5px;
  margin: 2vh 0;
  width: 85vw;
  height: 35vh;
  overflow: hidden;
  background: url("https://novafashion.ru/wp-content/uploads/2017/11/mujskaya_obuv_foto_2018_87-660x309.jpg") center center no-repeat;
  background-size: cover;
`;

const WomenCardContainer = styled(MenCardContainer)`
  background: url("https://sc04.alicdn.com/kf/H53eb7191d7654abfae849b883fccc31bZ/205618631/H53eb7191d7654abfae849b883fccc31bZ.jpg") center center;
`;

const TextBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 30%;
  min-height: 80px;
  min-width: 150px;
  background: #464668;
  border-radius: 5px;
  opacity: 0.9;
`;

const H2 = styled.h2`
  margin: 0 2px;
  font-size: 1.6rem;
  color: white;
  text-align: center;
`;

export default function HomePage() {
  function setFilter(gender) {
    sessionStorage.setItem("genderFilter", gender);
  }
  return (
    <HomeContainer>
      <MenCardContainer to="/shop" onClick={() => setFilter("male")}>
        <TextBackground>
          <H2>Для чоловіків</H2>
        </TextBackground>
      </MenCardContainer>
      <WomenCardContainer to="/shop" onClick={() => setFilter("female")}>
        <TextBackground>
          <H2>Для жінок</H2>
        </TextBackground>
      </WomenCardContainer>
    </HomeContainer>
  );
}
