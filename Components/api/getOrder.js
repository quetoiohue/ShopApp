const getOrder = ( token ) => (
    fetch('http://192.168.1.8:8888/app/order_history.php',
    {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
    
);
module.exports = getOrder;
