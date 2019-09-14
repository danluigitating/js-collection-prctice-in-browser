'use strict';

function createUpdatedCollection(collectionA, objectB) {
var map = new Object();
 
for(var i = 0; i < collectionA.length; i++) {
 if(map[collectionA[i]] != null && collectionA[i].length ===1) {
    map[collectionA[i]] += 1;
} else if(collectionA[i].length > 1)
    map[collectionA[i].charAt(0)] = JSON.parse(collectionA[i].substring(2, 3));
  else {
    map[collectionA[i]] = 1;
    }
}

var answer = [];
 
  for (var j = 0 ; j < Object.keys(map).length ;j ++) {
    answer.push({key: Object.keys(map)[j], count: Object.values(map)[j]},);
  }
 
for(var i = 0; i < answer.length; i++) {

	for(var j = 0; j < objectB.value.length; j++) {
		if(objectB.value[j] === answer[i].key){
			  answer[i].count -= answer[i].count/3;
			  answer[i].count = Math.ceil(answer[i].count);
		}
	}	
}

return answer
}