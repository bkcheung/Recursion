let unsorted = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(unsorted));

function mergeSort(list){
    if(list.length<2){
        return list;
    } 
    let half = Math.floor(list.length/2);
    let left = list.splice(0,half);
    return mergeArray(mergeSort(left),mergeSort(list)); 
}
function mergeArray(left,right){
    let merged = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            merged.push(left.shift());
        }else{
            merged.push(right.shift());
        }
    }
    return merged.concat(left,right); 
}