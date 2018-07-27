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
import global from '../../global';
import searchproduct from '../../api/searchproduct';

const { height } = Dimensions.get('window');
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
        };
    }

    onSearch(){
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        searchproduct(txtSearch)    
        .then(arrP => {
            global.setSearchArr(arrP);
        })
        .catch(err => console.log(err));
    }
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
                    multiline={false}
                    underlineColorAndroid='transparent'
                    placeholder="what do you want search ?"
                    onChangeText={text => this.setState({ txtSearch: text })}
                    value={this.state.txtSearch}
                    onFocus={() => global.gotoSearch()}
                    onSubmitEditing={this.onSearch.bind(this)}
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
        //paddingLeft: 10,
        opacity: 0.9
    }
});
export default Header;
