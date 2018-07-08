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
        const { navigate } = this.props.navigation;
        return (
             <ScrollView style={wrapper} >
                 <Collection navigate={navigate} />
                 <Category navigate={navigate} />
                <TopProduct navigate={navigate} />
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

