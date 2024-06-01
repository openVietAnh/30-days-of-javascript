/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var called = false;
    
    return function(...args) {
        if (called) { 
            return undefined;
        } else {
            called = true;
            return fn(args)
        }
    }
};
