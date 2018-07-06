import React, { Component } from 'react';
import { 
    StyleSheet, ScrollView,
 } from 'react-native';
import Collection from '../Home/Collection';
import Category from '../Home/Category';
import TopProduct from './TopProduct';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        const { wrapper } = styles;
        return (
             <ScrollView style={wrapper}>
                 <Collection />
                 <Category />
                <TopProduct />
            </ScrollView>
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
