 function sumUnderModulo(a, b)
    {
        let M=BigInt(1e9+7);
        //sum modulo with M
        return (a%M + b%M)%M;
    }
