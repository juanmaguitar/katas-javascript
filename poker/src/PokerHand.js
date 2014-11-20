var Card = function( number, colour ) {

	var nNumber = number,
		nColour = colour;

	this.getNumber = function() {
		return nNumber;
	};

	this.getColour = function() {
		return nColour;
	};

}

var Hand = function() {
	this.aCards = [],
	this.nCardsLength = 0,
	this.aGroupedCards = {};
	this.nGroupLength = 0;
}


Hand.prototype.init  = function ( cards ) {

	var i = 0;

	// Check has parameters
	if ( !cards ) {
		throw new Error('Hand should be intialized w/ some cards');
	}

	// Check is array
	if ( Object.prototype.toString.call( cards ) !== '[object Array]' ) {
		throw new Error('Hand should be intialized w/ an array');
	}

	if ( cards.length == 5 ) {
		// Check is array of cards
		for ( ; i<cards.length; i++) {
			if ( !(cards[i] instanceof Card) ) {
				throw new Error('Hand should be intialized w/ an array of 5 cards');
			}
		}
	}
	else {
		throw new Error('Hand should be intialized w/ an array of 5 cards');
	}

	this.aCards = cards;

	// order array
	this.aCards.sort(function (a, b) {
		return a.getNumber() - b.getNumber();
	});

	this.nCardsLength = cards.length;
	this.group_cards();

}

Hand.prototype.group_cards  = function () {

	var i=0, nCurrentNumber;

	this.aGroupedCards = {};

	for ( ; i<this.nCardsLength; i++) {
		nCurrentNumber = this.aCards[i].getNumber();
		if( this.aGroupedCards[nCurrentNumber] ) {
			this.aGroupedCards[nCurrentNumber]++;
		}
		else {
			this.aGroupedCards[nCurrentNumber] = 1;
			this.nGroupLength++;
		}
	}
}


Hand.prototype.one_pair  = function () {

	var number;

	for ( number in this.aGroupedCards ) {
		if ( this.aGroupedCards[number] == 2) {
			return true;
		}
	}
}

Hand.prototype.three_of_a_kind  = function () {

	var number;

	for ( number in this.aGroupedCards ) {
		if ( this.aGroupedCards[number] == 3) {
			return true;
		}
	}

}

Hand.prototype.four_of_a_kind  = function () {

	var number;

	for ( number in this.aGroupedCards ) {
		if ( this.aGroupedCards[number] == 4) {
			return true;
		}
	}

}

Hand.prototype.two_pairs  = function () {

	var number,
		pairs = 0;

	for ( number in this.aGroupedCards ) {
		if ( this.aGroupedCards[number] == 2) {
			pairs++
		}
	}
	return (pairs >=2);
}


Hand.prototype.straight  = function () {

	var i=0,
		nCurrentNumber, nNextNumber;

	for ( ; i<this.nCardsLength-1; i++) {

		nCurrentNumber = this.aCards[i].getNumber();
		nNextNumber = this.aCards[i+1].getNumber();

		if(nNextNumber - nCurrentNumber != 1) {
			return false;
		}
	}
	return true;
}

Hand.prototype.flush  = function () {

	var i=1,
		nCurrentColour,
		nFirstColour = this.aCards[0].getColour();

	for ( ; i<this.nCardsLength; i++) {
		nCurrentColour = this.aCards[i].getColour();
		if( nFirstColour != nCurrentColour ) {
			return false;
		}
	}
	return true;

}

Hand.prototype.lowest = function () {
	return this.aCards[0].getNumber();
}

Hand.prototype.highest  = function () {
	return this.aCards[4].getNumber();
}

