import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import shoes from "./misc/Shoes";
import * as serviceWorker from "./serviceWorker";

getProducts().then(() => {
    ReactDOM.render(<App />, document.getElementById("root"));

});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

async function getProducts() {
    let response = await fetch('http://localhost:3001/products');
    let json = await response.json();
    console.log(json);

    for (let index = 0; index < json.length; index++) {
        const element = json[index];
        console.log(element);
        shoes.push({
            id: element.id,
            name: element.name,
            for: element.for,
            price: element.price,
            description: element.description,
            img: element.img
        });
    }
}