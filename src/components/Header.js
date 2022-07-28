import React from "react";
import styled from "styled-components";
import logo from "../image/3.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <Logo src={logo} />
            <Navigation>
              <Nav to="/">
                <span>Home</span>
              </Nav>
              <Nav to="/">
                <span>Home</span>
              </Nav>
              <Nav to="/">
                <span>Home</span>
              </Nav>
            </Navigation>
          </Holder>
          <Avatar />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: darkorange;
  border: 1px solid silver;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Nav = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  transition: all 350ms;
  margin: 0 10px;
  margin-top: 10px;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: darkorange;
    left: 0;
    bottom: 0;
    transform-origin: center left;
    opacity: 0;
    transition: all 350ms;
  }

  &.active {
    :after {
      transform: scale(1.2);
      opacity: 1;
    }
  }

  :hover {
    cursor: pointer;

    :after {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

const Navigation = styled.div`
  margin-left: 30px;
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 96%;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  z-index: 2;
`;
