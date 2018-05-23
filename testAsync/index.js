const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, time);
    })
};

const normalFunc = () => {
    console.log('shino');
}

const demo1 = () => {
    return new Promise((resolve, reject) => {
        resolve('demo1');
    })
}

const demo2 = () => {
    return new Promise((resolve, reject) => {
        resolve('demo2');
    })
}

const start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    await normalFunc();

    let res1 = await demo1();
    console.log(res1);

    for (let i = 0; i < 10; i++) {
        let res2 = await demo2();
        console.log(i, res2);
    }

    console.log('end');
};

start();