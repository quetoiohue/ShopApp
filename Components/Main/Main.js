import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from './Menu';
import checkLogin from '../api/checkLogin';
import getToken from '../api/getToken';
import global from '../global';
import refreshToken from '../api/refreshToken';

export default class Main extends Component {

  componentDidMount() {
    getToken()
    .then(token1 => JSON.parse(token1))
    .then(token => checkLogin(token))
    .then(res => global.onSignIn(res.user))
    .catch(err => console.log('LOI CHECK LOGIN', err));

    // setInterval(() => {
    //   getToken()
    //   .then(token => refreshToken(token));
    // } , 5 * 1000);
}

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    const { navigation } = this.props;
    return (
      <Drawer
        openDrawerOffset={0.4}
        tapToClose
        ref={(ref) => this._drawer = ref}
        content={<Menu navigation={navigation} />}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
