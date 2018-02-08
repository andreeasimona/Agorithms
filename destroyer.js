
function destroyer(arr) {
    var arg = [];
    for(var index = 1; index < arguments.length; index ++){
      arg.push(arguments[index]);
    }
    var newArr = arr.filter(function(el) {
        return arg.findIndex(function(elArg) {
          return el === elArg;
        }) === -1;
    });
    return newArr;
  }
