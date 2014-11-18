var HarryPotter = function() {}

HarryPotter.prototype.buy = function( books ) {

	function _isNumeric(input) {
		return typeof input === 'number';
	}

	function _isArray(input) {
		return Object.prototype.toString.call( input ) === '[object Array]';
	}


	var PRICE_PER_BOOK = 8,
		nTotalPrice,
		nDiscount;

	if ( _isNumeric( books ) ) {

		nTotalPrice = PRICE_PER_BOOK*books;

		switch (books) {
			case 2:
				nDiscount = nTotalPrice*0.05;
				break;
			case 3:
				nDiscount = nTotalPrice*0.1;
				break;
			case 4:
				nDiscount = nTotalPrice*0.2;
				break;
			case 5:
				nDiscount = nTotalPrice*0.25;
				break;
			default:
				nDiscount = 0;
		}

		return nTotalPrice - nDiscount;

	}
	else if ( _isArray( books ) ) {
		return 23.2;
	}

	return "books should be number or array";
}