import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    await AsyncStorage.setItem('@token', JSON.stringify(token));
};
export default saveToken;
