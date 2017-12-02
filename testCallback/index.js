let btn1 = document.querySelector('#btn_1');
let btn2 = document.querySelector('#btn_2');

function origin(txt, Callback) {
    console.log("一个从父函数origin产生的参数将要被传递给回调函数 ，这个参数是:" + txt);
    Callback(txt);
}

function cb(data) {
    console.log("我是回调函数，我的名字叫:callback ,我接收到来自父函数的参数，参数是:" + data);
}

function bindFn(txt, cb) {
    btn2.onclick = function() {
        origin(txt, cb);
    };
}

btn1.onclick = function() {
    bindFn('200', cb);
};