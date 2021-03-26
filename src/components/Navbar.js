import React, { Component} from "react";
import {Link} from "react-router-dom";
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import cart_logo from '../icons/cart_logo.svg';


export default class Navbar extends Component {
    render(){
        return (
            <div>
             <h3>NavBar </h3>
             <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons1243689/call_phone_icon Creative Commones (Attribution 3.0 Unported);
                 https://www.iconfinder.com/Makoto_msk */}
                 <Link to = '/'>
                   <img src={logo} alt="store" className="navbar-brand"/> 
                 </Link>
                 <ul className="navbar-nav align-items-center">
                   <li className = "nav=item ml-5" >
                      <Link to="/ProductList" className="nav-link">
                         products
                      </Link>
                   </li>   
                </ul>
                <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                     <CartLogo />
                   <i className="fas fa-cart-plus"/>
                   </span>
                   My Cart
                </ButtonContainer>
                </Link>
             </NavWrapper>
            </div>
        )
    }
}




   // --- Trying to do a conditional rendering of the cart icon in the event 
   //--- the one from an external site doesn' render
function CartLogo (){
   return <img src={cart_logo} height={20
   } />
}
   
function CartCss(){
   return <i className="fas fa-cart-plus"/>
}
   
// ------------------

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
   color:var(--mainWhite)!important;
   font-size:1.3rem;
   text-transform:capitalize;

}
`; 