import saveToken from '../api/saveToken';
import getToken from './getToken';

const getNewToken = (token) => (
    fetch('http://192.168.1.8:8888/app/refresh_token.php',
    {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    })
    .then(res => res.text())
    //.then(savetoken => saveToken(savetoken))
);

const refreshToken = async () => {
    try{
        const token1 = await getToken()
        const token = JSON.parse(token1);
        console.log('token CU: ' , token);
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE'){
            console.log('chua co token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
        console.log('Token moi : ', newToken);
    }
    catch(e){
        console.log(e);
    }
}
module.exports = refreshToken;
