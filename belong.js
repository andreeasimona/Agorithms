
function getIndexToIns(arr, num) {
    arr = arr.sort(function (a, b) { return a - b; });
    var where = 0;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] < num && num < arr[index + 1])
            where = index + 1;
        if (arr[index] == num || arr[index + 1] == num)
            where = index;
    }

    if (arr[arr.length - 1] < num)
        return arr.length;
    return where;
}
