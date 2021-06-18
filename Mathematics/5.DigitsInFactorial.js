function digitsInFactorial(N)
    {
        // code here
        if(N<0)
            return 0;
        if(N<=1)
            return 1;
            
        let digits = 0;
        for(let i=2;i<=N; i++){
            digits+=Math.log10(i);
        }
        
        return Math.floor(digits)+1;
    }
