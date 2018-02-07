
function largest(arr) {
    var arr = arr.map(function(member){
        return Math.max(...member);
      });
    return arr;
  }

  //largest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); return [5,27,39,1001]
