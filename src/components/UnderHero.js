import React from "react";
import styled from "styled-components";
import icon from "../image/icon1.png";
import icon2 from "../image/mgs.png";
import icon3 from "../image/rocket.png";

const UnderHero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Sider>
              <Text1>We are doing the impossible</Text1>
              <Text2>
                {" "}
                the impossible Erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio nulla facilisi. Nam liber tempor cum
              </Text2>
            </Sider>
          </Top>
          <Bottom>
            <Holder>
              <NewFunction
                icon={icon}
                header="Modern Design"
                body="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobort minim veniam, quis nostrud exerci
          tation"
              />
              <NewFunction
                icon={icon3}
                header="Free Support & Updates"
                body="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobort minim veniam, quis nostrud exerci
          tation"
              />
              <NewFunction
                icon={icon2}
                header="Professional Code"
                body="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobort minim veniam, quis nostrud exerci
          tation"
              />
            </Holder>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );

  function NewFunction({ icon, header, body }) {
    return (
      <Card>
        <Icon src={icon} />
        <Header>{header}</Header>
        <Body>{body}</Body>
      </Card>
    );
  }
};

export default UnderHero;

const Body = styled.div`
  font-weight: 200;
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 27px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  height: 50px;
  margin-bottom: 20px;
  transition: all 350ms;

  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Holder = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Bottom = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const Text2 = styled.div`
  width: 60%;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 200;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Text1 = styled.div`
  width: 35%;
  font-weight: 900;
  font-size: 45px;
  line-height: 1.2;
  margin-right: 30px;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 20px 0;
  }
`;

const Sider = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
`;
