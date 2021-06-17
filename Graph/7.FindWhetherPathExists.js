/*Given a grid of size n*n filled with 0, 1, 2, 3. Check whether there is a path possible from the source to destination. You can traverse up, down, right and left.
The description of cells is as follows:

A value of cell 1 means Source.
A value of cell 2 means Destination.
A value of cell 3 means Blank cell.
A value of cell 0 means Wall.
Note: There are only a single source and a single destination.*/

isSafe(grid,visited,sx,sy){
        let rows=grid.length;
        let cols=grid[0].length;
        if(sx<0 || sy<0 || sx>=rows || sy>=cols || visited[sx][sy]==true){
            return false;
        }else{
            return true;
        }
    }
    dfs(grid,visited,sx,sy){
        visited[sx][sy]=true;
        let rows=grid.length;
        let cols=grid[0].length;
        
        
        if(grid[sx][sy]==0)
            return false;
        if(grid[sx][sy]==2)
            return [[sx,sy]];
            
        let nghx=[-1,0,1,0];
        let nghy=[0,-1,0,1];
        
        for(let i=0; i<4; i++){
            if(this.isSafe(grid,visited,sx+nghx[i],sy+nghy[i])){
                let res=dfs(grid,visited,sx+nghx[i],sy+nghy[i]);
                if(res.length>0){
                    return [[sx,sy],...res]
                }
                    
            }
        }
        
        return false;
        
    }
    is_Possible(grid)
    {
        // code here
        //findout the source
        let rows=grid.length;
        let cols=grid[0].length;
        
        let startx=0;
        let starty=0;
        let flag=false;
        
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j] == 1){
                    startx=i;
                    starty=j;
                    flag=true;
                }
                if(flag === true)
                    break;
            }
            
            if(flag === true)
                break;
        }
        
        
        let visited=[];
        for(let i=0; i<rows; i++){
            let tmp=[];
            for(let j=0; j<cols; j++){
                tmp.push(false);   
            }
            visited.push(tmp)
        }
        
        let res=dfs(grid,visited,startx,starty);
        
        console.log(res)
        return res;
        
    }
