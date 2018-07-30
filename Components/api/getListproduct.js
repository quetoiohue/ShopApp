const getListproduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION')
        {url = `http://192.168.1.8:8888/app/product_by_type.php?id_type=${idType}&page=${page}`;}
    else url = `http://192.168.1.8:8888/app/get_collection.php?page=${page}`;
   return fetch(url)
    .then(res => res.json());
};

export default getListproduct;
