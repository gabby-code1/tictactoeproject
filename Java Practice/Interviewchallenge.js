function fizzNumbers(startNumber, endNumber) {
    var i;
    for(i = startNumber; i <= endNumber; i++) {
        if(i % 3) {
          console.log("Fizz");  
        } else if(i % 5) {
            console.log("Buzz");

        } else if(i % 3 && i % 5 == 0) {
            console.log("FizzBuzz");

        } else{
            console.log(i);

        }

        




    } 

} fizzNumbers(1,100);
