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
let graph = {},
  src;
src = "START";
end = "FINISH";
graph[src] = {};
graph[src]["A"] = "NOT REACHED";
graph[src]["B"] = "NOT REACHED";
graph["B"] = {};
graph["B"]["C"] = "NOT REACHED";
graph["B"]["D"] = "NOT REACHED";
graph["D"] = {};
graph["D"]["E"] = "FINISH";
graph["A"] = {};
graph["A"]["E"] = "FINISH";
graph["A"]["C"] = "NOT REACHED";
/* Graph creation - END */

/* Function to find shortest path count - START */
var findShortestPathCount = function (graph, src, end) {
  let found = false;
  let queue = [src];
  let foundKeyArray = [];
  let arr = [];
  let count = 0;
  let initialLength;
  while (found === false && queue?.length > 0) {
    arr = arr.concat(queue);
    initialLength = queue.length;
    queue.forEach((item) => {
      if (graph[item]) {
        Object?.keys(graph[item]).forEach((key) => {
          if (graph[item][key] === end) {
            found = true;
            count = count + 1;
            foundKeyArray = [...findShortestPath(arr, graph, key), key];
          } else {
            if (!arr.includes(key)) {
              // check for duplicate key and cyclic nodes
              queue.push(key);
            }
          }
        });
      }
    });
    if (!found) {
      count = count + 1;
      queue = queue.slice(initialLength, queue.length);
      console.log("queue", queue);
    }
  }
  console.log(
    `${
      found
        ? `Shortest Path :-  ${foundKeyArray.join("  ->  ")}`
        : "Not Found !!"
    }`
  );
  return found ? count : -1;
};
/* Function to find shortest path count - END */

/* Function to find shortest path containing all the traversed nodes - START */
var findShortestPath = function (arr, graph, key) {
  let i = 0;
  returnValue = [];
  while (i <= arr.length - 1) {
    if (graph[arr[i]]) {
      if (Object?.keys(graph[arr[i]])?.includes(key)) {
        returnValue = !(
          graph[key] &&
          Object?.keys(graph[key])?.includes(arr[i]) &&
          arr[i] !== src
        )
          ? [...findShortestPath(arr, graph, arr[i]), arr[i]]
          : []; // check for cyclic nodes
        break;
      }
    }
    ++i;
  }
  return returnValue;
};
/* Function to find shortest path containing all the traversed nodes - END */

let count = findShortestPathCount(graph, src, end);
console.log(`${count !== -1 ? `Shortest Path Count :-  ${count}` : count}`);

/**
 * Time Complexity - O (V + E) -> where V -> no of vertices/nodes, and E -> no of edges
 */
