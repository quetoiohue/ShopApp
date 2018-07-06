import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


 export default class Changeinfo extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50, color: 'red' }}>Changeinfo Screen</Text>
            <Button
              title="Go back Main"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        );
      }
}
