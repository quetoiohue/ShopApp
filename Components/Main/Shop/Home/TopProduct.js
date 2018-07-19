import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView
} from 'react-native';

const url = 'http://192.168.1.4:8888/app/images/product/';
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
                <ListView
                    enableEmptySections
                    contentContainerStyle={body}
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product1 => (
                        <TouchableOpacity
                            style={productcontainer}
                            onPress={() => {
                                this.props.navigation.navigate('ProductDetail', { product: product1 });
                                    }}
                            key={product1.id}
                        >
                            <Image source={{ uri: `${url}${product1.images[0]}` }} style={ImageStyle} />
                            <Text style={productname}>
                                {product1.name.toUpperCase()}
                            </Text>
                            <Text style={productprice}>
                                {product1.price}$
                            </Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productwidth = (width - 60) / 2;
const productheight = (productwidth / 361) * 452;

const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 3
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
        elevation: 3,
        backgroundColor: '#fff'
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

