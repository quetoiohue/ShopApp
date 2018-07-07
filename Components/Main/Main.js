import React, { Component } from 'react';
import { 
 Dimensions,
 } from 'react-native';
//import CC from './Menu'
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from './Menu';


const { height } = Dimensions.get('window');
 export default class Main extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
   render() {
     const { navigate } = this.props.navigation;
     return (
        <Drawer
        openDrawerOffset={0.4}
        tapToClose
        ref={(ref) => this._drawer = ref}
        content={<Menu navigate={navigate} />}
        >
         <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>
     );
   }
 }
