const sendOrder = (arrayDetail, token) => {
    const data = { arrayDetail, token };
    console.log(data);
    return fetch('http://192.168.1.8:8888/app/cart.php',
    {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ arrayDetail, token }),
    })
    .then(res => res.text());
};
module.exports = sendOrder;
