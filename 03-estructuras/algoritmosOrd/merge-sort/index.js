'use strict'

const numeros = [0,14,67,4,2,1];

const mergeSort = (unsortedArray) => {

    const size = unsortedArray.length;

    if(size <= 1) return unsortedArray;

    
    const middle = Math.ceil(size / 2);

    const left = unsortedArray.slice(0,middle);
    const right = unsortedArray.slice(middle, size);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft,sortedRight)
}

const merge = (left, right) =>{
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex])
            leftIndex++
        }else{
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }

    const finalArray = resultArray
                            .concat(left.slice(leftIndex)
                            .concat(right.slice(rightIndex)))

    return finalArray

}


console.log(mergeSort(numeros))