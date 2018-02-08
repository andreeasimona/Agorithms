function truncateString(str, num) {
    if(str.length > num) {
      if(num > 3)
        num -= 3;
      return str.substring(0, num) + '...';
    }
    return str;
  }