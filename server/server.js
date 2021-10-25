const express = require('express');
const fs = require('fs');
const { sum, totalQuantity } = require('./cart');
const app = express();
const cart = require('./cartRouter');//обработчик всех запросов корзины
app.use(express.json());
app.use('/', express.static('.'));
app.use('/api/cart', cart);
const jsonParser = express.json();
/**
  * проверка id массива products с пришедшим post-запросом из фронт-енд по порядку расположения в массиве. Сделано для упрощения написания кода на других страницах.
  * 
  * @param {Array} req - массив id, с которым сверяем products.
  * @returns {boolean} - булево значение.
  */
// function compareReq(req) {
//     for (let i = 0; i < products.length; i++) {
//         if (req[i].4 == products[i].id_product) continue;
//         else return true;
//     }
//     return false;
// }
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));
function getCart(){
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
        }
        else {
            let cart = JSON.parse(data);
            cart.forEach(element => {
                element.visible = false;
                element.quantity = 1;
            });
            fs.writeFile('server/db/userCart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    console.log(err)
                }
            });
        }
    });
}
getCart();

fs.writeFile('server/db/total.json', JSON.stringify({sum: 0, quantity: 0}), (err,data)=> {
    if(err) {
        console.log(err);
    }
    });

app.get("/api/products", function (request, response) {
        fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
            }
            else { 
                response.send(JSON.parse(data));
            }
        });
    });
    // if (!request.body) return response.sendStatus(400);
    // if (compareReq(request.body)) {
    //     fs.writeFile('server/db/total.json', JSON.stringify({sum: 0, quantity: 0}), (err,data)=> {
    //         if(err) {
    //             console.log(err);
    //         }
    //         });
    //     products = request.body;
    //     fs.writeFile('server/db/products.json', JSON.stringify(products), (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //     });
    //     let cart = products;
    //     cart.forEach(element => {
    //         element.visible = false;
    //         element.quantity = 1;
    //     });
    //     fs.writeFile('server/db/userCart.json', JSON.stringify(cart), (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //     });
