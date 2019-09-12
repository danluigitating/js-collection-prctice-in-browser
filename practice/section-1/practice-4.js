'use strict';

function collectSameElements(collectionA, collectionB) {
  var resultArray = new Array();
  
  var collectionBValues=collectionB.value;
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionBValues.length ; j++)
    {
      if (collectionA[i].key == collectionBValues[j])
      {
        resultArray.push(collectionA[i].key);
        break;
      }
    }
  }
  return resultArray;
}
