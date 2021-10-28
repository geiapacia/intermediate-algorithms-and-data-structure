function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
  
    for (let i = min; i <= max; i++){
      sumBetween += i;
    }
    return sumBetween;
  
  }
  
  
  sumAll([1, 4]);

  //Code explanation
  //First create a variable to store the max number between two
  //The same as before for the Smallest number
  //We create an accumulator variable to add the numbers.
  
  //Since the numbers might not be always in order, using max(), and min() will help organize