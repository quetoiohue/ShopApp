const searchproduct = (key) => {
    const url = `http://192.168.1.8:8888/app/search.php?key=${key}`;
   return fetch(url)
    .then(res => res.json());
};

export default searchproduct;
