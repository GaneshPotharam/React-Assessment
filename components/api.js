const url = 'https://fakestoreapi.com';

export const getProducts = async () => {
    const res = await fetch(`${url}/products`).then(res=>res.json()).then(json=>json);
    return res;

}
export const getCategories = async () => {
    const res = await fetch(`${url}/products/categories`).then(res=>res.json()).then(json=>json);
    return res;
}