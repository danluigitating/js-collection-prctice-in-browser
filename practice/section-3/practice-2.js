'use strict';

function createUpdatedCollection(collectionA, objectB) {
for(var i = 0; i < collectionA.length; i++) {
	for(var j = 0; j < objectB.value.length; j++) {
		if(objectB.value[j] === collectionA[i].key){
			  collectionA[i].count -= collectionA[i].count/3;
			  collectionA[i].count = Math.ceil(collectionA[i].count);
		}
	}	
}

  return collectionA;
}
