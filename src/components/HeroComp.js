import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HeroComp = () => {
  const data = [
    {
      title: "we have aligned our business models with",
      special: "Sustainable Development Goal 2",
      title1: "our business models with",
      subTitle:
        "We have also developed two Strategic Business Units, FC Foods and FC Shops, that facilitate stakeholder access.",
    },
    {
      title: "our business models with",
      special: "forms of hunger while promoting ",
      title1:
        "food security across the globe and heard by peaople that metters",
      subTitle:
        "We have also developed two Strategic Business Units, FC Foods and FC Shops, that facilitate stakeholder access to maximum profitability in the food value chain.",
    },
    {
      title:
        "Our tech-infused platform drives an enabling environment for farmers and sets up more",
      special: "efficient food",
      title1: "distribution channels",
      subTitle:
        "FC Foods and FC Shops, that facilitate stakeholder access to maximum profitability in the food value chain.",
    },
  ];

  const [quote, setQuote] = useState(data);
  const [count, setCount] = useState(0);

  const textColor = useRef();
  const textColor1 = useRef();
  const textColor2 = useRef();

  const myColor = ["darkorange", "white", "white"];
  const myColor1 = ["white", "darkorange", "white"];
  const myColor2 = ["white", "white", "darkorange"];

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 6000);
  }, []);

  useEffect(() => {
    textColor.current.style.backgroundColor = myColor[count % myColor.length];
    textColor.current.style.transition = "all 350ms";

    textColor1.current.style.backgroundColor =
      myColor1[count % myColor1.length];
    textColor1.current.style.transition = "all 350ms";

    textColor2.current.style.backgroundColor =
      myColor2[count % myColor2.length];
    textColor2.current.style.transition = "all 350ms";
  }, [count]);

  return (
    <Container>
      {/* <Wrapper>Hero</Wrapper> */}
      <Wrapper>
        <Content>
          <Title>
            {data[count % quote.length].title}
            <span>{data[count % quote.length].special}</span>
            {data[count % quote.length].title1}
          </Title>
          <SubTitle>{data[count % quote.length].subTitle}</SubTitle>

          <Dots>
            <Dot ref={textColor} />
            <Dot ref={textColor1} />
            <Dot ref={textColor2} />
          </Dots>

          {/* <Button>Sign up to get started</Button> */}
        </Content>
      </Wrapper>
      <BgrColor />
    </Container>
  );
};

export default HeroComp;

const Button = styled.div`
  padding: 10px 30px;
  background-color: #ffb850;
  width: 180px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 15px 0px 15px 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 350ms;
  transform: scale(1);
  margin-top: 40px;

  animation: {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: animate;
  }
  /* animation: {
		animation-timing-function: linear;
		animation-duration: 2s;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-fill-mode: none;
		animation-play-state: running;
		animation-name: animate;
	} */
  :hover {
    cursor: pointer;
    transform: scale(1.06);
  }
  @media screen and (max-width: 800px) {
    color: black;
    padding: 10px;
    font-size: 15px;
    width: 100px;
    margin-top: 20px;
  }
`;

const Dots = styled.div`
  display: flex;
`;
const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  margin: 20px 8px;
`;
const SubTitle = styled.div`
  font-size: 28px;
  margin-top: 20px;
  line-height: 1.2;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  line-height: 1.2;
  font-size: 38px;
  span {
    color: #ffb850;
    margin: 0 10px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 50%;
  height: 650px;
  object-fit: contain;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 450px;
  }
`;

const Content = styled.div`
  /* z-index: 1000; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  height: 100%;
  color: white;
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`;

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
`;

const BgrColor = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  /* z-index: 1; */
`;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url("/image/1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
`;
