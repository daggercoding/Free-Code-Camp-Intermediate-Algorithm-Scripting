// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10./

function sumAll(arr) {
    //this is for final count
    let total=0;
    //this is the initial value of arr
    let initial=Math.min(arr[0],arr[1])
    //this is the destination
    let final=Math.max(arr[0],arr[1])
   
    for(let i=initial;i<=final;i++)
    {
      total+=i
    }
    return console.log(total);
    }
  
  sumAll([5, 10]);