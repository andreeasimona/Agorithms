function factorialize(num) {
    if(num-1 > 0)
      return num * factorialize(num-1);
    else
      return 1;
  }
