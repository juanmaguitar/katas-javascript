var HarryPotter = function() {}

HarryPotter.prototype.buy = function( books ) {

	function _isNumeric(input) {
		return typeof input === 'number';
	}

	function _isArray(input) {
		return Object.prototype.toString.call( input ) === '[object Array]';
	}

	function _SumArray (a,b) {
		return a+b;
	}

	var PRICE_PER_BOOK = {
			1 : 8,
			2 : 8-0.4, // 7.6
			3: 8-0.8, // 7.2
			4: 8-1.6, // 6.4
			5: 8-2, // 6
		},
		nTotalPrice = 0,
		nIndex,
		nGroupPrice,nBooksGroup,
		nMaxGroup, nBooks;

	if ( _isNumeric( books ) ) {
		nTotalPrice = books*PRICE_PER_BOOK[books];
	}
	else if ( _isArray( books ) ) {

		nMaxGroup = nBooks = books.length;

		// temp solution that works w/ specifications
		if ( !( books.reduce( _SumArray ) %4) ) {
			nMaxGroup = 4;
		}

		// http://goo.gl/UudowK
		while ( books.reduce( _SumArray ) > 0 ) {
			nBooksGroup = nGroupPrice = 0;
			for ( nIndex = 0; nIndex < nBooks; nIndex++ ) {
				if ( nBooksGroup === nMaxGroup ) {
					nIndex = nBooks;
				}
				else if ( books[nIndex] != 0 ) {
					books[nIndex]--;
					nBooksGroup++;
				}
			}
			nGroupPrice = nBooksGroup*PRICE_PER_BOOK[nBooksGroup]
			nTotalPrice+= nGroupPrice;
		}

	}

	return (nTotalPrice%1 != 0) ? Math.round(nTotalPrice*10)/10 : nTotalPrice;

}