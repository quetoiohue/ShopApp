import React, { Component } from 'react';
import { 
    StyleSheet, ScrollView,
 } from 'react-native';
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
        const newLocal = <RootHome {...this.props.navigation} />;
        return (
             newLocal
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'silver',
    }
});

export default Home;
