import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import {animated , useSpring ,config} from 'react-spring'


const Model3 = ()=> {
  const [flip, set] = useState(false)
const  {number}  = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 3.1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })

    useEffect(() =>{
      document.title = "Model 3 | Tesla"

    }, [])
    
   


    


  return (

    <>
      <Container>
      
      <Item>
      <h1>
      Model 3</h1>
      {/* <p>Plaid</p> */}
      </Item>
      
      <Buttons>
      <Fade bottom>
      <Range>
      <Btn>
      <Speed>
      <div>
      <img src="/images/speed1.svg" alt="" />
      <img src="/images/speed3.svg" alt="" />
      </div>
      {/* <h2 >3.1 s</h2> */}
      <Head>
      {number.to(n => n.toFixed(1))}
      </Head>
      <span>s</span>
      </Speed>
      
      <p>0-60 mph*</p>
      </Btn>
      <Btn>
      <h2>358 mi</h2>
      <p>Range (EPA est.)</p>
      </Btn>
      
      <Btn>
      <h2>AWD</h2>
      <p>Dual Motor</p>
      </Btn>
      </Range>
      
      <OdBtn>
      <Order>
        <a >Order now</a>
      </Order>
      </OdBtn>
      </Fade>
      </Buttons>
      

      
      </Container>
    </>
  )
}
const Head = styled(animated.div)`
font-size: 30px;
margin-right: 3px;
span {
  font-size: 20px;
}
`

const Container = styled.div`
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 100%), url('/images/m3.jpeg');
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
`;


const Item = styled.div`
position: relative;
top: 120px;
color: #171a20;
/* font-size: 20px; */
text-align: center;
h1 {
  font-size: 45px;
  font-weight: 500;
  line-height: 1.5;
}
p {
  font-size: 18px;
}

`;


const Buttons = styled.div`
display: flex;
align-items: flex-start;
margin: 0 auto;
/* align-content: flex-start; */
margin-bottom: 70px;
color: #fff;
justify-content: space-between;
/* width: 50%; */
@media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    
  }

`;


const Range = styled.div`
display: flex;
align-items: center;
`

const Btn = styled.div`
text-align: center;
margin: 0 50px;


h2 {
  line-height: 1.5;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  flex-direction: row;

  @media (max-width: 1050px) {
    font-size: 20px;

    
  }
  @media (max-width: 700px) {
  /* margin: 0 20px; */
  font-size: 15px;
  line-height: 1.2;

  }


}
p {
  font-size: 12px;
  line-height: 0.9;


  @media (max-width: 1050px) {
    font-size: 10px;

    
  }
}

@media (max-width: 700px) {
  margin: 0 15px;
  }


`;

const OdBtn = styled.div`
width: 200px;
@media (max-width: 1050px) {
    /* font-size: 10px; */
    margin-top: 20px;
    /* width: 100%; */

    
  }

  @media (max-width: 700px) {
  /* width: 100%; */
  }
`


const Order = styled.button`
outline: none;
border: none;
padding: 10px 0 !important;
width: 100%;
text-align: center;
background-color: transparent;
border: 2px solid #fff;
border-radius: 999px ;
color: #fff;
font-size: 15px;
text-transform: uppercase;

a {
  text-decoration: none;

}

&:hover {
  background-color: #fff;
  color: black;
}
`
const Speed = styled.div`
display: flex;
align-items: center;
position: relative;

img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        /* position: absolute; */


        &:nth-child(2){
            width: 10px;
            height: 20px;
            position: absolute;
            left: 28px;
            top: 28px;
            transform: rotate(90deg);
        }

    }

`


export default Model3