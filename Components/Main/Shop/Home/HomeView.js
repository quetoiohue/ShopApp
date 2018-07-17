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
        
        };
      }
    
    render() {
        const { wrapper } = styles;
        const { screenProps, navigation } = this.props;
        // console.log('HomeV');
        // console.log(this.props.screenProps.user.topProducts);
        return (
             <ScrollView style={wrapper} >
                 <Collection navigation={navigation} />
                 <Category navigation={navigation} screenProps={screenProps} />
                <TopProduct navigation={navigation} screenProps={screenProps} />
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

