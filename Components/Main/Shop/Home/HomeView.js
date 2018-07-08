import React, { Component } from 'react';
import { 
    StyleSheet, ScrollView,
 } from 'react-native';
import Collection from '../Home/Collection';
import Category from '../Home/Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        const { wrapper } = styles;
        const { navigation } = this.props;
        return (
             <ScrollView style={wrapper} >
                 <Collection navigation = {navigation} />
                 <Category navigation = {navigation} />
                <TopProduct navigation = {navigation} />
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

export default HomeView;

