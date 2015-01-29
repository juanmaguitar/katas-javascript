String.prototype.indexOf = function( strToFind, start ) {

	var origin = this.toString(),
		orLength = origin.length,
		tofLength = strToFind.length,
		i = start || 0, counter=0,
		firstOccurence,
		bIsEqual, bIsLast;

	for ( ; i<orLength; i++ ) {
		bIsEqual = (strToFind[counter] === origin[i]);
		bIsLast = (tofLength === (counter+1) );

		if ( bIsEqual ) {
			if (counter === 0) firstOccurence = i;
			if (bIsLast) return firstOccurence;
			else counter++;
		}

	}

	return -1;
}

