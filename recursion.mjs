export function factorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

export function sum(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        let firstVal = arr[0]
        arr.shift()
        return firstVal + sum(arr)
    }
}

export function arrLength(arr){
    if(arr.length === 0){
        return 0
    }else{
        arr.shift()
        return 1 + arrLength(arr)
    }
}


