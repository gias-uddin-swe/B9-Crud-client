
import { baseURL } from "./Url.js";



// product of brands fatch from here
export const productOfBrands =async({params})=>{
    // params => brandName
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    const filterData = data?.filter(item=>item.brandName.toLowerCase()===params.brandName.toLowerCase())
    return filterData;
}

// product details fatch from here
export const oneProductLoader =async({params})=>{
    // params => id
    const response = await fetch(`${baseURL}/products/${params.id}`);
    const data = await response.json();
    return data;
}

// product of Cart by user fatch from here
export const productsOfCart =async()=>{
    const responseProduct = await fetch(`${baseURL}/products`);
    const dataProduct = await responseProduct.json();
    const responseProductCart = await fetch(`${baseURL}/cartProducts`);
    const dataProductCart = await responseProductCart.json();

    const data = {
        products:dataProduct,
        productsCart:dataProductCart
    }

    return data;
}