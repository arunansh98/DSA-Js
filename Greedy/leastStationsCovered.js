
/* Find the the least number of stations required to cover all the cities. */

let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut","ca","az"]);

let stations = {};
stations["kone"] = new Set(["id","nv","ut"]);
stations["ktwo"] = new Set(["wa","id","mt"]);
stations["kthree"] = new Set(["or","nv","ca"]);
stations["kfour"] = new Set(["nv","ut"]);
stations["kfive"] = new Set(["ca","az"]);

let best_station = 'NONE';
let best_station_states_covered;
let best_station_list = new Set([]);
let states_covered;

/* Function to remove a list of elements from a set - START */
var removeAll = (keys, arr) => {for (prop of keys) arr.delete(prop); return arr};
/* Function to remove a list of elements from a set - END */


while(states_needed.size > 0){
    best_station_states_covered = Number.MIN_VALUE;
    Object.keys(stations).forEach(
        (key) => {
            states_covered = 0;
            for(const value of stations[key]){
                if(states_needed.has(value)){
                    states_covered = states_covered + 1;
                }
            }
            if(states_covered > best_station_states_covered){
                best_station_states_covered = states_covered;
                best_station = key;
            }
        }
    );
    best_station_list.add(best_station);
    removeAll(Array.from(stations[best_station]),states_needed);
}


console.log('best_station_list',best_station_list);



