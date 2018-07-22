import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
  StyleSheet, Dimensions
} from 'react-native';
import backwhite from '../../media/appIcon/back_white.png';
import iclogo from '../../media/appIcon/ic_logo.png';
import register from '../api/register';
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';

const { height } = Dimensions.get('window');
export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true
    };
  }
  componentDidMount() {
    register('quang@gmail.com', 'quang', '123')
    .then(res => console.log(res));
  }
  gotoBack() {
    this.props.navigation.navigate('Main');
  }
  SignIn() {
    this.setState({ isSignIn: true });
  }
  SignUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const { container, header, Icstyle, TextHeadStyle
      , boxSign, btnSignIn, btnSignUp, TextbtnON, TextbtnOFF } = styles;
    const mainJSX = this.state.isSignIn ? <SignIn gotoBackMain={this.gotoBack.bind(this)}/> : <SignUp gotoSignIn={this.SignIn.bind(this)}/>;

    return (
      <View style={container}>
        <View style={header}>
          <TouchableOpacity onPress={this.gotoBack.bind(this)}>
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
