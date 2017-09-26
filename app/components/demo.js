import { createStore } from 'redux';

function counter(state = { value: 0 }, action) {
    let { type } = action;

    switch (type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: state.value + 6
            })
        default:
            return state;
    }
}
let store = createStore(counter);

$(document).click(ev => {
    store.dispatch({ type: 'INCREMENT', value: 6 })
})

let curt = store.getState();  //获取到原始 state值
store.subscribe(() => {
    let pre = curt;
    let ccurt = store.getState();
    console.log(pre, ccurt, pre === ccurt)
})