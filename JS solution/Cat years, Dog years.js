//NOTES:
//humanYears >= 1
//humanYears are whole numbers only

//Cat Years
//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that

//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that

export const humanYearsCatYearsDogYears = (humanYears) => {

    let catYears
    let dogYears

    if (humanYears === 1) {
        dogYears = catYears = 15
    } else if (humanYears === 2) {
        dogYears = catYears = 15 + 9
    } else {
        catYears = (humanYears - 2) * 4 + 15 + 9
        dogYears = (humanYears - 2) * 5 + 15 + 9
    }

    return [humanYears, catYears, dogYears];
}
