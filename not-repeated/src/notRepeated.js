/**
* returns first value is not repeated in the array
* @function
* @param {Array} Array of numbers
* @returns {Number} First number is not repeated or -1
*/
function notRepeated( aArray ) {

	var	nLength = aArray.length,
		nCurrentValue,
		i,j;

	// for every item in the array
	for (i=0; i<nLength; i++) {
		// we compare w/ next ones on
		nCurrentValue = aArray[i];
		if ( !!aArray[i] ) { // if it's not false
			for ( j=i+1; j<nLength; j++) {
				if (nCurrentValue == aArray[j]) {
					aArray[i] = aArray[j] = "";
				}
			}
		}
	}

	for (i=0; i<nLength; i++) {
		if (aArray[i]) {
			return aArray[i];
		}
	}

	return -1;

}


