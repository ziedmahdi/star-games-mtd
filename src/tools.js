export const createArrayWithNElements = function (n) {
    let result = [];

    for (let i = 0; i < n; ++i) {
        result.push(i);
    }

    return result;
}