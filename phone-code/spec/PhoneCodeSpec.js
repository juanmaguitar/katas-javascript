describe("A suite", function() {

	var telephone;

	beforeEach(function() {
		telephone = new TelephoneCoding();
	});

    it("when input is 2 it should return a", function() {
    	var sInput = telephone.build('2'),
    		sExpectedResult = 'a';

        expect(sInput ).toEqual( sExpectedResult );
    });

	it("when input is 3 it should return d", function() {
    	var sInput = telephone.build('3'),
    		sExpectedResult = 'd';

        expect(sInput ).toEqual( sExpectedResult );
    });

    it("when input is 23 it should return ad", function() {
    	var sInput = telephone.build('23'),
    		sExpectedResult = 'ad';

        expect(sInput ).toEqual( sExpectedResult );
    });

	it("when input is 2345 it should return ad", function() {
    	var sInput = telephone.build('2345'),
    		sExpectedResult = 'adgj';

        expect(sInput ).toEqual( sExpectedResult );
    });

    it("when input is 1234567890 it should return ad", function() {
    	var sInput = telephone.build('1234567890'),
    		sExpectedResult = '.adgjmptw ';

        expect(sInput ).toEqual( sExpectedResult );
    });

    it("when input is 222 it should return c", function() {
    	var sInput = telephone.build('222'),
    		sExpectedResult = 'c';

        expect( sInput ).toEqual( sExpectedResult );
    });

    it("when input is 2223344466 it should return 'cein'", function() {
    	var sInput = telephone.build('2223344466'),
    		sExpectedResult = 'cein';

        expect( sInput ).toEqual( sExpectedResult );
    });

    it("when input is 2222 it should return 'a'", function() {
    	var sInput = telephone.build('2222'),
    		sExpectedResult = 'a';

        expect( sInput ).toEqual( sExpectedResult );
    });

     it("when input is 666555205502777733 it should return 'ola k ase'", function() {
    	var sInput = telephone.build('666555205502777733'),
    		sExpectedResult = 'ola k ase';

        expect( sInput ).toEqual( sExpectedResult );
    });

    it("when input is 4440555666888330552222827777111 it should return 'i love katas!'", function() {
    	var sInput = telephone.build('4440555666888330552222827777111'),
    		sExpectedResult = 'i love katas!';

        expect( sInput ).toEqual( sExpectedResult );
    });

    it("when input is 222.2.222.2 it should return 'caca'", function() {
    	var sInput = telephone.build('222.2.222.2'),
    		sExpectedResult = 'caca';

        expect( sInput ).toEqual( sExpectedResult );
    });


});