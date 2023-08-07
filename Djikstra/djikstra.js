/*
               
             B  
            /|\      
        3  / | \ 9    
          /  |  \      
 (src)  A    3    F (FINISH)  
         \   |   /
        2 \  |  / 4
           \ | /
             C       

Question :- 
            1. Create a graph for the above.
            2. Find the shortest cost from src to FINISH.
            3. Find all the nodes traversed to calculate the shortest cost from src to FINISH.            
*/


/* Graph creation - START */
let graph = {};
let src = 'A'; 
let FINISH = 'F';
graph[src] = {};
graph[src]['B'] = 3;
graph[src]['C'] = 2;
graph['B'] = {};
graph['B'][FINISH] = 9;
graph['C'] = {};
graph['C']['B'] = 3;
graph['C'][FINISH] = 4;
/* Graph creation - END */


/* Set initial costs - START */
let costs = {};
costs[src] = 0;
costs[FINISH] = Math.pow(10, 1000);
/* Set initial costs - END */

/* Set initial parent - START */
let parent = {};
parent[src] = 'NONE';
/* Set initial parent - END */



/* Find lowest cost node - START */
var findLowestCostNode = function(processed_nodes,costs){
    let lowest_cost_node = 'NONE',lowest_cost = Number.MAX_VALUE;
    Object?.keys(costs)?.forEach(
        (node) => {
            if(!processed_nodes.includes(node)){
                if(costs[node] < lowest_cost){
                    lowest_cost = costs[node];
                    lowest_cost_node = node;
                }
            }
        }
    )
    return lowest_cost_node;
}
/* Find lowest cost node - END */



/* Find lowest cost path - START */
var findLowestCostPath = function(parent,lowest_cost_node){
    let parent_node = lowest_cost_node;
    let returnArray = [];
    while(parent_node!=='NONE') {
        returnArray = [parent_node].concat(returnArray);
        parent_node = parent[parent_node];
    }
    return returnArray;
}
/* Find lowest cost path - END */



/* Update costs of neighbours - START */
let processed_nodes = [];
let node_to_process = src;

while(node_to_process !== 'NONE'){
    let neighbours = graph[node_to_process];
    let cost = costs[node_to_process];
    if(neighbours){
        Object?.keys(neighbours)?.forEach(
            (neighbour) => {
                cost = cost + graph[node_to_process][neighbour];
                if(!costs[neighbour] || cost < costs[neighbour]){
                    costs[neighbour] = cost;
                    parent[neighbour] = node_to_process;
                }
                cost = costs[node_to_process];
            }
        );
    }
    processed_nodes.push(node_to_process);
    node_to_process = findLowestCostNode(processed_nodes,costs); // find the lowest cost node
}
/* Update costs of neighbours - END */



console.log('lowest cost => ', costs[FINISH]);
console.log('lowest cost path => ', findLowestCostPath(parent,FINISH));





