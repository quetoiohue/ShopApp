import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import profile from '../../media/temp/profile.png';


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  gotoAuthentication() {
    const { navigate } = this.props;
    navigate('Authentication');
  }
  gotoChangeInfo() {
    const { navigate } = this.props;
    navigate('Changeinfo');
  }
  gotoOrderHistory() {
    const { navigate } = this.props;
    navigate('OrderHistory');
  }
  gotoMain() {
    const { navigate } = this.props;
    navigate('Main');
  }
  render() {
    const { container, profiles, btnSignInStyle,
      btnTextSignIn, loginContainer, username } = styles;
    const logInJSX = (
      <View style={loginContainer}>
        <Text style={username}> Tran Van Quang </Text>
        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
            <Text style={btnTextSignIn}> Order History </Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
            <Text style={btnTextSignIn}> Change Info </Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoAuthentication.bind(this)}>
            <Text style={btnTextSignIn}> Sign Out </Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'skyblue' }} />
      </View>
    );
    const logOutJSX = (
      <View style={loginContainer}>
        <TouchableOpacity style={btnSignInStyle}
          onPress={this.gotoAuthentication.bind(this)}>
          <Text style={btnTextSignIn}> Sign In </Text>
        </TouchableOpacity>
      </View>
    );
    const mainJSX = (this.state.isLogin) ? logInJSX : logOutJSX;
    return (

      <View style={container}>
        <Image source={profile} style={profiles} />
        {mainJSX}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderColor: '#FFF',
    borderRightWidth: 3,
    alignItems: 'center',
    ///justifyContent: 'space-between',
  },
  profiles: {
    width: 90,
    height: 90,
    marginVertical: 30,
    borderRadius: 70,
  },
  btnStyle: {
    backgroundColor: '#FFF',
    height: 50,
    paddingHorizontal: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignInStyle: {
    backgroundColor: '#FFF',
    height: 50,
    width: 200,
    borderRadius: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 10,
  },
  btnTextSignIn: {
    color: 'skyblue',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
});
