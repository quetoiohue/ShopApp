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
        
        };
    }
    
    render() {
            const { navigation } = this.props;
           
        return (
            <RootCart navigation={navigation} screenProps={this.props.cartArray} />
        );
    }
}

export default Cart;
