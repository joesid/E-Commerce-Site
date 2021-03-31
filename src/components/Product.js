import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import cart_logo from '../icons/cart_logo.svg';
export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className = "card">
                <div className = "img-container p-5" onClick={() => console.log('clicked')}>
                    <Link to="/Details">
                        <img src={img} alt ="product" className ="card-img-top"></img>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false } 
                    onClick = {()=> {console.log("added to cart")}}>
                        {inCart?(<p className="text-capitalize mb-0" disabled>{" "} In Cart</p>):(<CartLogo/>)}
                    </button>
                </div>
                {/* card footer */}
                     <div className ="card-footer d-flex justify-content-between">
                        <p className ="align-self-center mb-0">{title}</p>
                          <h5 className="text-blue font-italic mb-0">
                            <span className ="mr=1">&#8358;</span>
                            {price}
                          </h5>
                     </div>
                </div>
                <h3> from Product&nbsp;</h3>
            </ProductWrapper>
        )
    }
}


{/* <i className="fas fa-cart-plus"/>) */}
function CartLogo(){
    return (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
    //   <img src={cart_logo} height={20}/>
    )
  }


const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.5s linear;
}

.card-footer{
    background:transparent;
    border-top: transparent;
    transition: all 0.5s linear;
}

&:hover{
    .card{
        border:0.04 rem solid rgba(0,0,0,0.2);
        box-shadow:5px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top {
    transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem, 0.4rem;
    background: var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition: all 0.25s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover {
    color: var(--mainBlue);
    cursor:pointer;
}
`;