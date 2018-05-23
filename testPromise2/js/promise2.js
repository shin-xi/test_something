function printHello(ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve("Hello");
        } else {
            reject("Good bye!");
        }
    });
}

function printWorld() {
    console.log("World");
}

function printExclamation() {
    console.log("!");
}

printHello(true)
    .then(function (message) {
        console.log(message);
    })
    .then(printWorld)
    .then(printExclamation);