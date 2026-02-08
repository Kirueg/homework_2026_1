"use strict";

/**
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
