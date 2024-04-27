import React, {Component} from "react";
import styled from './Navbar.module.css';


class Navbar extends React.Component{
    
    render(){
        const {cartCount}= this.props;
        return(
      <>
      
<div className={styled.nav}>
<div className={styled.title}>MOVIE APP</div>
<div className={styled.CartContainer}>
    <img 
    className={styled.CartIcon}
    src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" 
    alt="cart-icon"
    />
    <span className={styled.cartCount}>{cartCount}</span>
    </div>
</div>
        </>
        );
    }
}
export default Navbar;


    