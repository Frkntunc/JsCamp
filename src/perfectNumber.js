function perfectNumber(number) {
    
    for (let i = 1; i <= number; i++) {
        let sum = 0
        for (let j = 1; j <= i; j++) {
            if (i%j == 0) {
                sum += j
            }          
        }
        if (sum==i*2) {
            console.log(i+" : is a perfect number")
        }
    }
}

perfectNumber(1000)