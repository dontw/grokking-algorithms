// import {selectionSort} from './selectionSort.mjs'
// import {factorial} from './recursion.mjs'
//import {sum} from './recursion.mjs'

// console.log(selectionSort([1,3,2,4,5]))
// console.log(factorial(3))
//console.log(sum([1,2,3,4,5,6]))

function findMaxVal(arr){
    if(arr.length === 2){
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    let maxVal = arr[0]
    arr.shift()
    return maxVal > findMaxVal(arr) ? maxVal: findMaxVal(arr)
}
console.log(findMaxVal([2,1,3,9]))

