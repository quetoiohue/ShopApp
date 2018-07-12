import React, { Component } from 'react';
import {
  Dimensions, View, Text, TouchableOpacity, Image,
  TextInput, StyleSheet
} from 'react-native';
import backs from '../../media/appIcon/backs.png';

export default class Changinfo extends Component {
  gotoBackMain() {
    const { navigation } = this.props;
    navigation.navigate('Main');
  }
  render() {
    const { container, header, Icstyle, TextHeadStyle,
      TextIPstyle, btnIPstyle, BoxSignUp } = styles;
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
            underlineColorAndroid='#fff'
            placeholder="Enter your Name"
          />
          <TextInput
            style={TextIPstyle}
            underlineColorAndroid='#fff'
            placeholder="Enter your Address"
          />
          <TextInput
            style={TextIPstyle}
            underlineColorAndroid='#fff'
            placeholder="Enter your Phone Number"
          />
          <TouchableOpacity style={btnIPstyle}>
            <Text> CHANGE YOUR INFOMATION </Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'skyblue', height: 30, width: 30 }} />
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
