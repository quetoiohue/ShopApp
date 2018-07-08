import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootSearch = StackNavigator({
    ProductDetail: {
        screen: ProductDetail,
    },
    SearchView: {
        screen: SearchView,
    },
},
{
    headerMode: 'none',
    initialRouteName: 'SearchView',
}
);
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        const { navigation } = this.props;
        return (
            <RootSearch navigation={navigation} />
        );
    }
}

export default Search;
