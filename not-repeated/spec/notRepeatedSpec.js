describe("Not Repeated", function() {

	it("should be a global function", function() {
		expect( typeof window.notRepeated ).toEqual( "function" );
	});

	it("when receive [1,1,2,1] should return 2", function() {
		expect( notRepeated([1,1,2,1]) ).toEqual( 2 );
	});

	it("when receive [1,1,1,1] should return -1", function() {
		expect( notRepeated([1,1,1,1]) ).toEqual( -1 );
	});

	it("when receive [1] should return 1", function() {
		expect( notRepeated([1]) ).toEqual( 1 );
	});

	it("when receive [1,2] should return 1", function() {
		expect( notRepeated([1,2]) ).toEqual( 1 );
	});

	it("when receive [1,2,1] should return 1", function() {
		expect( notRepeated([1,2,1]) ).toEqual( 2 );
	});

	it("when receive [1,2,1,2,4,5,6,8,5,6,4,3,2,4,5,7,4,6,4,7,8] should return 3", function() {
		expect( notRepeated([1,2,1,2,4,5,6,8,5,6,4,3,2,4,5,7,4,6,4,7,8]) ).toEqual( 3 );
	});

});