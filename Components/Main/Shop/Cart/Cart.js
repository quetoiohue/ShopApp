import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootCart = StackNavigator({
    ProductDetail: {
        screen: ProductDetail,
    },
    CartView: {
        screen: CartView,
        
    },
},
{
    headerMode: 'none',
    initialRouteName: 'CartView',
}
);
class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
           // cartArray: this.props
        };
    }
    render() {
           // const { cartArray } = this.state; 
            const { navigation, cartArray } = this.props;
            
            console.log('**Cart');
            console.log(cartArray);
        return (
            <RootCart navigation={navigation} cartArray = {cartArray}/>
        );
    }
}

export default Cart;
