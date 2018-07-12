import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';

import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';


const { height } = Dimensions.get('window');
class Header extends Component {

    render() {
        const { wrapper, box, iconH, TextIP, titlestyle } = styles;
        return (
            <View style={wrapper}>
                <View style={box}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconH} />
                    </TouchableOpacity>
                    <Text style={titlestyle}> Wearing a Dress </Text>
                    <Image source={icLogo} style={iconH} />
                </View>
                <TextInput
                    style={TextIP}
                    underlineColorAndroid='transparent'
                    placeholder="what do you want search ?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: 'skyblue',
        padding: 10,
        justifyContent: 'space-around',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconH: {
        width: 25,
        height: 25,
    },
    titlestyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    TextIP: {
        height: height / 20,
        backgroundColor: '#FFF',
        paddingLeft: 10,
    }
});
export default Header;
