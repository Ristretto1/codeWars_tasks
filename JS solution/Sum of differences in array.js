let sumOfDifferences = arr => arr.length < 2
    ? 0
    : arr
        .sort((a, b) => b - a)
        .map((v, i, a) => (void 0 === a[i + 1]) ? 0 : v - a[i + 1])
        .reduce((res, val, i, arr) => res + val, 0)