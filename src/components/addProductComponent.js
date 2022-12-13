import React from "react";

const AddProduct = () => {
    const postAddProduct = (event) => {
        const target = event.target.elements;
        const product = {
            title: target.title.value,
            imageUrl: target.imageUrl.value,
            price: target.price.value,
            description: target.description.value
        }
        fetch("http://localhost:5000/admin/add-product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: { "Content-type": "application/json" },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(data => console.log('Product: ', data))
            .catch(err => console.log(err))
    }
    return (
        <form className="product-form" onSubmit={event => postAddProduct(event)} action="/">
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>
            <div className="form-control">
                <label htmlFor="imageUrl">ImageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl" />
            </div>
            <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" />
            </div>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" />
            </div>
            <button className="btn" type="submit">Add Product</button>
        </form>
    )
}


export default AddProduct;