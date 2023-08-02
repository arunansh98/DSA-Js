/*
NR stands for :- Not Reached

          (NR)   (FINISH)
           A ------ E 
          /|       /
         / |      /
        / (NR) (NR)        
  START    C    D  
        \  |  /
         \ | /
           B 
         (NR)       

Question :- 
            1. Create a graph for the above.
            2. Find the shortest path count.
            3. Find all the nodes traversed to calculate the shortest path count.            
*/



/* Graph creation - START */
let graph = {},src;
src = 'START';
end = 'FINISH';
graph[src] = {};
graph[src]['A'] = 'NOT REACHED';
graph[src]['B'] = 'NOT REACHED';
graph['B'] = {};
graph['B']['C'] = 'NOT REACHED';
graph['B']['D'] = 'NOT REACHED';
graph['D'] = {};
graph['D']['E'] = 'FINISH';
graph['A'] = {};
graph['A']['E'] = 'FINISH';
graph['A']['C'] = 'NOT REACHED';
/* Graph creation - END */



/* Function to find shortest path count - START */
var findShortestPathCount = function(graph,src,end){
    let found = false;
    let loopArray = [src];
    let queue;
    let foundKey;
    let foundKeyArray = [];
    let arr = [];
    let count = 0;
    while(found === false && loopArray?.length > 0){
        queue = [];
        arr = arr.concat(loopArray);
        loopArray.forEach(
            (item)=>{
                if(graph[item]){
                    Object?.keys(graph[item]).forEach(
                        (key)=>{
                            if(graph[item][key] === end){
                                found = true;
                                count = count + 1; 
                                foundKey = key; 
                                foundKeyArray = [...findShortestPath(arr,graph,key),key]; 
                            }
                            else {
                                if(!queue.includes(key) && !(graph[key] && Object?.keys(graph[key])?.includes(item))){ // check for duplicate key and cyclic nodes
                                queue.push(key);
                                } 
                            }
                        }
                    )
                }
            }
        )
        if(!found){
            count = count + 1;
            loopArray = queue;
        }    
    }
    console.log(`${found ? `Shortest Path :-  ${foundKeyArray.join("  ->  ")}` : 'Not Found !!'}`);
    return found ? count : -1;
}
/* Function to find shortest path count - END */




/* Function to find shortest path containing all the traversed nodes - START */
var findShortestPath = function(arr,graph,key){
    let i = 0;
    returnValue = [];
    while(i<=arr.length-1){
        if(graph[arr[i]]){
            if(Object?.keys(graph[arr[i]])?.includes(key)){
                returnValue = [...findShortestPath(arr,graph,arr[i]),arr[i]];
                break;
            }
        }
        ++i;
    }
    return returnValue;
}
/* Function to find shortest path containing all the traversed nodes - END */




let count = findShortestPathCount(graph,src,end);
console.log(`${count!==-1 ? `Shortest Path Count :-  ${count}` : count}`);

