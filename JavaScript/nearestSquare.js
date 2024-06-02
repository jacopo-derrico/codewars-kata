// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// APPROACH: - check if n is already a square number - if not cycle thru before and next numbers with same check - return the first square number

function nearestSq(n) {
    let checkPlus = n;
    let checkMinus = n;
    for (let i = 0; i < n; i++) {
        let squarePlus = Math.sqrt(checkPlus);
        let squareMinus = Math.sqrt(checkMinus);
        console.log(`Check is: ${checkPlus}`)
        console.log(`Check is: ${checkMinus}`)
        if (squarePlus - Math.floor(squarePlus) === 0) {
            return `Nearest square is: ${checkPlus}`
        } else if (squareMinus - Math.floor(squareMinus) === 0) {
            return `Nearest square is: ${checkMinus}`
        } else {
            checkMinus--
            checkPlus++
        }
    }
}

nearestSq(125)