'use strict';

function countSameElements(collection) {
 
var map = new Object();
 
for(var i = 0; i < collection.length; i++) {
 if(map[collection[i]] != null) {
    map[collection[i]] += 1;
} else {
    map[collection[i]] = 1;
    }
}

var answer = [];
 
  for (var j = 0 ; j < Object.keys(map).length ;j ++) {
    answer.push({key: Object.keys(map)[j], count: Object.values(map)[j]},);
  }

return answer;

}