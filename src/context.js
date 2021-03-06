import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

 class ProductProvider extends Component {
     state = {
         products:storeProducts,
         detailProduct:detailProduct
     }
     handleDetail = () => {
         console.log('hello from detail');
     }
     addToCart = () => {
         console.log('Hello from add to cart');
     };

     tester = () => {
         console.log('State products :',this.state.products[0].inCart);
         console.log('Data products :', storeProducts[0].inCart);

         const tempProducts = {...this.state.products};
         tempProducts[0].inCart = true
         this.setState(() =>{
             return {products:tempProducts}
         },()=> {

         })
     }

    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state,
             handleDetail:this.handleDetail,
              addToCart:this.addToCart
              }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
  
export {ProductProvider, ProductConsumer};