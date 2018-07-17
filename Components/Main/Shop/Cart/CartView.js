import React, { Component } from 'react';
import {
    TouchableOpacity, Text, View, Image, StyleSheet,
    Dimensions, ListView
} from 'react-native';

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quantity: 0,
            cartArray: this.props
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
        const { wrapper, boxProduct, ImageProduct, boxRight, boxName,
            textPrice, boxBottom, boxAdd, btnAdd, AddText, btnSub,
            textName, textDetail } = styles;
        const { cartArray } = this.props;
        console.log('**CartView');
        console.log(cartArray);
        return (
            <View style={wrapper}>
                {/* <ListView
                    enableEmptySections
                    dataSource={new ListView.DataSource({
                        rowHasChanged: (r1, r2) => r1 !== r2
                    }).cloneWithRows(cartArray)}
                    renderRow={() => <Text> DDD </Text>}
                /> */}
                <View style={boxName}>
                                <Text style={textName}> LagVeRo Davici </Text>
                                <TouchableOpacity>
                                    <Text> XL </Text>
                                </TouchableOpacity>
                            </View>
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
        backgroundColor: 'palegoldenrod',
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
        borderColor: 'dimgray',
        borderWidth: 1,
        borderRadius: 30,
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
    }

});
export default CartView;
        // <View style={boxProduct}>
        //                 <Image source={{ uri: 'http://192.168.1.8:8888/app/images/product/56.jpeg' }} style={ImageProduct} />
        //                 <View style={boxRight}>
                            
        //                     <View>
        //                         <Text style={textPrice}> 178$ </Text>
        //                     </View>
        //                     <View style={boxBottom}>
        //                     <View style={boxAdd}>
        //                         <TouchableOpacity style={btnAdd} onPress={this.addQuantityProduct.bind(this)}>
        //                             <Text style={AddText}> + </Text>
        //                         </TouchableOpacity>
        //                         <Text style={AddText}> {this.state.Quantity} </Text>
        //                         <TouchableOpacity style={btnSub} onPress={this.subQuantityProduct.bind(this)}>
        //                             <Text style={AddText}> - </Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                         <TouchableOpacity>
        //                             <Text style={textDetail}> SHOW DETAILS </Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </View>
