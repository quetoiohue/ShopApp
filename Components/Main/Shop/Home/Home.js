import React, { Component } from 'react';
 import { createStackNavigator } from 'react-navigation';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import HomeView from './HomeView';

class Home extends Component {
    
    constructor(props) {
        super(props);
    
        this.setState = {
        types: this.state.types,
        };
      }
    
    // componentWillReceiveProps(nextProps) {
    //     // update original states
    //     this.setState({
    //       types: nextProps.types,
    //     });
    //     console.log('.......Home*************************');
    //     console.log(this.state.types);
    // }
    render() {
        
        const { navigation } = this.props;
        const { types } = this.state;
        console.log('Home*************************');
        console.log(types);
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
