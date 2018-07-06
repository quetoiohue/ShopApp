import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
  TextInput, StyleSheet, Dimensions
} from 'react-native';
import backwhite from '../../media/appIcon/back_white.png';
import iclogo from '../../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');
export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true
    };
  }
  gotoBack() {
    this.props.navigation.goBack();
  }
  SignIn() {
    this.setState({ isSignIn: true });
  }
  SignUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const { container, header, Icstyle, TextHeadStyle,
      TextIPstyle, BoxSignIn, btnIPstyle, boxSign, BoxSignUp,
      btnSignIn, btnSignUp, TextbtnON, TextbtnOFF } = styles;
    const SignInJSX = (
      <View style={BoxSignIn}>
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TouchableOpacity style={btnIPstyle}>
          <Text> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const SignUpJSX = (
      <View style={BoxSignUp}>
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
        />
        <TouchableOpacity style={btnIPstyle}>
          <Text> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const mainJSX = this.state.isSignIn ? SignInJSX : SignUpJSX;
    return (
      <View style={container}>
        <View style={header}>
          <TouchableOpacity onPress = {this.gotoBack.bind(this)}>
            <Image source={backwhite} style={Icstyle} />
          </TouchableOpacity>
          <Text style={TextHeadStyle}> Wearing a Dress </Text>
          <Image source={iclogo} style={Icstyle} />
        </View>
        {mainJSX}
        <View style={boxSign}>
          <TouchableOpacity style={btnSignIn} onPress={this.SignIn.bind(this)}>
            <Text style={this.state.isSignIn ? TextbtnON : TextbtnOFF}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignUp} onPress={this.SignUp.bind(this)}>
            <Text style={this.state.isSignIn ? TextbtnOFF : TextbtnON}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height / 10,
    padding: 10,
    marginVertical: 8
    ,
  },
  Icstyle: {
    height: 30,
    width: 30,
  },
  TextHeadStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 22,
  },
  BoxSignIn: {
    height: height / 4,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 30
  },
  BoxSignUp: {
    height: height / 2.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30
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
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center'
  },
  boxSign: {
    height: height / 16,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 15
  },
  btnSignIn: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 70,
    borderTopLeftRadius: 70,
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  btnSignUp: {
    backgroundColor: 'white',
    borderBottomRightRadius: 70,
    borderTopRightRadius: 70,
    height: 40,
    paddingLeft: 5,
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextbtnON: {
    color: 'skyblue',
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  TextbtnOFF: {
    color: 'dimgray',
    fontFamily: 'Avenir',
    fontSize: 16,
  }
});
