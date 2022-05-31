function billboard(name, price = 30) {
    let counter = price

    for (let i = 1; i < name.length; i++) {
        counter += price
    }

    return counter
}