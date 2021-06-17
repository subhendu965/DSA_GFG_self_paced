function nodeLevel(V, adj, X)
    {
        // code here 
       // console.log(adj)
       let visited=Array(V).fill(false);
        
        let q=[] //que
        q.push(0);
        q.push(null);
        let level=0;
        while(q.length>0){
            let cur=q.shift();
            visited[cur]=true;
            if(cur == X){
                // console.log(cur,X);
                return level;
            }
            if(cur==null){
                level++;
                if(q.length>0)
                    q.push(null);
    
            }else{
                for(let i=0; i<adj[cur].length; i++){
                    if(visited[adj[cur][i]] == false)
                        q.push(adj[cur][i]);
                }
            }
                
           
        }
        
        return -1;
    }
