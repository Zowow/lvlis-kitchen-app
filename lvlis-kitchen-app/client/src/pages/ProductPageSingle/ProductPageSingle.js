import React, { useEffect, useState } from 'react';
import classes from "./productpagesingle.module.css";
import { useParams } from 'react-router-dom';
import { getById } from '../../services/productService';

export default function ProductPage() {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getById(id).then(setProduct)
    }, [id])

    return (
        <>
            {product && 
                <div className={classes.container}>
                    <img src={`/product/${product.imageUrl}`} alt={product.name} />
                    <div className={classes.details}>
                        <h3>{product.name} ({<span>{product.volume}ml</span>})</h3>
                        <span>⭐⭐⭐⭐⭐</span>
                        <h4>₱ {product.price}</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
            }
        </>
    )
}
