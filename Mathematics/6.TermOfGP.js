//nth term
function termOfGP(A, B, N)
    {
        // code here
        let r=B/A;
        return A*Math.pow(r,N-1);
    }
    
    
///summation of nth term
function SummationOfNthTerm(A,B,N){
    let r=B/A;
    return A*((Math.pow(r,N)-1)/(r-1));
}
