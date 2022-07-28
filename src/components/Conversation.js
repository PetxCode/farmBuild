import React from "react";
import styled from "styled-components";

const Conversation = () => {
  return (
    <Container>
      <Wrapper>
        <Team>Meet Our Team</Team>
        <SubTeam>
          This team moves mountains to give you the best at all times.
        </SubTeam>
      </Wrapper>
      <Colr />
    </Container>
  );
};

export default Conversation;

const SubTeam = styled.div``;
const Team = styled.div``;
const Wrapper = styled.div`
  z-index: 1;
`;

const Colr = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url("/image/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
