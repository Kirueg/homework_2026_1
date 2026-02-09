"use strict";

/**
 * Функция, которая создает новый объект без ключей со значениями undefined, null и пустой строки
 * @param {Object} obj - Начальный объект
 *
 *
 * @example
 * compressObject({a: null, b: "LOL", c: undefined})
 * results {b: "LOL"}
 *
 * @returns {Object} - Объект результат
 *
 */

const compressObject = (obj) => {
    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined && value !== null && value !== "") {
            result[key] = value;
        }
    }

    return result;
};
