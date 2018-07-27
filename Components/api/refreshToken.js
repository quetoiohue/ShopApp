import saveToken from '../api/saveToken';

const refreshToken = (token) => (
    fetch('http://192.168.1.8:8888/app/check_login.php',
    {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    })
    .then(res => res.text())
    .then(savetoken => saveToken(savetoken))
);
module.exports = refreshToken;
