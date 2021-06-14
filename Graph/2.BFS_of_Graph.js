class Solution
{
    //Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj)
    {
        // code here
        let q=[];
        let visited=Array(V).fill(false);
        let res=[];
        
        q.push(0);
        while(q.length > 0){
            let cur=q.shift();
            
            
            if(visited[cur] === false){
                res.push(cur);
                for(let i=0;i<adj[cur].length;i++){
                    q.push(adj[cur][i]);
                }
                visited[cur]=true;
            }
            
            
            
        }
        
        return res;
    }
}
