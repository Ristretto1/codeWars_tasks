function arrayPlusArray(arr1, arr2) {
    let a1 = 0
    let a2 = 0

    for (let i = 0; i < arr1.length; i++) {
        a1 += arr1[i]
    }

    for (let i = 0; i < arr1.length; i++) {
        a2 += arr2[i]
    }

    return a1 + a2
}