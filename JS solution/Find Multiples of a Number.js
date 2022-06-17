//Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])


function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i += integer) {
        arr.push(i)
    }
    return arr
}
