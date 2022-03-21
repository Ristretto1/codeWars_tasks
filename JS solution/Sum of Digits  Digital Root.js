function digital_root(n) {
    let arr = n.toString().split('');
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a += Number(arr[i])
    }

    let aArr = a.toString().split('');

    if (aArr.length > 1) {
        let b = 0;
        for (let i = 0; i < aArr.length; i++) {
            b += Number(aArr[i])
        }

        let bArr = b.toString().split('');
        if (bArr.length > 1) {
            let c = 0;
            for (let i = 0; i < bArr.length; i++) {
                c += Number(bArr[i])
            }

            return c

        } else {
            return b
        }
    } else {
        return a
    }
}

