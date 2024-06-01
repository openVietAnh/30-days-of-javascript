/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count = n;
    
    return function() {
        count += 1;
        return count - 1;
    };
};
