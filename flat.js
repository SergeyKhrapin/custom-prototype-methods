Array.prototype.flat = function(level = 1) {
    const flatArray = []
    let nestedLevel = 0
    
    makeFlat(this)

    function makeFlat(arr) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i]
            if (!Array.isArray(el) || Array.isArray(el) && nestedLevel == level) {
                flatArray.push(el)
            } else {
                nestedLevel++
                makeFlat(el)
            }
        }
        nestedLevel--
    }
    
    return flatArray
}

let array = [ 1, 2, [3, 4], [5, [6, 7, [77, 777]]], 8, 9, [10, 11], 12 ]
console.log(array.flat())
