function bubbleSort(arr) {
    let swapperd

    do {
        swapperd = false
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapperd = true
            }
        }
    } while (swapperd);
}