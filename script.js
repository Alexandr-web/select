'use strict';

let nameSelect = document.querySelector('.select__title-name'),
    options = document.querySelector('img[alt="options"]'),
    title = document.querySelector('.select__title'),
    select = document.querySelector('.select'),
    values = document.querySelector('.select__values');

let allOptions = [{
        text: `1`,
        dataValue: `1`
    },
    {
        text: `2`,
        dataValue: `2`
    },
    {
        text: `3`,
        dataValue: `3`
    },
    {
        text: `4`,
        dataValue: `4`
    },
];

function createOptions() {
    allOptions.map(item => {
        let option = `
        <div class="select__value" data-value="${item.dataValue}">
            ${item.text}
        </div>
        `;

        values.innerHTML += option;
    });
}

createOptions();

class Select {
    constructor(arr) {
        this.arr = arr;
    }
    hideActiveClass(opt, className) {
        opt.forEach(item => item.classList.remove(className));
    }
    showActiveClass(opt, index, className) {
        opt[index].classList.add(className);
    }
    addOptions(text, dataVal) {
        let option = `
            <div class="select__value" data-value="${dataVal}">
                ${text}
            </div>
        `;

        values.innerHTML += option;
    }
    removeOptions(index) {
        values.innerHTML = '';
        delete this.arr[index];

        createOptions();
    }
    openSelect() {
        const addClass = (element, className) => element.classList.toggle(className);

        addClass(options, 'options-open');
        addClass(select, 'select-open');
        addClass(values, 'select__values-open');
        addClass(title, 'title-active');
    }
    hideSelect() {
        const removeClass = (element, className) => element.classList.remove(className);

        removeClass(options, 'options-open');
        removeClass(select, 'select-open');
        removeClass(values, 'select__values-open');
        removeClass(title, 'title-active');
    }
    titleValue(index = 0) {
        let val = this.arr[index].dataValue;
        nameSelect.innerHTML = val;
    }
    changeValueOfTitle(opt) {
        opt.forEach((item, index) => {
            item.addEventListener('click', () => {
                new Select().hideActiveClass(allValues, 'active-value');
                new Select().showActiveClass(allValues, index, 'active-value');

                new Select(allOptions).titleValue(index);
                new Select().hideSelect();
            });
        });
    }
}

let allValues = document.querySelectorAll('.select__value');

new Select().hideActiveClass(allValues, 'active-value');
new Select().showActiveClass(allValues, 0, 'active-value');

new Select().changeValueOfTitle(allValues);

title.addEventListener('click', () => new Select().openSelect());
new Select(allOptions).titleValue();