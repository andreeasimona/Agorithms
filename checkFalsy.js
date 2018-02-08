function bouncer(arr) {
    var newArr= arr.filter(function(el) {
        return (el !== false && el !== null && el !== 0 && el !== "" && el !== undefined && !Number.isNaN(el));
    });
    return newArr;
  }