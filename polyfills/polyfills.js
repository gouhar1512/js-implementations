/**
 * @define Polyfill for map
 * @param cb = callback function to be executed
 * @returns an array of result of callback function on each item
 */
Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError(`${typeof cb} ${cb} is not a function`);
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, this));
  }
  return result;
};

/**
 * @define Polyfill for filter
 * @param cb = callback function to be executed
 * @returns an array of filtered items based on the
 *          result of callback function on each item
 */
Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError(`${typeof cb} ${cb} is not a function`);
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i], i, this);
    }
  }
  return result;
};

/**
 * @define Polyfill for reduce
 * @param cb = callback function to be executed
 * @returns an accumulated value based on the result
 *          of callback function on each item
 */
Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== "function") {
    throw new TypeError(`${typeof cb} ${cb} is not a function`);
  }
  let reducedValue, startIdx;

  if (initialValue !== undefined) {
    reducedValue = initialValue;
    startIdx = 0;
  } else {
    reducedValue = this[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < this.length; i++) {
    reducedValue = cb(reducedValue, this[i]);
  }
  return reducedValue;
};
