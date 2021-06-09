import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = () => {

    const [products, seProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                seProducts(data)
            })



    }, [])


    return (
        <div>


            {
                products.map(pd => <ProductDetails pd={pd}></ProductDetails>)
            }


        </div>
    );
};

export default Product;