import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class ListProduct extends Component {
    goback() {
        const { goBack } = this.props.navigation;
        goBack();
    }
    render() {
        return (
            <TouchableOpacity 
            onPress={this.goback.bind(this)}
            style={{ flex: 1, backgroundColor: 'gray' }}
            >
            <Text> GoBack </Text>
            </TouchableOpacity>
        );
    }
}

export default ListProduct;
