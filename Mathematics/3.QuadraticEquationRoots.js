 function quadraticRoots(a, b, c)
    {
        // code here
        let D=b*b-4*a*c;
        if(D<0)
            return [-1];
        
        else{
            
            return [(-b+Math.sqrt(b*b-4*a*c))/(2*a),(-b-Math.sqrt(b*b-4*a*c))/(2*a)];
        }
        
    }
