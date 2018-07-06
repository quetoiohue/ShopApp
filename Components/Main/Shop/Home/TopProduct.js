import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet, Dimensions,
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { containers, ImageStyle, titlecontainer,
            productname, productprice, titlestyle, 
        productcontainer, body } = styles;
        return (
            <View style={containers}>
                <View style={titlecontainer}>
                    <Text style={titlestyle}> TOP PRODUCT </Text>
                </View>
                <View style={body}>
                <View style={productcontainer}>
                    <Image source={sp1} style={ImageStyle} />
                    <Text style={productname}>
                        Summer Dress
                    </Text>
                    <Text style={productprice}>
                        210$
                    </Text>
                </View>
                <View style={productcontainer}>
                    <Image source={sp2} style={ImageStyle} />
                    <Text style={productname}>
                        Party Skirt 
                    </Text>
                    <Text style={productprice}>
                        300$
                    </Text>
                </View>
                <View style={{ height: 10, width }} />
                <View style={productcontainer}>
                    <Image source={sp3} style={ImageStyle} />
                    <Text style={productname}>
                        Floral Print T
                    </Text>
                    <Text style={productprice}>
                        133$
                    </Text>
                </View>
                <View style={productcontainer}>
                    <Image source={sp4} style={ImageStyle} />
                    <Text style={productname}>
                    Floral Print S
                    </Text>
                    <Text style={productprice}>
                        200$
                    </Text>
                </View>
                </View>
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
        color: '#D3D3CF',
        fontWeight: '500',
    },
    productprice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
    }
});
export default TopProduct;
