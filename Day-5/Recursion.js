function recusiveFuctorial(n) {
    if (n === 0 ){
        return 1
    }
    return recusiveFuctorial(n - 1) * n;
}