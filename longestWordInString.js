
function findLongestWord(str) {
    var words = str.split(/ /g);
    var lenghtWords = words.map(function(word){
      return word.length;
    });
    return Math.max(...lenghtWords);
  }