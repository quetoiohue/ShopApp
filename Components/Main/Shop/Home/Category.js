import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, ImageBackground,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const url = 'http://192.168.1.8:8888/app/images/type/';
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
        const { types } = this.props;
        console.log('Category*************************');
        console.log(types);
        return (
            <View style={wrapper}>
                <View style={BoxTitle}>
                    <Text style={textStyle}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                         {/* { types.map(e => (
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
                            <ImageBackground source={{ uri: '${url}${e.image}' }} style={imageStyle} >
                                <Text style={catetitle}> {e.name} </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        ))
                        } */}
                        <Text> ookoko </Text>
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
