import React from "react";
import styled from "styled-components";
 
const Nav = styled.div`

height: 70px;
background: linear-gradient(170deg, #1bc059, #0d47a1) ;
display:flex,
justify-content: space-between,
align-items:"center"
position:"relative";
`
 const Title = styled.div`
        font-size: 30px;
        color:#fff;
        font-weight: 600;
        font-family:' Montserrat, sans-serif';
        text-transform: uppercase;
        margin-left: 20px;
        &:hover{color: #0f0}
 `
 
 const CartContainer = styled.div`
 position: relative;
 cursor: pointer;
 `
 const CartImg = styled.img`
 height:48;
 marginRight:20;
`
 const CartCount= styled.div`
 background:${(props) => props.color};
        border-radius: 50%;
        padding:4px 8px,
        position:absolute,
        right:10px;
        top:-5px;
        fontSize:12px;
        visibility: ${(props) => props.show? "visible": "hidden"}
 `

 class Navbar extends React.Component{
    render(){
    
    
        return(
            <>
            <Nav>
                <Title>Movie-App</Title>

                <CartContainer>
                    <CartImg alt ="cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" style={style.cartIcon} />
                    <CartCount color="yellow" show= {true}>{CartCount}</CartCount>
                </CartContainer>
            </Nav>
            </>
        )
    }
 }

 export default Navbar;

 const style ={
     /*Navbar classes */
 
 nav: {
        
    height: 70 , 
    background: "#4267b2",
    display:"flex",
    justifyContent:"space-between",
    alignitems: "center",
    position: "relative"
},
title: {
    fontSize: 30,
    color:"#fff",
    fontWeight: 600,
    fontFamily:' "Montserrat", sans-seif',
    textTransform:"uppercase",
    marginLeft: 20 

},
CartContainer :{
    position: "relative",
    cursor: "pointer"
},
cartIcon : {
    height:48,
    marginRight:20 
},
CartCount: {
    background : "orange",
    borderRadius:"50%",
    padding:"4px 8px",
    position:"absolute",
    right:10,
    top:-5,
    fontSize:12
}


 }