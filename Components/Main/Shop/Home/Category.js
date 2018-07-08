import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, ImageBackground,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import fit from '../../../../media/temp/fit.jpg';
import little from '../../../../media/temp/little.jpg';
import maxi from '../../../../media/temp/maxi.jpg';

const { height, width } = Dimensions.get('window');

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    gotoListProduct() {
        const { navigation } = this.props;
        navigation.navigate('ListProduct');
    }
    render() {
        const { wrapper, textStyle, imageStyle, catetitle, BoxTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={BoxTitle}>
                    <Text style={textStyle}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <ImageBackground source={fit} style={imageStyle} >
                                <Text style={catetitle}> Maxi Dress </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <ImageBackground source={little} style={imageStyle}>
                                <Text style={catetitle}> Maxi Dress </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                            <ImageBackground source={maxi} style={imageStyle} >
                                <Text style={catetitle}> Maxi Dress </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View >
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 930) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 100,
        padding: 10,
        marginTop: 0
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
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catetitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: 'gray',
    },
});
export default Category;
