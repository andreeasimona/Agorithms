
function repeatStringNumTimes(str, num) {
    var repeat = '';
    if(num<0)
      return "";
    else {
      while(num !== 0 ) {
        repeat += str;
        num--;
      }
    }
    return repeat;
  }