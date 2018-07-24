import React, { Component } from 'react';
import {
  Dimensions, View, Text, TouchableOpacity, Image,
  TextInput, StyleSheet, Alert
} from 'react-native';
import backs from '../../media/appIcon/backs.png';
import getToken from '../api/getToken';
import changinfo from '../api/changeinfo';
import global from '../global';

export default class Changinfo extends Component {
  constructor(props) {
    super(props);
      const user = this.props.navigation.getParam('user');
     const { name, address, phone } = user;
    this.state = {
      txtName: name,
      txtAddress: address,
      txtPhone: phone,

    };
  }
  
  changeSuccess() {
    Alert.alert(
        'Notice',
        'Update Successfully',
        [
          { text: 'OK', onPress: this.gotoBackMain.bind(this) },
        ],
        { cancelable: false }
      );
}
  change() {
    const { txtName, txtAddress, txtPhone } = this.state;
    getToken()
    .then(res => JSON.parse(res))
    .then(token => changinfo(token, txtName, txtAddress, txtPhone))
    .then( user => {
      this.changeSuccess();
      global.onSignIn(user);
    })
    .catch(err => console.log(err));
  }
  gotoBackMain() {
    const { navigation } = this.props;
    navigation.navigate('Main');
  }
  render() {
    const { container, header, Icstyle, TextHeadStyle,
      TextIPstyle, btnIPstyle, BoxSignUp } = styles;
    const { txtName, txtAddress, txtPhone } = this.state;
    return (
      <View style={container}>
        <View style={header}>
          <View style={{ backgroundColor: 'skyblue', height: 30, width: 30 }} />
          <Text style={TextHeadStyle}> User Infomation </Text>
          <TouchableOpacity onPress={this.gotoBackMain.bind(this)}>
            <Image source={backs} style={Icstyle} />
          </TouchableOpacity>

        </View>
        <View style={BoxSignUp}>
          <TextInput
            style={TextIPstyle}
            underlineColorAndroid='transparent'
            placeholder="Enter your Name"
            value={txtName}
            onChangeText ={text => this.setState({ txtName: text })}
          />
          <TextInput
            style={TextIPstyle}
            underlineColorAndroid='transparent'
            placeholder="Enter your Address"
            value={txtAddress}
            onChangeText ={text => this.setState({ txtAddress: text })}
          />
          <TextInput
            style={TextIPstyle}
            underlineColorAndroid='transparent'
            placeholder="Enter your Phone Number"
            value={txtPhone}
            onChangeText ={text => this.setState({ txtPhone: text })}
          />
          <TouchableOpacity
            onPress= {this.change.bind(this)}
           style={btnIPstyle}
          >
            <Text> CHANGE YOUR INFOMATION </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 30, width: 30 }} />
      </View>
    );
  }
}
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'palegoldenrod',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height / 14,
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  BoxSignUp: {
    height: height / 2.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,

  },
  Icstyle: {
    height: 30,
    width: 30,
  },
  TextHeadStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '300',
  },
  TextIPstyle: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 70,
    paddingLeft: 30,
    justifyContent: 'center',
    marginBottom: 10
  },
  btnIPstyle: {
    backgroundColor: 'skyblue',
    height: 40,
    borderRadius: 70,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center'
  },
});
