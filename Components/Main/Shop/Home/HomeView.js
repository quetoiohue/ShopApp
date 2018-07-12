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
    
        this.state = {
         // types: props.types,
        };
      }
    
    render() {
        const { wrapper } = styles;
        const { navigation } = this.props;
        const { types } = this.props;
        console.log('HV*************************');
        console.log(types);
        return (
             <ScrollView style={wrapper} >
                 <Collection navigation ={navigation} />
                 <Category navigation ={navigation} types = { types }/>
                <TopProduct navigation ={navigation} />
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

