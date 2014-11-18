describe("A Harry Potter instance should have a buy method that calculates", function() {

	var harry_potter,
		PRICE_PER_BOOK = 8;

	beforeEach(function() {
		harry_potter = new HarryPotter();
	});

    it("when only 1 copy is sold the cost is 8 EUR (no discounts)", function() {
    	var nInput = harry_potter.buy( 1 ),
    		nExpectedResult = PRICE_PER_BOOK;

        expect( nInput ).toEqual( nExpectedResult );
    });

    it("when 2 different books are sold the discount is 5%", function() {
    	var nInput = harry_potter.buy( 2 ),
    		nTotalPrice = PRICE_PER_BOOK*2,
    		nDiscount = nTotalPrice*0.05;

        expect( nInput ).toEqual( nTotalPrice - nDiscount );
    });

    it("when 3 different books are sold the discount is 10%", function() {
    	var nInput = harry_potter.buy( 3 ),
    		nTotalPrice = PRICE_PER_BOOK*3,
    		nDiscount = nTotalPrice*0.1;

        expect( nInput ).toEqual( nTotalPrice - nDiscount );
    });

    it("when 4 different books are sold the discount is 20%", function() {
    	var nInput = harry_potter.buy( 4 ),
    		nTotalPrice = PRICE_PER_BOOK*4,
    		nDiscount = nTotalPrice*0.2;

        expect( nInput ).toEqual( nTotalPrice - nDiscount );
    });

    it("when 5 different books are sold the discount is 25%", function() {
    	var nInput = harry_potter.buy( 5 ),
			nTotalPrice = PRICE_PER_BOOK*5,
    		nDiscount = nTotalPrice*0.25;

        expect( nInput ).toEqual( nTotalPrice - nDiscount );
    });

    it("when the basket contains [ 1st book (1), 2nd book (0), 3rd book (0), 4th book (2), 5th book (0) ] the final price should be 23,2 EUR (applying 5% over 2 different books)", function() {
    	var nInput = harry_potter.buy( [1,0,0,2,0] ),
    		nExpectedResult = 23.2;

        expect( nInput ).toEqual( nExpectedResult );
    });

});