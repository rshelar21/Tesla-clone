import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const  Section = ({title, description, leftBtn, rightBtn, backImg}) => {
  return (
    <>
        <Wrap BgImg = {backImg}>
        <Fade bottom>
        <Item>
            <h1>{title}</h1>
            <p>{description}</p>
        </Item>
        </Fade>
        <Buttons>
        <Fade bottom>
        <ButtonGRoup>
            <LeftBtn>
            {leftBtn}
            </LeftBtn>
            { rightBtn &&
            <RightBtn>
            {rightBtn}
            </RightBtn>
            }
        </ButtonGRoup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>

        </Wrap>
    </>
  )
}
const Wrap = styled.div`
background-image: url('/images/model-s.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100%;
height: 100vh;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;

background-image: ${props => `url("/images/${props.BgImg}")`};





`;

const Item = styled.div`
text-align: center;
position: relative;
top: 130px;


`;

const Buttons = styled.div`
display: flex;
flex-direction: column;


`


const ButtonGRoup = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 786px){
    flex-direction: column;

}
`;

const LeftBtn = styled.button`
background-color: rgba(23,26,32,0.8);
border: none;
outline: none;
color: #fff;

padding: 15px 0;
width: 256px;
text-align: center;
font-size: 15px;
opacity: 0.85;
text-transform: uppercase;
border-radius: 999px;
margin: 8px;
cursor: pointer;


`;

const RightBtn = styled(LeftBtn)`
background-color: #fff;
color: black;
opacity: 0.65;

`
const DownArrow = styled.img`
margin-top: 20px;
overflow-x: hidden;
height: 30px;
margin-bottom: 10px;

animation: animateDown 1.5s infinite;


`

export default Section