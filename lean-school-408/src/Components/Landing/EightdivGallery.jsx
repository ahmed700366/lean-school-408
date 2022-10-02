import React from "react";
import Eightdiv from "./Eightdiv";
import styled, { StyledComponent } from "styled-components";

const Wrapper  = styled.div`
display:flex;
flex-direction:column;
flex:1;
margin: 0.5% 2.5%;

`

const MainDiv = styled.div`
display:flex

`
const EightdivGallery = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1648162446/jq3ratinthvrzfaxnvyl.jpg",
      heading:"MICHAEL THE III'S MURDER MYSTERY",
      category: "Culture",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1635338400/qxlgbpktf8pow7eiszyx.jpg",
      heading: "WITH MY LITTLE EYE",
      category: "Fashion",
    
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1634218336/ucyy69klqy2all31anm7.jpg",
      heading: "TOUGH CROWD",
      category: "Culture",
      
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1633369883/uttj2shxt99kpjyqcoxg.jpg",
      heading: "ALL DAY WE DREAM ABOUT PLAY",
      category: "Fashion",
      
    },
  ];
  return (
    <MainDiv >
      <hr />
      
      {data.map((d) => (
       <Wrapper key={d.id}>
          <div style={{borderTop:"1px solid grey"}}> </div> 
          <Eightdiv  img={d.img} heading={d.heading} category={d.category} />
          <div style={{borderTop:"1px solid grey"}}> </div> 
          </Wrapper>
      ))}
      
    </MainDiv>
  );
};

export default EightdivGallery;
