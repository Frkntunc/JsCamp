function friendNumbers(number1, number2) {
    let sum1=0
    let sum2=0
    for (let i = 1; i < number1; i++) {
        if (number1%i == 0) {
            sum1 += i
        }
    }
    for (let j = 1; j < number2; j++) {
        if (number2%j == 0) {
            sum2 += j
        }      
    }

    if (sum1==number2 && sum2==number1) {
        console.log("Friend Numbers")
    }
    else{
        console.log("Not friend numbers")
    }
}

friendNumbers(220,284)