function prime (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let control = 0;
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i]%j==0) {
                control = control+1
            }
        }
        if (control==0) {
            console.log(numbers[i]+" : is a prime number")
        }
        else{
            console.log(numbers[i]+" : in not a prime number")
        }
    }
}

prime(13,20,40,23,7,5,3,6)