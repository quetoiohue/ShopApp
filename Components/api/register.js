const register = (email, name, password) => (
        fetch('http://192.168.1.4:8888/app/register.php',
        {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, password }),
        })
        .then(res => res.text())
);
module.exports = register;
