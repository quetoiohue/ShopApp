import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet, Image,
  Dimensions,
} from 'react-native';
import backs from '../../media/appIcon/backs.png';

export default class OrderHistory extends Component {
  gotoBackMain() {
    const { navigation } = this.props;
    navigation.navigate('Main');
  }
  render() {
    const { container, header, TextHeadStyle, Icstyle, containOrder, wrapper,
      boxRow, Textid, TextStt, TextTime, TextTotal } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <View style={{ backgroundColor: 'skyblue', height: 30, width: 30 }} />
          <Text style={TextHeadStyle}>  Order History </Text>
          <TouchableOpacity onPress={this.gotoBackMain.bind(this)}>
            <Image source={backs} style={Icstyle} />
          </TouchableOpacity>
        </View>
        <ScrollView style={wrapper}>
          <TouchableOpacity style={containOrder}>
            <View style={boxRow}>
              <Text > Order id: </Text>
              <Text style={Textid}> ORD1 </Text>
            </View>
            <View style={boxRow}>
              <Text> OrderTime: </Text>
              <Text style={TextTime}> 2018-07-10 7:48:13 </Text>
            </View>
            <View style={boxRow}>
              <Text> Status: </Text>
              <Text style={TextStt}> Pending </Text>
            </View>
            <View style={boxRow}>
              <Text> Total: </Text>
              <Text style={TextTotal}> 800$ </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={containOrder}>
            <View style={boxRow}>
              <Text> Order id: </Text>
              <Text style={Textid}> ORD1 </Text>
            </View>
            <View style={boxRow}>
              <Text> OrderTime: </Text>
              <Text style={TextTime}> 2018-07-10 7:48:13 </Text>
            </View>
            <View style={boxRow}>
              <Text> Status: </Text>
              <Text style={TextStt}> Pending </Text>
            </View>
            <View style={boxRow}>
              <Text> Total: </Text>
              <Text style={TextTotal}> 800$ </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'palegoldenrod',
    flex: 1,
    justifyContent: 'center',
  },
  containOrder: {
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 100,
    height: 100,
    padding: 10,
  },
  wrapper: {
    margin: 10,
    marginTop: 0,
    backgroundColor: 'palegoldenrod',
  },
  boxRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  Textid: {
    color: 'dodgerblue',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100',
  },
  TextTime: {
    color: 'hotpink',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100',
  },
  TextStt: {
    color: 'cyan',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100',
  },
  TextTotal: {
    color: 'magenta',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100',
  },
});
