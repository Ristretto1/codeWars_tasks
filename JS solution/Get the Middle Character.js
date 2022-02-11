function getMiddle(s) {
    //четные - Индекс длина\2 + длина\2+1
    //нечетные - Индекс длина\2 округлить до высшей
    let length = +s.length;
    let data = '';
    if (length % 2) { //нечетное
        data += s[length / 2 - 0.5];
    } else { //четное
        data += s[length / 2 - 1] + s[length / 2];
    }

    return data
}
