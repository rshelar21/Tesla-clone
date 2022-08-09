import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';

const PostModel = (props) => {
    const Resetfun = (event) =>{
        props.Changefun(event)

    }
  
  return (
    <>
    { props.showlist === "open" &&
    
    <Container>
    
    <Fade right>
        <BurgerNav >
        <CloseWrapper onClick={Resetfun}>
        <CloseIcon/>
        
        </CloseWrapper>
        
            <Listdata className='list-out'> <a href="/models">Model S</a></Listdata>
            <Listdata className='list-out'> <a href="/model3">Model 3</a></Listdata>
            <Listdata className='list-out'> <a href="/modelx">Model X</a></Listdata>
            <Listdata className='list-out'> <a href="/modely">Model Y</a></Listdata>
            <Listdata className='list-out'> <a href="/roofs">Solar Roof</a></Listdata>
            <Listdata className='list-out'> <a href="/panels">Solar Panels</a></Listdata>
            <li> <a href="#">Existing Inventory</a></li>
            <li> <a href="#">Used Inventory</a></li>
            <li> <a href="#">Trade-in</a></li>
            <li> <a href="#">Test Drive</a></li>
            <li> <a href="#">Insurance</a></li>
            <li> <a href="#">Cybertruck</a></li>
            <li> <a href="#">Roadaster</a></li>
            <li> <a href="#">Semi</a></li>
            <li> <a href="#">Charging</a></li>
            <li> <a href="#">Powerwall</a></li>
            <li> <a href="#">Commercial Energy</a></li>
            <li> <a href="#">Utilities</a></li>
            <li> <a href="#">Find Us</a></li>
            <li> <a href="#">Support</a></li>
           
        </BurgerNav>
        </Fade>
     
        </Container>
        
    }
        


      
    </>
  )
}



const Container = styled.div`
background-color: rgba(0,0,0,0.08);
/* background-color: red; */
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
-webkit-backdrop-filter: blur(5px);
backdrop-filter: blur(5px);
height: 100vh;
z-index: 999;
/* overflow: hidden; */
`;

const List = styled.div`
background-color: #fff;
`


const BurgerNav = styled.div`
background-color: #fff;
color: black;
position: absolute;
right: 0px;
top: 0;
bottom: 0;
z-index: 200;
padding: 20px;
height: 100vh;
/* filter: blur(0); */
display: flex;
flex-direction: column;
justify-content: flex-start;
max-width: 300px;
width: 100%;
/* opacity: 1; */
/* animation: animateW 0.5s ease-in; */
/* transform: ${props => (props.show ? "translateX(0px)" : "translateX(100%)")}; */

li {
    list-style: none;
    padding: 15px 0;
    /* border-bottom: 1px solid rgba(0,0,0,0.2); */




a {
    text-decoration: none;
    font-size: 600;
    color: #171a20;

}


}


`;




const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
cursor: pointer;

`;

const Listdata = styled.li`
list-style: none;
display: none;


@media (max-width: 955px){
    display: block;

}

`;

export default PostModel
