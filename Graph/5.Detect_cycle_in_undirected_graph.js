 function dfs(adj,visited,cur,parent){
        visited[cur]=true;
        for(let i=0; i<adj[cur].length; i++){
            let u=adj[cur][i];
            if(visited[u] === false){
                let inn=dfs(adj,visited,u,cur);
                if(inn === true){
                    return true;
                }
                
            }else if(u!=parent){
                return true;
                    
            }
        }
        
        return false;
    }
    
    ///main function
    function isCycle(V, adj)
    {
        
        let visited=Array(V).fill(false);
        for(let i=0; i<V; i++){
            if(visited[i]===false){
                let f=dfs(adj,visited,i,-1);
                if(f===true)
                    return true;
            }
        }
        
        return false;
    }
