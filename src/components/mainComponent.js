import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./headerComponent";
import ShopList from "./shopComponent";
import ProductList from "./productListcomponent";
import AddProduct from "./addProductComponent";


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ShopList} />
                    <Route exact path="/products" component={ProductList} />
                    <Route exact path="/add-product" component={AddProduct} />
                </Switch>
            </div>
        )
    }
}

export default Main;