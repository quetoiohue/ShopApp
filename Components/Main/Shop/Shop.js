import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './Header';

import ic_homes from '../../../media/appIcon/home.png';
import ic_home from '../../../media/appIcon/home0.png';
import ic_carts from '../../../media/appIcon/cart.png';
import ic_cart from '../../../media/appIcon/cart0.png';
import ic_contacts from '../../../media/appIcon/contact.png';
import ic_contact from '../../../media/appIcon/contact0.png';
import ic_searchs from '../../../media/appIcon/search.png';
import ic_search from '../../../media/appIcon/search0.png';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';

const { height } = Dimensions.get('window');
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
        };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    componentDidMount() {
        fetch('http://192.168.1.8:8888/app/') //eslint-disable-line
        .then(res => res.json())
        .then(resJSON => {
            const { type } = resJSON;
            this.setState({
                types: type,
            });
        });
        
    }
    render() {  
        
        const { icstyle } = styles;
        const { selectedTab } = this.state;
        const { types } = this.state;
        console.log('Shop*************************');
        console.log(types);
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={ic_home} style={icstyle} />}
                        renderSelectedIcon={() => <Image source={ic_homes} style={icstyle} />}
                        selectedTitleStyle={{ color: 'orange', fontFamily: 'Avenir' }}
                    >
                        <Home types={types} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'Cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                        renderIcon={() => <Image source={ic_cart} style={icstyle} />}
                        renderSelectedIcon={() => <Image source={ic_carts} style={icstyle} />}
                        badgeText="1"
                        selectedTitleStyle={{ color: 'orange', fontFamily: 'Avenir' }}
                    >
                        <Cart />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'Contact'}
                        title="Contact"
                        renderIcon={() => <Image source={ic_contact} style={icstyle} />}
                        renderSelectedIcon={() => <Image source={ic_contacts} style={icstyle} />}
                        onPress={() => this.setState({ selectedTab: 'Contact' })}
                        selectedTitleStyle={{ color: 'orange', fontFamily: 'Avenir' }}
                    >
                            <View style={{ flex: 1, backgroundColor: 'pink' }} />   
                        </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={ic_search} style={icstyle} />}
                        renderSelectedIcon={() => <Image source={ic_searchs} style={icstyle} />}
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                        selectedTitleStyle={{ color: 'orange', fontFamily: 'Avenir' }}
                    >
                        <Search />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icstyle: {
        width: 25,
        height: 25,
    },
});
export default Shop;
