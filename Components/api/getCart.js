import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            console.log('We have data!!');
          console.log(value);
          return JSON.parse(value);
        }
        return [];
       } catch (error) {
         // Error retrieving data
         console.log('we dont have data');
         return [];
       }
};
export default getCart;
