 function multiplicationUnderModulo(a, b)
    {
        // code here
        let M=BigInt(1e9+7);
        
        return ((a%M)*(b%M))%M;
    }
