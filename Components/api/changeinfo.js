const changeinfo = (token, name , address , phone ) => (
    fetch('http://192.168.1.4:8888/app/change_info.php',
    {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, name , address , phone }),
    })
    .then(res => res.json())
);
module.exports = changeinfo;
