import React from 'react'
import classes from "./products.module.css"
import { Link } from 'react-router-dom'

export default function Products({products}) {

    return (
        <ul className={classes.product_list}>
            {products.map(product => (
                <Link className={classes.product} to={`/product/${product.id}`}>
                <li key={product.id}>
                    <div className={classes.img_container}>
                        <img 
                            className={classes.image}
                            src={`/product/${product.imageUrl}`}
                            alt={product.name}
                        />
                    </div>
                    <h3>{product.name} ({<span>{product.volume}ml</span>})</h3>
                    <span>⭐⭐⭐⭐⭐</span>
                    <h4>₱{product.price}</h4>
                    <p>{product.description}</p>
                </li>
                </Link>
            ))

            }

        </ul>
    )
}
