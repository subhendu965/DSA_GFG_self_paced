 function isPrime(N)
    {
        // code here
        if(N===1)
            return false;
        if(N===2)
            return true;
            
        for(let i=2; i<=Math.floor(Math.sqrt(N)); i++){
            if(N%i === 0){
                return false;
            }
            
        }
        
        return true;
    }
    function exactly3Divisors(N)
    {
       let NN=Math.sqrt(N);
       let count=0;
       for(let i=1; i<=NN; i++){
           if(this.isPrime(i))
            count++;
       }
       
       return count;
    
    }
