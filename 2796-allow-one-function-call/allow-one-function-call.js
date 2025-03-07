/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
      let isFn = true;
    return function(...args){
         if (isFn) {
            const res = fn(...args);
            isFn = false;
            return res;
        };
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
