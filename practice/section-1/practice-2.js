'use strict';

function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  
  var collectionBValues=collectionB[0];
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionBValues.length ; j++)
    {
      if (collectionA[i] == collectionBValues[j])
      {
        c.push(collectionA[i]);
        break;
      }
    }
  }
  return c;
}