function sumPrimes(num) {
    let primes=[]
    for(let i=2;i<=num;i++)
    {
      if(primes.every(num=>i%num!==0))
      {
        primes.push(i)
      }
    }
    return primes.reduce((sum,num)=> sum+num);
  }
  
  sumPrimes(10);