import React from "react";

const AddToCart = (product) => {
    const postCart = (event) => {
        const target = event.target.elements;
        const AddProductToCart = { productId: target.productId.value };
        console.log(AddProductToCart);
        fetch("http://localhost:5000/cart", {
            method: "POST",
            body: JSON.stringify(AddProductToCart),
            headers: { "Content-type": "application/json" },
            credentials: "same-origin"
        })
            .catch(err => console.log(err))
    }
    return (
        <form action="/cart" onSubmit={e => postCart(e)}>
            <button className="btn" type="submit">Add to Cart</button>
            <input type="hidden" name="productId" id="productId" value={product.product.id} />
        </form>
    )
}

export default AddToCart;