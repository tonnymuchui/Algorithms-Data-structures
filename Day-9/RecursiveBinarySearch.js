function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, letfIndex, rightIndex) {
if (letfIndex > rightIndex) {
    return -1;
}
let middleIndex = Math.floor(letfIndex + rightIndex) / 2;
if (target === arr[middleIndex]) {
    return middleIndex;
}
if (target < arr[middleIndex]) {
    return search(arr, target, letfIndex, middleIndex - 1);
} else {
    return search(arr, target, middleIndex + 1, rightIndex);
}
}