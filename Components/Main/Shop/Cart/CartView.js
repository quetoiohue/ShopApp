import React, { Component } from 'react';
import {
    TouchableOpacity, Text, View, Image, StyleSheet,
    Dimensions, ListView
} from 'react-native';

const url = 'http://192.168.1.8:8888/app/images/product/';
class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quantity: 0,
           
        };
    }
    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    addQuantityProduct() {
        this.setState({
            Quantity: this.state.Quantity + 1
        });
    }
    subQuantityProduct() {
        this.setState({
            Quantity: this.state.Quantity === 0 ? 0 : this.state.Quantity - 1
        });
    }
    render() {
        const { main, wrapper, boxProduct, ImageProduct, boxRight, boxName,
            textPrice, boxBottom, boxAdd, btnAdd, AddText, btnSub,
            textName, textDetail, checkoutButton, checkoutTitle } = styles;
        // const { cartArray } = this.props;
        const cartArray = this.props.screenProps;
        console.log('**CartView');
        console.log(cartArray);
        return (
            <View style={wrapper}>
                <ListView
                    contentContainerStyle={main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({
                        rowHasChanged: (r1, r2) => r1 !== r2
                    }).cloneWithRows(cartArray)}
                    renderRow={cartItem => (
                        <View style={boxProduct}>
                            <Image source={{ uri: `${url}${cartItem.product.images[0]}` }} style={ImageProduct} />
                            <View style={boxRight}>
                                <View style={boxName}>
                                    <Text style={textName}> {cartItem.product.name} </Text>
                                    <TouchableOpacity>
                                        <Text> X </Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={textPrice}> {cartItem.product.price}$ </Text>
                                </View>
                                <View style={boxBottom}>
                                    <View style={boxAdd}>
                                        <TouchableOpacity style={btnAdd} onPress={this.addQuantityProduct.bind(this)}>
                                            <Text style={AddText}> + </Text>
                                        </TouchableOpacity>
                                        <Text style={AddText}> {cartItem.quantity} </Text>
                                        <TouchableOpacity style={btnSub} onPress={this.subQuantityProduct.bind(this)}>
                                            <Text style={AddText}> - </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={textDetail}> SHOW DETAILS </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity style={checkoutButton} >
                    <Text style={checkoutTitle}>TOTAL 1000$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    ImageProduct: {
        height: imageHeight,
        width: imageWidth,

    },
    boxRight: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
        // margin: 10,
    },
    boxProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        elevation: 6,
    },
    boxName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPrice: {
        color: 'hotpink',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    boxAdd: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    boxBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnAdd: {
        borderRightColor: 'dimgray',
        width: 25,
    },
    btnSub: {
        borderLeftColor: 'dimgray',
        width: 25,
    },
    AddText: {
        fontSize: 16,
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: 'darkslategray',
    },
    textName: {
        fontSize: 18,
        fontFamily: 'Avenir',
        fontWeight: '200',
        color: 'darkslategray',
    },
    textDetail: {
        fontSize: 14,
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: 'limegreen',
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },


});
export default CartView;
