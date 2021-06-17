function util(adj,dest,cur,visited){
        visited[cur]=true;
        //console.log(cur);
        if(cur == dest)
            return 1;
            
        if(adj[cur].length < 1)
            return 0;
            
        let s=0;
        for(let i=0;i<adj[cur].length; i++){
           
            s=s+this.util(adj,dest,adj[cur][i],visited);
            
        }
        
        return s;
    }
    
    //////main function
    function countPaths(V, adj, source, destination) 
    {
        // code here
        let visited=Array(V).fill(false);
        return util(adj,destination,source,visited);
        
    }
