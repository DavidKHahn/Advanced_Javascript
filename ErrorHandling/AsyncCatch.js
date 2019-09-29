// Asynchronous promises error handling
Promise.resolve('asyncfaill')
    .then(response => {
        Promise.resolve().then(() => {
            throw new Error('#3 faillll')
        }).catch(console.log)
        return 5
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log('FINAL error', err)
    })