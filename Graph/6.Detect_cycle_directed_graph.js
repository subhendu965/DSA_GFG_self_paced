function dfs(adj,visited,recT,cur){
       
        visited[cur]=true;
        recT[cur]=true;
        for(let i=0; i<adj[cur].length; i++){
            let u=adj[cur][i];
            if(visited[u] === false){
                let inn=dfs(adj,visited,recT,u);
                if(inn === true){
                    return true;
                }
                
            }else if(recT[u]===true){
                return true;
                    
            }
        }
        recT[cur]=false;
        return false;
    }
    
    /////main function
    function isCyclic(V, adj)
    {
        
        let visited=Array(V).fill(false);
        let recT=Array(V).fill(false);
        for(let i=0; i<V; i++){
            if(visited[i]===false){
                let f=dfs(adj,visited,recT,i);
                if(f===true)
                    return true;
            }
        }
        
        return false;
    }
