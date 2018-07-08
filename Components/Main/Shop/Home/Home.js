import React, { Component } from 'react';
 import { createStackNavigator } from 'react-navigation';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import HomeView from './HomeView';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        //const Local = <RootHome {...this.props.navigation} />;
        const { navigation } = this.props;
        return (
             <RootHome navigation = {navigation} />
        );
    }
}

const RootHome = createStackNavigator({
    ListProduct: {
        screen: ListProduct,
    },
    ProductDetail: {
        screen: ProductDetail,
    },
    HomeView: {
        screen: HomeView,
    
    },
},
{
    headerMode: 'none',
    initialRouteName: 'HomeView',
}
);
export default Home;
