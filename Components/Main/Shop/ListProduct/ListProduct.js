import React, { Component } from 'react';
import {
    TouchableOpacity, Text, View, StyleSheet,
    Image, ListView
} from 'react-native';
import Header from '../Header';
import ic_backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/appIcon/maxi.jpeg';
import sp2 from '../../../../media/appIcon/midi.jpeg';
import sp3 from '../../../../media/appIcon/mini.jpeg';
import sp4 from '../../../../media/appIcon/party.jpeg';
import getListproduct from '../../../api/getListproduct';


const url = 'http://192.168.1.4:8888/app/images/product/';
class ListProduct extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1 , r2) => r1 !== r2});
        this.state= {
            listProduct: ds
        }
    }
    componentDidMount() {
        getListproduct(4,1)
        .then(res => {
            this.setState({ listProduct: this.state.listProduct.cloneWithRows(res)});
        })
        .catch(err => console.log(err));
    }
    goback() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    gotoDetail() {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }
    render() {
        const { container, Icback, TextHeader, wrapper,
            ImaStyle, containerScroll, containDetail, TextName, Header,
            TextPrice, TextPrize, wrapperaround } = styles;
        const category = this.props.navigation.getParam('category');
        return (
            <View style={container}>
                <View style={wrapperaround}>
                <View style={Header}>
                    <TouchableOpacity onPress = {this.goback.bind(this)}>
                        <Image source={ic_backList} style={Icback} />
                    </TouchableOpacity>
                    <Text style={TextHeader}> {category.name} </Text>
                    <View style={{ width: 25, height: 25 }} />
                </View>
                <ListView 
                dataSource = {this.state.listProduct}
                renderRow = { product => (
                    <TouchableOpacity style={wrapper}>
                    <Image source={{ uri: `${url}${product.images[0]}`}} style={ImaStyle} />
                    <View style={containDetail}>
                        <Text style={TextName}> {product.name} </Text>
                        <Text style={TextPrice}> {product.price}$ </Text>
                        <Text style={TextPrize}> {product.material} </Text>
                    </View>
                    <View style={{ backgroundColor: 'white', width: 10 }} />
            </TouchableOpacity>
                )}
                />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender',
    
    },
    containerScroll: {
        margin: 10,
        marginTop: 0,
        backgroundColor: 'white',
    },
    wrapper: {
        height: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lavender',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    Header: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lavender',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 1,
        shadowRadius: 100,
        margin: 10,
        marginBottom: 0,
    },
    containDetail: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 0,
    },
    ImaStyle: {
        height: 120,
        width: (120 * 361) / 452,
        //margin: 10
    },
    Icback: {
        height: 25,
        width: 25,
    },
    TextHeader: {
        color: 'hotpink',
        fontSize: 18,
        fontFamily: 'Avenir',
        fontWeight: '200',
    },
    TextName: {
        color: 'silver',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Avenir',
    },
    TextPrice: {
        color: 'hotpink',
        fontSize: 14,
        fontFamily: 'Avenir',
        fontWeight: '200',
    },
    TextPrize: {
        color: 'gold',
        fontSize: 14,
        fontFamily: 'Avenir',
        fontWeight: '200',
    }
});
export default ListProduct;

/*

                <ScrollView style={containerScroll}>
                    <TouchableOpacity style={wrapper}>
                        <Image source={sp1} style={ImaStyle} />
                        <View style={containDetail}>
                            <Text style={TextName}> Maxi Light Rop </Text>
                            <Text style={TextPrice}> 300$ </Text>
                            <Text style={TextPrize}> Prize: 5 sao </Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={wrapper}>
                        <Image source={sp2} style={ImaStyle} />
                        <View style={containDetail}>
                            <Text style={TextName}> Gored Skirt </Text>
                            <Text style={TextPrice}> 350$ </Text>
                            <Text style={TextPrize}> Prize: 5 sao </Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={wrapper}>
                        <Image source={sp3} style={ImaStyle} />
                        <View style={containDetail}>
                            <Text style={TextName}> Sheath Skirt White </Text>
                            <Text style={TextPrice}> 300$ </Text>
                            <Text style={TextPrize}> Prize: 4.5 sao </Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={wrapper}>
                        <Image source={sp4} style={ImaStyle} />
                        <View style={containDetail}>
                            <Text style={TextName}> Sheath Skirt </Text>
                            <Text style={TextPrice}> 220$ </Text>
                            <Text style={TextPrize}> Prize: 4 sao </Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 10 }} />
                    </TouchableOpacity>
                </ScrollView>
*/