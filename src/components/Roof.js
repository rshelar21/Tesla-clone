import React, {useEffect} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const Roof = ()=> {
  useEffect(( ) =>{
    document.title = "Solar Roof | Tesla"
   

  }, [])

  return (

    <>
      <Container>
      
      <Item>
      <h1>Solar Roofs</h1>
      <p>Transform your roof and produce clean energy</p>
      </Item>
      
      <Buttons>
      <Fade bottom>
      <Range>

  
      <Btn>
      <SolarPowerIcon/>
      <p>Beautiful Solar <br /> Without Compromise</p>
      </Btn>
      <Btn>
      <h2>25-Year</h2>
      <p>Tile <br /> Warranty</p>
      </Btn>
      <Btn>
      <h2>24/7</h2>
      <p>Outage <br /> Protection</p>
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
const Container = styled.div`
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 100%), url('/images/sroof.jpeg');
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
color: #fff;
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
  color: #fff;
}
p {
  font-size: 18px;
  color: #fff;
}

`;


const Buttons = styled.div`
display: flex;
align-items: flex-start;
margin: 0 auto;
/* align-content: flex-start; */
margin-bottom: 70px;
color: #fff;
/* justify-content: space-between;
width: 60%; */

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
  font-size: 35px;
  font-weight: 500;

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
  font-size: 13px;
  line-height: 1.3;

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
    /* width: 50%; */
    /* width: 200px; */

    
  }

  @media (max-width: 700px) {
  /* width: 100%; */
  /* width: 200px; */
  }
`


const Order = styled.button`
outline: none;
border: none;
padding: 10px 0;
width: 100%;
text-align: center;
background-color: transparent;
border: 2px solid #fff;
border-radius: 999px;
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


export default Roof