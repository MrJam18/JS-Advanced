global.sum = 0;
global.totalQuantity = 0;
const changeTotal = (find, mark) => {
    if (mark == '+') {
        sum += +find.price;
        totalQuantity ++;
    }
    else {
        sum -= +find.price;
        totalQuantity--;
    }
}
let del = (cart, req) => {
    let find = cart.find(el => el.id_product === +req.params.id);
    if (find.quantity > 1) {
    find.quantity += req.body.quantity;
    }
    else {
        find.visible = false;
    }
    changeTotal(find, '-')
    return JSON.stringify(cart, null, 4);
}
let add = (cart, req) => {
    let find = cart.find(el => el.id_product === +req.params.id);
    find.visible = req.body.visible;
    changeTotal(find, '+');
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    changeTotal(find, '+');
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    changeTotal,
    add,
    change,
    del
};
module.exports.sum = sum;
module.exports.totalQuantity = totalQuantity;