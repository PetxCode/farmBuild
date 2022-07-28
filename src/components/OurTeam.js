import React from "react";
import styled from "styled-components";

const OurTeam = () => {
  return (
    <Container>
      <Wrapper>
        <Team>Meet Our Team</Team>
        <SubTeam>
          This team moves mountains to give you the best at all times.
        </SubTeam>
      </Wrapper>
    </Container>
  );
};

export default OurTeam;

const SubTeam = styled.div``;
const Team = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 500px;
  background: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
