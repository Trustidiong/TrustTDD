//'use strict';

module.exports ={ 
  
arithGeo: (inputArray) =>{
   
  //check for an empty array
    if (inputArray.length == 0) {
        return 0;
      	}

  //calculate the common difference and common ratio
    let diff = inputArray[1] - inputArray[0];
    let ratio = inputArray[1] / inputArray[0];

  //initialize common difference/ratio to true
    let arith = true;
    let geo = true;

  //loop through the array
    for(let i = 0; i < inputArray.length - 1; i++)
    {
        
      //test if it is NOT an arithmetic progression
        if( inputArray[i + 1] - inputArray[i] !== diff )
          arith = false;
        
      //test if it is NOT a geometric progression
        if(inputArray[i + 1] / ratio !== inputArray[i])
          geo = false;
    }
//return values
let nil = -1;
if(arith === true)
    return "Arithmetic";
else if(geo === true)
    return "Geometric";
else
    return nil;
	}
}
