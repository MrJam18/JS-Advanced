'use strict'
const hamValues = [
    {
        name: 'small',
        price: 50,
        cal: 20
    },
    {
        name: 'big',
        price: 100,
        cal: 40
    },
    {
        name: 'cheese',
        price: 10,
        cal: 20
    },
    {
        name: 'salt',
        price: 20,
        cal: 5
    },
    {
        name: 'potatoe',
        price: 15,
        cal: 10
    },
    {
        name: 'flavor',
        price: 15,
        cal: 0
    },
    {
        name: 'mayonnaise',
        price: 20,
        cal: 5
    }

]
class Hamburger {
    constructor() {
        this.sum = 0;
        this.cal = 0;
        this.checkChecked();
    }
    getPriceAndCal() {
        let me = this;
        input.forEach(function (el) {
            if (el.checked) {
                hamValues.forEach(function (hamValue) {
                    switch (el.value) {
                        case hamValue.name:
                            me.sum += hamValue.price;
                            me.cal += hamValue.cal;
                    }
                });
            }
        });
        result.innerHTML = `Съев этот гамбургер вы получите ${this.cal} калорий. Цена гамбургера составляет ${this.sum} рублей.`;
    }

    checkChecked() {
        let checkedSum = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i].type === 'radio' && input[i].checked) {
                checkedSum++;
            }
        }
        if (checkedSum >= 2) {
            this.getPriceAndCal();
        }
        else {
            result.innerHTML = 'Вы не выбрали обязательные элементы! Пожалуйста укажите свой выбор во всех вопросах со знаком <span class="redSpan">*</span>.';
        }

    }
}

let i = 0;
let input = document.querySelectorAll('input');
let result = document.querySelector('.result');
function onClick() {
    window[`ham${i}`] = new Hamburger;
    i++;
}