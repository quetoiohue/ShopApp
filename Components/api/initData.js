const initData = () => (
    fetch('http://192.168.1.8:8888/app/') //eslint-disable-line
            .then(res => res.json())
            
        );
export default initData;
