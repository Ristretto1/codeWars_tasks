function findShort(s) {
    let arr = s.split(' ');
    let short = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let length = arr[i].length;
        if (length < short) {
            short = length;
        }
    }
    return short;
}


let s = "Waves Bitcoin Ethereum Dash Lisk Classic Factom BTC Factom Mine BTC Lisk";
findShort(s);
