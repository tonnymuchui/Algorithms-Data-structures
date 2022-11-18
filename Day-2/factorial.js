function factorial(n) {
    let results = 1;
    for(let i = 2; i <= n; i++) {
      results *= i;
    }
    return results;
  }