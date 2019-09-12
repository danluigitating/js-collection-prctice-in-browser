'use strict';

function collectSameElements(collectionA, collectionB) {
  var similarNumbers = new Array();

  for(var i = 0; i<collectionA.length ; i++)
  {
	  for(var j = 0; j<collectionB.length ; j++)
	  {
		  if (collectionA[i] == collectionB[j])
		  {
			  similarNumbers.push(collectionA[i]);
			  break;
		  }
	  }
   }
  
  return similarNumbers;
}
