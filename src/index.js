module.exports = function towelSort(matrix) {
    if (matrix) {
        let res = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let columnIndex = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
                res.push(matrix[i][columnIndex]);
            }
        }
        return res;
    } else {
        return [];
    }
}

