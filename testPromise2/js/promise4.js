let p1 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: { id: 101 }
    })
        .done(function (data) {
            // console.log("success");
            console.log('p1', data);
            setTimeout(resolve(data), 3000)
        })
        .fail(function (err) {
            console.log("error");
            reject(err);
        })
        .always(function () {
            // console.log("complete");
        });
});

let p2 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: { id: 102 }
    })
        .done(function (data) {
            // console.log("success");
            console.log('p2', data);
            setTimeout(resolve(data), 2000)
        })
        .fail(function (err) {
            console.log("error");
            reject(err);
        })
        .always(function () {
            // console.log("complete");
        });
});

let p3 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: { id: 103 }
    })
        .done(function (data) {
            // console.log("success");
            console.log('p3', data);
            setTimeout(resolve(data), 1000)
        })
        .fail(function (err) {
            console.log("error");
            reject(err);
        })
        .always(function () {
            // console.log("complete");
        });
});

let p4 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: { id: 104 }
    })
        .done(function (data) {
            // console.log("success");
            console.log('p4', data);
            setTimeout(resolve(data), 1000)
        })
        .fail(function (err) {
            console.log("error");
            reject(err);
        })
        .always(function () {
            // console.log("complete");
        });
});

let p5 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: { id: 105 }
    })
        .done(function (data) {
            // console.log("success");
            console.log('p5', data);
            setTimeout(resolve(data), 1000)
        })
        .fail(function (err) {
            console.log("error");
            reject(err);
        })
        .always(function () {
            // console.log("complete");
        });
});

// Promise.race([p1, p2, p3]).then(function (result) {
//     console.log('promise_race', result);
// });

// Promise.all([p1, p2, p3]).then(function (result) {
//     console.log('promise_all', result);
// });

// Promise.race([p1, p2, p3]).then(function (result) {
//     console.log('promise_race', result);
//
//     Promise.race([p4, p5]).then(function (result) {
//         console.log('promise_race', result);
//     });
// });

// Promise.race([p1, p2, p3]).then(function (result) {
//     console.log('promise_race', result);
//
//     Promise.all([p4, p5]).then(function (result) {
//         console.log('promise_all', result);
//     });
// });

Promise.all([p1, p2, p3]).then(function (result) {
    console.log('promise_all', result);

    Promise.race([p4, p5]).then(function (result) {
        console.log('promise_race', result);
    });
});