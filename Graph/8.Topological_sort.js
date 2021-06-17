topoSort(V, adj)
    {
        // code here
        // console.log(adj);
        let inDegs=Array(V).fill(0);
        for(let i=0; i<adj.length; i++){
            for(let j=0; j<adj[i].length; j++){
                inDegs[adj[i][j]]++;
            }
        }
        
        let q=[]; //acts like a queue
        for(let i=0; i<inDegs.length; i++){
            if(inDegs[i] === 0){
                q.push(i);
            }
        }
        
        //  console.log(q)
        
        let res=[];
        while(q.length>0){
            let cur=q.shift();
            res.push(cur);/////printing ... 
            
            for(let i=0; i<adj[cur].length; i++){
                let curAdj=adj[cur][i];
                inDegs[curAdj]--;
        
                if(inDegs[curAdj] === 0)
                    q.push(curAdj);
            }
        }
        
        return res;
    }
