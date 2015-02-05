describe("A global function 'mineWeeper' that", function() {

	var sCase1, sExpectedOutput1,
			sCase2, sExpectedOutput2,
			sCase3, sExpectedOutput3;

	/* CASE 1 */
	sCase1 =  "O O O O X O O O O O"+"\n";
	sCase1 +=     "O O O O O O O O X O"+"\n";
	sCase1 +=     "O O O X O O X O O O"+"\n";
	sCase1 +=     "O O O O O O O O O O"+"\n";
	sCase1 +=     "O O O O O X O O O O"+"\n";

	sExpectedOutput1 =  "0 0 0 1 X 1 0 1 1 1"+"\n";
	sExpectedOutput1 +=     "0 0 1 2 2 2 1 2 X 1"+"\n";
	sExpectedOutput1 +=     "0 0 1 X 1 1 X 2 1 1"+"\n";
	sExpectedOutput1 +=     "0 0 1 1 2 2 2 1 0 0"+"\n";
	sExpectedOutput1 +=     "0 0 0 0 1 X 1 0 0 0"+"\n";

	/* CASE 2 */
	sCase2 =  "O O O O"+"\n";
	sCase2 += "O O O O"+"\n";
	sCase2 += "O O O X"+"\n";

	sExpectedOutput2 = "0 0 0 0"+"\n";
	sExpectedOutput2 += "0 0 1 1"+"\n";
	sExpectedOutput2 += "0 0 1 X"+"\n";

	/* CASE 3 */
	sCase3=  "O O O O"+"\n";
	sCase3 += "O X O O"+"\n";
	sCase3 += "O O O X"+"\n";

	sExpectedOutput3 = "1 1 1 0"+"\n";
	sExpectedOutput3 += "1 X 2 1"+"\n";
	sExpectedOutput3 += "1 1 2 X"+"\n";

	/* CASE 4 */
	sCase4 =  "O O O O X O O O O O O O O O X O O O O O"+"\n";
	sCase4 += "O O O O O O O O X O O O O O O O O O X O"+"\n";
	sCase4 += "O O O X O O X O O O O O O X O O X O O O"+"\n";
	sCase4 += "O O O O O O O O O O O O O O O O O O O O"+"\n";
	sCase4 += "O O O O O X O O O O O O O O O X O O O O"+"\n";
	sCase4 += "O O O O X O O O O O O O O O X O O O O O"+"\n";
	sCase4 += "O O O O O O O O X O O O O O O O O O X O"+"\n";
	sCase4 += "O O O X O O X O O O O O O X O O X O O O"+"\n";
	sCase4 += "O O O O O O O O O O O O O O O O O O O O"+"\n";
	sCase4 += "O O O O O X O O O O O O O O O X O O O O"+"\n";

	sExpectedOutput4 = "0 0 0 1 X 1 0 1 1 1 0 0 0 1 X 1 0 1 1 1"+"\n";
	sExpectedOutput4 += "0 0 1 2 2 2 1 2 X 1 0 0 1 2 2 2 1 2 X 1"+"\n";
	sExpectedOutput4 += "0 0 1 X 1 1 X 2 1 1 0 0 1 X 1 1 X 2 1 1"+"\n";
	sExpectedOutput4 += "0 0 1 1 2 2 2 1 0 0 0 0 1 1 2 2 2 1 0 0"+"\n";
	sExpectedOutput4 += "0 0 0 1 2 X 1 0 0 0 0 0 0 1 2 X 1 0 0 0"+"\n";
	sExpectedOutput4 += "0 0 0 1 X 2 1 1 1 1 0 0 0 1 X 2 1 1 1 1"+"\n";
	sExpectedOutput4 += "0 0 1 2 2 2 1 2 X 1 0 0 1 2 2 2 1 2 X 1"+"\n";
	sExpectedOutput4 += "0 0 1 X 1 1 X 2 1 1 0 0 1 X 1 1 X 2 1 1"+"\n";
	sExpectedOutput4 += "0 0 1 1 2 2 2 1 0 0 0 0 1 1 2 2 2 1 0 0"+"\n";
	sExpectedOutput4 += "0 0 0 0 1 X 1 0 0 0 0 0 0 0 1 X 1 0 0 0"+"\n";

	/* CASE 5 */
	sCase5 =  "O O O O X O O O O O"+"\n";
	sCase5 += "X X O O O O O O X O"+"\n";
	sCase5 += "O O O O O O O O O O"+"\n";
	sCase5 += "O O O O O O O O O O"+"\n";
	sCase5 += "O O O O O X O O O O"+"\n";

	sExpectedOutput5 = "2 2 1 1 X 1 0 1 1 1"+"\n";
	sExpectedOutput5 += "X X 1 1 1 1 0 1 X 1"+"\n";
	sExpectedOutput5 += "2 2 1 0 0 0 0 1 1 1"+"\n";
	sExpectedOutput5 += "0 0 0 0 1 1 1 0 0 0"+"\n";
	sExpectedOutput5 += "0 0 0 0 1 X 1 0 0 0"+"\n";

	it("should be a global function", function() {
		expect( typeof window.minesWeeper ).toEqual( "function" );
	});

	it("should returns " + sExpectedOutput1 + " when the input is " + sCase1, function() {
		expect( minesWeeper(sCase1) ).toEqual( sExpectedOutput1 );
	});

	it("should returns " + sExpectedOutput2 + " when the input is " + sCase2, function() {
		expect( minesWeeper(sCase2) ).toEqual( sExpectedOutput2 );
	});

	it("should returns " + sExpectedOutput3 + " when the input is " + sCase3, function() {
		expect( minesWeeper(sCase3) ).toEqual( sExpectedOutput3 );
	});

	it("should returns " + sExpectedOutput4 + " when the input is " + sCase4, function() {
		expect( minesWeeper(sCase4) ).toEqual( sExpectedOutput4 );
	});

	it("should returns " + sExpectedOutput5 + " when the input is " + sCase5, function() {
		expect( minesWeeper(sCase5) ).toEqual( sExpectedOutput5 );
	});

});