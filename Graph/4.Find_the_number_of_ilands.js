 function dfs(grid,visited,i,j){
        // console.log(i,j);
        let ret=0;
        if(i<0 || j<0 || i>=grid.length || j>=grid[i].length){
            // console.log('ssss');
            return ret;
        }
       
            
        if(visited[i][j]===false){
            visited[i][j]=true;
            if(grid[i][j]==1){
                // console.log(grid[i][j]);
                let rn=[-1,-1,-1,0,0,1,1,1];
                let cn=[-1,0,1,-1,1,-1,0,1];
                ret=1;
                let f;
                for(let k=0;k<8; k++){
                    f=f+dfs(grid,visited,i+rn[k],j+cn[k]);
                }
               
            }
           
        }
        
        return ret;
    }
    
    //main Function to find the number of islands.
    function numIslands(grid)
    {
        // code here
        
        let visited=[];
        for(let i=0;i<grid.length;i++){
            let tmp=[];
            for(let j=0;j<grid[i].length; j++){
                tmp.push(false);
            }
            visited.push(tmp);
        }
        
        // console.log(visited);
        let il=0;
        for(let i=0;i<grid.length;i++){
            
            for(let j=0; j<grid[i].length; j++){
                if(visited[i][j]===false && grid[i][j]==1){
                    let ff=dfs(grid,visited,i,j);
                    // console.log(ff);
                    // console.log(visited);
                    if(ff>0)
                        il++;
                }
            }
        }
        
        return il;
    }
