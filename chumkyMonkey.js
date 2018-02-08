
function chunkArrayInGroups(arr, size) {
    var index = 0;
    var newArray = [];
    while (index < arr.length) {
        newArray.push(arr.slice(index, index + size));
        index += size;
    }
    return newArray;
}