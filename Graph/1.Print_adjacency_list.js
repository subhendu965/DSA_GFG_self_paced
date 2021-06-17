
    //Function to return the adjacency list for each vertex.
    printGraph(V, adj)
    {
        // code here
        for(let i=0;i<adj.length; i++){
            adj[i].unshift(i);
        }
        
        return adj;
    }


