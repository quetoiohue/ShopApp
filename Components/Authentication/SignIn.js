import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import signIn from '../api/signIn';
import global from '../global';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

   onSignIn() {
    const { email, password } = this.state;
    signIn(email, password)
      .then(res => {
        global.onSignIn(res.user);
        this.props.gotoBackMain();
      })
      .catch(err => console.log(err));
  }
  focusNextField(id) {
    this.inputs[id].focus();
  }
  
  render() {
    const { BoxSignIn, TextIPstyle, btnIPstyle } = styles;
    const { email, password } = this.state;
    return (
      <View style={BoxSignIn}>
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Email"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextField('pass');
          }}
          returnKeyType={'next'}
          ref={input => {
            this.inputs.email = input;
          }}
          
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='#fff'
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={text => this.setState({ password: text })}
          blurOnSubmit
          returnKeyType={'done'}
          ref={input => {
            this.inputs.pass = input;
          }}
        />
        <TouchableOpacity
          onPress={this.onSignIn.bind(this)}
          style={btnIPstyle}
        >
          <Text> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  TextIPstyle: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 70,
    paddingLeft: 30,
    justifyContent: 'center',
    marginBottom: 10
  },
  BoxSignIn: {
    height: height / 4,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 30
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
});
export default SignIn; 
