import React from 'react'
import styled from 'styled-components'
import Section from './Section';
import CarInfo from './CarInfo';


const Home = (props) => {
  return (
    <>
    <Container>
    <Section title="Model S"
      description="Order Online for Touchless Delivery"
      backImg = "model-s.jpg"
      leftBtn = "Custom order"
      rightBtn = "Existing inventory"
    /> 
     <Section title="Model Y"
      description="Order Online for Touchless Delivery"
      backImg = "model-y.jpg"
      leftBtn = "Custom order"
      rightBtn = "Existing inventory"
    /> 
     <Section title="Model 3"
      description="Order Online for Touchless Delivery"
      backImg = "model-3.jpg"
      leftBtn = "Custom order"
      rightBtn = "Existing inventory"
    /> 
     <Section title="Model X"
      description="Order Online for Touchless Delivery"
      backImg = "model-x.jpg"
      leftBtn = "Custom order"
      rightBtn = "Existing inventory"
    /> 
     <Section title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      backImg = "solar-panel.jpg"
      leftBtn = "Order now"
      rightBtn = "Learn more"
    /> 
     <Section title="Accessories"
      description=""
      backImg = "accessories.jpg"
      leftBtn = "Shop now"
      rightBtn = ""
    /> 

    
    </Container>
    
        

    </>
  )
}

const Container = styled.div`
height: 100vh;
width: 100%;
`;

export default Home