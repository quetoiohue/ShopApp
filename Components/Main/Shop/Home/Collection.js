import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, Image,
    TouchableOpacity
} from 'react-native';
import banner from '../../../../media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    gotoProductDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        const { wrapper, textStyle, imageStyle, BoxTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={BoxTitle}>
                    <Text style={textStyle}>
                        SPRING COLLECTION
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ flex: 4, justifyContent: 'flex-end' }}
                    onPress={this.gotoProductDetail.bind(this)}
                >
                    <Image source={banner} style={imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeght = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        elevation: 3,
        padding: 10,

    },
    BoxTitle: {
        height: 30,
        backgroundColor: '#EEE8AA',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    textStyle: {
        fontSize: 18,
        color: '#AFAEAF',

    },
    imageStyle: {
        height: imageHeght,
        width: imageWidth,
    }
});
export default Collection;
