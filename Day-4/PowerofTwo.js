function isPowerofTwo() {
    if(n < 1) {
        return false;
    }
    while (n > 1)  {
        if (n % 2 !== 0) {
return 0;
        }
        n /= 2;
    }
    return true;
}