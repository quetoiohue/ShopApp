import React, { Component } from 'react';
import {
    TouchableOpacity, Text, View, StyleSheet,
    Image, ListView, RefreshControl
} from 'react-native';
import ic_backList from '../../../../media/appIcon/backList.png';
import getListproduct from '../../../api/getListproduct';


const url = 'http://192.168.1.8:8888/app/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProduct: ds,
            refreshing: false,
            page: 1,
            category: this.props.navigation.getParam('category'),
        };
        this.arr = [];
    }
    componentDidMount() {
        const idType = this.state.category.id;
        getListproduct(idType, 1)
            .then(res => {
                this.arr = res;
                this.setState({ listProduct: this.state.listProduct.cloneWithRows(this.arr) });
            })
            .catch(err => console.log(err));
    }
    goback() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    gotoDetail(e ) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail' , {product: e});
    }
    render() {
        const { container, Icback, TextHeader, wrapper,
            ImaStyle, containDetail, TextName, header,
            TextPrice, TextPrize, wrapperaround } = styles;
        const category = this.props.navigation.getParam('category');
        return (
            <View style={container}>
                <View style={wrapperaround}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goback.bind(this)}>
                            <Image source={ic_backList} style={Icback} />
                        </TouchableOpacity>
                        <Text style={TextHeader}> {category.name} </Text>
                        <View style={{ width: 25, height: 25 }} />
                    </View>
                    <ListView
                        dataSource={this.state.listProduct}
                        renderRow={product => (
                            <TouchableOpacity 
                            onPress = {() => this.gotoDetail(product)}
                             style={wrapper}>
                                <Image source={{ uri: `${url}${product.images[0]}` }} style={ImaStyle} />
                                <View style={containDetail}>
                                    <Text style={TextName}> {toTitleCase(product.name)} </Text>
                                    <Text style={TextPrice}> {product.price}$ </Text>
                                    <Text style={TextPrize}> {product.material} </Text>
                                </View>
                                <View style={{ backgroundColor: 'white', width: 10 }} />
                            </TouchableOpacity>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({
                                        refreshing: true
                                    });
                                    const idType = category.id;
                                    const newpage = this.state.page + 1;
                                    getListproduct(idType, newpage)
                                        .then(arrP => {
                                            this.arr = arrP.concat(this.arr);
                                            this.setState({
                                                listProduct: this.state.listProduct.cloneWithRows(this.arr),
                                                refreshing: false
                                            });
                                        })
                                        .catch(err => console.log(err));
                                }}
                            />
                        }
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
    wrapperaround: {
        margin: 10,
        backgroundColor: 'white',
    },
    wrapper: {
        marginTop: 5,
        margin: 0,
        height: 150,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        elevation: 6
    },
    header: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
