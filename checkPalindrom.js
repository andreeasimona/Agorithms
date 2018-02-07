function palindrome(str) {
    str= str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    var reverseStr = reverse(str);
    return reverseStr === str;
  }

  function reverse(s){
      return s.split("").reverse().join("");
  }