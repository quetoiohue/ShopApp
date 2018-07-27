const getListproduct = (idType , page) => {
    const url = `http://192.168.1.8:8888/app/product_by_type.php?id_type=${idType}&page=${page}`;
   return fetch(url)
    .then(res => res.json())
};

export default getListproduct;