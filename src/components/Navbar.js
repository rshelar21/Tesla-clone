import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PostModel from './PostModel';

const Navbar = () => {
    const [BurgerStatus, setBurgerStatus] = useState("close");
    const [Navcolor, setNavcolor] = useState("#171a20");
    const location = useLocation()
    let locate = location.pathname
    console.log(locate)
    const getData = () =>{
        if(locate === '/model3' || locate === '/modely' || locate === '/roofs'){
          console.log(locate)
          setNavcolor("#fff")
        }
        
      }
        useEffect(() =>{
          
          getData()
        }, [])
    
    const Setburger = (e) =>{
        if(BurgerStatus === "close"){
            setBurgerStatus("open")
        }
        else 
        {
            setBurgerStatus("close")
        }
    }
  

  return (
    <>
        <Container>
        <Nav>
        <Logo href="/">
        <img src="/images/logo.svg" alt="" />
        </Logo>
            <Navlist >
                <NavItem>
                <a href="/models" title='Model S' style={{color: Navcolor, fontWeight: "500"}}>
                    Model S
                </a>
                </NavItem>
                <NavItem >
                <a href="/model3"  style={{color: Navcolor, fontWeight: "500"}}>
                Model 3
                </a>
                </NavItem>
                <NavItem>
                <a href="/modelx" style={{color: Navcolor, fontWeight: "500"}}>
                Model X
                </a>
                </NavItem>
                <NavItem>
                <a href="/modely" style={{color: Navcolor, fontWeight: "500"}}>
                Model Y
                </a>
                </NavItem>
                <NavItem>
                <a href="/roofs" style={{color: Navcolor, fontWeight: "500"}}>
                    Solar Roof
                </a>
                </NavItem>
                <NavItem>
                <a href="/panels" style={{color: Navcolor, fontWeight: "500"}}>
                    Solar Panels
                </a>
                </NavItem>
                {/* <ShowD></ShowD> */}
            </Navlist>

            <LeftNav>
            <NavItem>
                <a href="" style={{color: Navcolor, fontWeight: "500"}}>
                    Shop
                </a>
                </NavItem>
                <NavItem>
                <a href="" style={{color: Navcolor, fontWeight: "500"}}>
                    Account
                </a>
                </NavItem>
                <NavItem>
                <a onClick={Setburger} style={{color: Navcolor, fontWeight: "500"}}>
                    
                    Menu
                </a>
                </NavItem>


            </LeftNav>
        
        </Nav>
        <PostModel showlist={BurgerStatus} Changefun = {Setburger}/>
        </Container>
        {/* <PostModel showlist={BurgerStatus} Changefun = {Setburger}/> */}
    </>
  )
}
const Container = styled.div`
background-color: transparent;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 999;

`;

const Nav = styled.nav`
padding: 0 40px;
min-height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;


`;

const Logo = styled.a`
text-decoration: none;
flex-grow: 1;
width: 80px;

img {
    display: block;
    /* width: 100%; */
    
}


`


const Navlist = styled.ul`
display: flex;
align-items: center;
flex-grow: 1;
position: relative;
margin-left: 20px;



@media (max-width: 955px){
    display: none;

}

`
const ShowD = styled.div`
 position: absolute;
 z-index: -1;
 width: 100px;
 height: 30px;
 /* top: 0; */
 left: 10px;
  /* width: 100%; */
  background-color: rgba(0,0,0,0.3);
  /* opacity: 0; */
  cursor: pointer;
  pointer-events: all;
  transform: translateX(0px);
  transition: all 0.3s ease;


  &:hover{
    opacity: 0;
    background-color: red;
    left: 100px;
    transform: translateX(100px);
  }

`

const NavItem = styled.li`
list-style: none;
/* padding: 5px 30px;  */
position: relative;
/* cursor: pointer; */
a {
    /* color: black; */
    text-decoration: none;
    /* font-weight: 500; */
    font-size: 15px;
    font-weight: bold;
    padding: 5px 15px;
    /* color: #171a20; */
    cursor: pointer;
    /* transform: trans; */

   

    @media (max-width: 500px) {
        font-size: 15px;
        padding: 0 8px;
        
    }
}



@media (max-width: 500px) {
        justify-content: space-evenly;
        
    }

 





`


const LeftNav = styled.div`
display: flex;
align-items: center;
margin-right: 10px;

@media (max-width: 500px){
    margin-right: 0;
    justify-content: space-evenly;

}




`;

const BurgerNav = styled.div`
background-color: #fff;
color: black;
position: fixed;
right: 0;
top: 0;
bottom: 0;
z-index: 99;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
max-width: 300px;
width: 100%;
opacity: 1;
transition: opacity 0.5s ease-in;
/* transform: ${props => (props.show ? "translateX(0px)" : "translateX(100%)")}; */

& > li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);




    a {
        text-decoration: none;
        font-size: 600;
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



export default Navbar;