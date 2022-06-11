module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const res = [];
    matrix.forEach((el, idx) => idx % 2 === 0 ? res.push(el) : res.push(el.reverse()));

    return res.flat();
}

