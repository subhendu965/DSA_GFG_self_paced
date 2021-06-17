  
    function dfs(V,adj,visited,cur){
        let ret=[];
        if(visited[cur] === false){
            visited[cur]=true;
            ret.push(cur);
            for(let i=0;i<adj[cur].length;i++){
               let f= dfs(V,adj,visited,adj[cur][i]);
                ret=ret.concat(f);
            }
            
            
            
        }
        return ret;
    }

    ////main function
    function dfsOfGraph(V, adj)
    {
        // code here
        let visited=Array(V).fill(false);
        let cur=0;
        return dfs(V,adj,visited,cur);
        
        
    }

