function arithGeo(inputArray) {

//checks whether it is an empty array    
    if (inputArray.length == 0) {
        return 0;
    	}

    //checks for the common difference in Arithmetic Progressions
    let difference  = inputArray[1] - inputArray[0];
    
    //checks for the common ratio in Geometric progression
    let ratio = inputArray[1] / inputArray[0];
    
    //loop through the input array
    for (let i = 1; i < inputArray.length; ++i) {

    	//determine if it is an Arithmetic Progression
        if( (inputArray[i] - inputArray[i-1]) == (difference)){
        	return "Arithmetic";
			}

		//determine if it is a geometric progression
		else if ( (inputArray[i] / inputArray[i-1]) == (ratio)){
        	return "Geometric";
			}

		//when it is neither AP nor GP
		else {
			return -1;
		}
		}

    return;
}