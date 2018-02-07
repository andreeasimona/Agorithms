function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var newWords = words.map(function(word) {
      word = word[0].toUpperCase() + word.substr(1);
      return word;
    });
    return newWords.join(" ");
  }