/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (other) => {
            return other === val
        },
        notToBe: (other) => {
            if (other !== val) {
                return true
            } else {
                throw "Equal"
            }
        }
    }  
};