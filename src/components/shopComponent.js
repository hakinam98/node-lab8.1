import React, { useState, useEffect } from "react";
import AddToCart from './addToCartComponent'

const ShopList = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const getProductList = async () => {
            try {
                fetch('http://localhost:5000/products')
                    .then(response => response.json())
                    .then(data => setProductList(data))
            }
            catch (error) {
                console.log(error)
            }
        };
        getProductList();

    }, []);
    const renderProduct = () => {
        if (productList.length > 0) {
            return (
                <div className="grid">
                    {productList.map(product => {
                        return (
                            <article key={product.id} className="card product-item">
                                <header className="card__header">
                                    <h1 className="product__title">
                                        {product.title}
                                    </h1>
                                </header>
                                <div className="card__image">
                                    <img src={product.imageUrl} alt={product.title} />

                                </div>
                                <div className="card_content">
                                    <h2 className="product__price">$ {product.price}</h2>
                                    <p className="product__description">{product.description}</p>
                                </div>
                                <div className="card__actions">
                                    <AddToCart product={product} />
                                </div>
                            </article>
                        )

                    })}

                </div>
            )
        }
        else {
            return (<h1>No Products Found!</h1>)
        }
    }
    return (<div>
        {renderProduct()}
    </div>)
}
export default ShopList;