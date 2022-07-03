// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
    let arr = numbers.split(' ')

    arr.sort((a, b) => b - a)

    return [arr[0], arr.reverse()[0]].join(' ')
}