'use strict';

/**
 * Функция, которая создает новый объект без ключей со значениями undefined, null и пустой строки
 * @param {Object} obj - Исходный объект
 *
 * @example
 * // returns {b: "LOL"}
 * compressObject({a: null, b: "LOL", c: undefined})
 *
 * @returns {Object} - Новый объект
 */
const compressObject = (obj) => {
    return Object.entries(obj).reduce((result, [key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            result[key] = value;
        }
        return result;
    }, {});
};

