const promiseOne = new Promise(function (resolve, reject) {
    //Do any async task
    //DB calls, cryptography
    setTimeout(function () {
        console.log('async task is complete')
    }, 1000)
    promiseOne.then(function () {
        console.log("promise consumed")
    })
})