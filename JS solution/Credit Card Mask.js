// return masked string

// "4556364607935616" --> "############5616"
// "64607935616" -->      "#######5616"
// "1" -->                "1"
// "" -->                 ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// "####################################man!"


function maskify(cc) {
    const arrRev = cc.split('').reverse()
    let arr = []
    for (let i = 0; i < arrRev.length; i++) {
        i<4 ? arr.push(arrRev[i]) : arr.push('#')
    }
    return arr.reverse().join('')
}

maskify('4556364607935616')