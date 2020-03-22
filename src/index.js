
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (!Array.isArray(matrix)) return [];
    matrix.forEach( (array, index) => {
        if (index % 2 == 0) {
            array.sort( (a, b) => a - b);
        } else {
            array.sort( (a, b) => b - a);
        }
        array.forEach( item => {
            result.push(item);
        });
    })
    return result;
}
