function recusiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
   return recusiveFibonacci(n -1) + recusiveFibonacci(n -2);
}