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
                        {inCart?(<p className="text-capitalize mb-0" disabled>{" "} In Cart</p>):(<i><CartLogo /></i>)}
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
    return (
      <img src={cart_logo} height={20}/>
    )
  }


const ProductWrapper = styled.div`


`