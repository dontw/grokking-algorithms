function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let index = smallestIndex; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index]
            smallestIndex = index
        }
    }
    return smallestIndex
}

export function selectionSort(arr) {
    const ARR_LENGTH = arr.length
    let newArr = []

    for (let counter = 0; counter < ARR_LENGTH; counter++) {
        let smallestIndex = findSmallest(arr)
        newArr.push(arr[smallestIndex])
        arr.splice(smallestIndex, 1)
    }
    return newArr
}

