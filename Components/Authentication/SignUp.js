import React, { Component } from 'react';
import {  
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Alert
 } from 'react-native';
import register from '../../Components/api/register';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            repassword: '',
        }; 
    }
    
    
    onSuccess() {
        Alert.alert(
            'Notice',
            'SignUp Successfully',
            [
              { text: 'OK', onPress: () => console.log('Ask me later pressed') },
            ],
            { cancelable: false }
          );
    }
    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
              { text: 'OK', onPress: () => this.setState({ email: '' }) },
            ],
            { cancelable: false }
          );
    }
    registerUser() {
        const { email, name, password } = this.state;
        register(email, name, password)
        .then(res => { 
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
         });
    }

    render() {
        const { BoxSignUp, TextIPstyle, btnIPstyle } = styles;
        return (
            <View style={BoxSignUp}>
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='transparent'
          placeholder="Enter your Email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='transparent'
          placeholder="Enter your Name"
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='transparent'
          secureTextEntry
          placeholder="Enter your password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={TextIPstyle}
          underlineColorAndroid='transparent'
          secureTextEntry
          placeholder="Re-Enter your password"
          value={this.state.repassword}
          onChangeText={text => this.setState({ repassword: text })}
        />
        <TouchableOpacity 
        onPress={this.registerUser.bind(this)}
        style={btnIPstyle}
        >
          <Text> SIGN UP NOW </Text>
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
      BoxSignUp: {
        height: height / 2.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
export default SignUp;
