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
             
             <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons1243689/call_phone_icon Creative Commones (Attribution 3.0 Unported);
                 https://www.iconfinder.com/Makoto_msk */}
                 <Link to = '/'>
                   <img src={logo} alt="store" className="navbar-brand"/> 
                 </Link>
                 <ul className="navbar-nav align-items-center">
                   <li className = "nav-item ml-5" >
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
function CartLogo (){ return (
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg> )
   // return <img src={cart_logo} height={20  } />
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
@media (max-width: 576px){
   .navbar-nav{
      flex-direction: row !important;
   }
}
`; 