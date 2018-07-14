import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const url = 'http://192.168.1.8:8888/app/images/product/';
class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    gotoDetail(e) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail', { obj: e });
    }

    render() {
        const { containers, ImageStyle, titlecontainer,
            productname, productprice, titlestyle,
            productcontainer, body } = styles;
        const { topProducts } = this.props.screenProps.user;
        return (
            <View style={containers}>
                <View style={titlecontainer}>
                    <Text style={titlestyle}> TOP PRODUCT </Text>
                </View>
                <View style={body}>
                    {
                        topProducts.map(e => (
                            <TouchableOpacity
                                style={productcontainer}
                                onPress={() => {this.props.navigation.navigate('ProductDetail', { product: e });
                            }}
                                key={e.id}
                            >
                                <Image source={{ uri: `${url}${e.images[0]}` }} style={ImageStyle} />
                                <Text style={productname}>
                                    {e.name.toUpperCase()}
                                </Text>
                                <Text style={productprice}>
                                    {e.price}$
                    </Text>
                            </TouchableOpacity>
                        ))}

                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productwidth = (width - 60) / 2;
const productheight = (productwidth / 361) * 414;

const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,

    },
    ImageStyle: {
        width: productwidth,
        height: productheight,
    },
    titlecontainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    productcontainer: {
        width: productwidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titlestyle: {
        color: '#D3D3CF',
        fontSize: 20,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 20,
    },
    productname: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: 'lawngreen',
        fontWeight: '100',
    },
    productprice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
    }
});
export default TopProduct;

