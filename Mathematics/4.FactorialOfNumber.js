////recursive

function factorial(N)
    {
        // code here
        if(N<1)
            return 1;
        return N*this.factorial(N-1);
    }
 
 
 ///iterative
 function factorial(N){   
        let s=1;
        for(let i=1;i<=N;i++){
            s=s*i;
        }
        
        return s;
}
