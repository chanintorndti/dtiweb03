//สร้างแบบ CommonJS
const sau = 'Southest Asia University'

let score = 999

function sumNumber(n1, n2){
    return n1 + n2
}

const squareArea = (wi, lo) => {
    return wi * lo
}

module.exports = {
    sau,
    score,
    sumNumber,
    squareArea
}