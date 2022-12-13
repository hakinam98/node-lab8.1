import React from "react";

const Header = () => {
    return (
        <header className="main-header">
            <nav className="main-header__nav">
                <ul className="main-header__item-list">
                    <li className="main-header__item"><a href="/">Shop</a></li>
                    <li className="main-header__item"><a href="/products">Product</a></li>
                    <li className="main-header__item"><a href="/cart">Cart</a></li>
                    <li className="main-header__item"><a href="/orders">Orders</a></li>
                    <li className="main-header__item"><a href="/add-product">Add Product</a></li>
                    <li className="main-header__item"><a href="/admin">Admin Products</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;