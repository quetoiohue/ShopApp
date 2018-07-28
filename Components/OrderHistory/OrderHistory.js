import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet, Image,
  Dimensions,
} from 'react-native';
import backs from '../../media/appIcon/backs.png';
import getOrder from '../api/getOrder';
import getToken from '../api/getToken';

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOrder: [],
    };
  }
  componentDidMount() {
    getToken()
    .then( token => JSON.parse(token))
    .then( token => getOrder(`${token}`))
      .then(arrOrder => {
        console.log('arrGet: ' + arrOrder);
        this.setState({ arrOrder });
      })
      .catch(err => console.log('GetOrder: ', err));
  }
  gotoBackMain() {
    const { navigation } = this.props;
    navigation.navigate('Main');
  }
  render() {
    const { container, header, TextHeadStyle, Icstyle, containOrder, wrapper,
      boxRow, Textid, TextStt, TextTime, TextTotal } = styles;
    const { arrOrder } = this.state;
    console.log('arrorder : ', arrOrder);
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
          {arrOrder.map(e => (
            <TouchableOpacity style={containOrder} key={e.id}>
              <View style={boxRow}>
                <Text> Order id: </Text>
                <Text style={Textid}> ORD{e.id} </Text>
              </View>
              <View style={boxRow}>
                <Text> OrderTime: </Text>
                <Text style={TextTime}> {e.date_order} </Text>
              </View>
              <View style={boxRow}>
                <Text> Status: </Text>
                <Text style={TextStt}> {e.status} </Text>
              </View>
              <View style={boxRow}>
                <Text> Total: </Text>
                <Text style={TextTotal}> {e.total}$ </Text>
              </View>
            </TouchableOpacity>
          ))}
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
