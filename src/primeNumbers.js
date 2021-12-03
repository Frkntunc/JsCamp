function primeNumbers(number) {
    
    for (let i = 2; i < number; i++) {
        let control = 0
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                control += 1
            }
        }
        if (control == 0) {
            console.log(i+" : is a prime number")
        }
    }
}

primeNumbers(1000)