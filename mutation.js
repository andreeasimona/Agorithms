function mutation(arr) {
    var letters = arr[1].toLowerCase().split('');
    arr[0] = arr[0].toLowerCase();
    var containLetter = letters.map(function(secondLetter) {
      return arr[0].indexOf(secondLetter) !== -1;
    });
    return containLetter.indexOf(false) !== -1 ?
      false
    : true;
  }
