describe("indexOf", function() {

	var testString;

	beforeEach(function() {
		testString = new String("esto es una prueba");
	});

	it("should be a method of the prototype of String", function() {

		expect( typeof testString.indexOf ).toEqual( "function" );
	});

	it("should return the position of the character found", function() {

		expect( testString.indexOf("t") ).toEqual( 2 );
		expect( testString.indexOf("n") ).toEqual( 9 );

	});

	it("should return -1 if it the character is not found", function() {

		expect( testString.indexOf("x") ).toEqual( -1 );

	});

	it("should return the position of the string found", function() {

		expect( testString.indexOf("esto") ).toEqual( 0 );
		expect( testString.indexOf("una") ).toEqual( 8 );

	});

	it("should return -1 if it the string is not found", function() {

		expect( testString.indexOf("ddd") ).toEqual( -1 );
		expect( testString.indexOf("aaa") ).toEqual( -1 );

	});

		it("should admit a starting position to start looking", function() {

		expect( testString.indexOf("es", 4) ).toEqual( 5 );
		expect( testString.indexOf("es", 6) ).toEqual( -1 );
		expect( testString.indexOf("t", 1) ).toEqual( 2 );
		expect( testString.indexOf("t", 5) ).toEqual( -1 );
	});


});