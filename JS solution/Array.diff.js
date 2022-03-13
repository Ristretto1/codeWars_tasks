function array_diff(a, b) {

    let arr = new Array();

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            arr.push(a[i]);
        }
    }

    return arr;
}