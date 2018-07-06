import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


 export default class OrderHistory extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50, color: 'red' }}>OrderHistory Screen</Text>
            <Button
              title="Go back Main"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        );
      }
}
