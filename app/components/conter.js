let $addCounter = $('.counterBox .counterPanel'),
    $counterPanel = $('.counterBox .counterPanel'),
    $hasAll = $('.allSel .val'),
    $maximum = $('.maximum .val'),
    $AllCount = $('.allCount .val');

const counters = [];
class Counter {
    constructor() {

        this.value = 0;
        this.elt = $('<div class="counter"></div>')


        let incrementBtn = this.incrementBtn = $('<button class="add"></button>')
        let decrementBtn = this.decrementBtn = $('<button class="sub"></button>')
        let oddBtn = this.oddBtn = $('<button class="addIfOdd"></button>')
        let asyncBtn = this.asyncBtn = $('<button class="addAsync"></button>')
        let num = this.num = $('<span >${this.value}</span>')

        this.elt.append(decrementBtn, num, incrementBtn, oddBtn, asyncBtn)


        this.decrement = this.decrement.bind(this)
        this.increment = this.increment.bind(this)
        this.addIfOdd = this.addIfOdd.bind(this)
        this.asyncAdd = this.asyncAdd.bind(this)


        incrementBtn.click(this.increment)
        decrementBtn.click(this.decrement)
        oddBtn.click(this.addIfOdd)
        asyncBtn.click(this.asyncAdd)
    }
    decrement() {
        if (this.value === 0) return
        this.num.html(--this.value)
    }
    increment() {

        this.num.html(++this.value)
    }
    addIfOdd() {
        if (this.value % 2 === 0) return
        this.num.html(++this.value)
    }
    asyncAdd() {
        setTimeout(() => {
            this.num.html(++this.value)
        }, 1000)
    }

}

