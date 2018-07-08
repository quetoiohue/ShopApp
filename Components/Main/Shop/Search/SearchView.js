import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class SearchView extends Component {
    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text> Search Component </Text>
                <TouchableOpacity
                    onPress={this.gotoDetail.bind(this)}
                    style={{ flex: 1, backgroundColor: 'gray' }}
                >
                    <Text style={{ color: 'black' }}> Go to Detail </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default SearchView;
