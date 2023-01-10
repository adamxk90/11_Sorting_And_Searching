const arr = [151,9,8,7,4,3,5,6,17,85,96,443,521,45,789,91,37,82,64,59,51]

let count = 0
let card
let j
function insertionSort(array){
    for(let i = 1 ; i < array.length ; i++){
        card = arr[i]
        j = i-1
        while (j >= 0 && array[j] > card){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = card
        count++

        
    }
    return array
}
console.log(insertionSort(arr))
console.log('count = ', count)