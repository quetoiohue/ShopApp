import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class CartView extends Component {
    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: 'gray' }}
            >
                <Text> Cart Component </Text>
                <TouchableOpacity
                    onPress={this.gotoDetail.bind(this)}
                    style={{ flex: 1, backgroundColor: 'gray' }}
                >
                    <Text> Go to Detail </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default CartView;
