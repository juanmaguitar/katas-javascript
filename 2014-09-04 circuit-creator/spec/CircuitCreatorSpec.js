describe("CircuitCreator", function() {

  describe("has basic features that", function() {
    it("should be able to translate '#--' properly", function() {

      var circuit = new CircuitCreator('#--'),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      sExpectedCircuit = '#--';
      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

    it("should be able to translate '#--\\' properly", function() {

      var circuit = new CircuitCreator("#--\\"),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      sExpectedCircuit = "#--\\";
      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

    it("should be able to translate '#--/' properly", function() {

      var circuit = new CircuitCreator("#--/"),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      sExpectedCircuit = "#--/";
      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

    it("should be able to translate '#--/--' properly", function() {

      var circuit = new CircuitCreator("#--/--"),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      var sExpectedCircuit = "#--/";
      sExpectedCircuit = "   |\n" + sExpectedCircuit;
      sExpectedCircuit = "   |\n" + sExpectedCircuit;

      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

    it("should be able to translate '#--/---\\-' properly", function() {

      var circuit = new CircuitCreator("#--/---\\-"),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      var sExpectedCircuit = "#--/";
      sExpectedCircuit = "   |\n" + sExpectedCircuit;
      sExpectedCircuit = "   |\n" + sExpectedCircuit;
      sExpectedCircuit = "   |\n" + sExpectedCircuit;
      sExpectedCircuit = "  -\\\n"  + sExpectedCircuit;

      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

    it("should be able to translate '#--\\---\\---' properly", function() {

      var circuit = new CircuitCreator("#--\\---\\---"),
          sCircuit = circuit.output(),
          sExpectedCircuit;

        var sExpectedCircuit = "#--\\\n";
        sExpectedCircuit += "   |\n";
        sExpectedCircuit += "   |\n";
        sExpectedCircuit += "   |\n";
        sExpectedCircuit += "   \\---";

      expect( sCircuit ).toEqual( sExpectedCircuit );
    });

  });


  describe("has advanced features that", function() {
    it("should be able to translate '#------\\-/-/-\\---' properly", function() {

      var circuit = new CircuitCreator('#------\\-/-/-\\---'),
          sCircuit = circuit.output(),
          sExpectedCircuit;

      sExpectedCircuit = "#------\\\n";
      sExpectedCircuit += "       |\n";
      sExpectedCircuit += "     /-/\n";
      sExpectedCircuit += "     |\n";
      sExpectedCircuit += "     \\---";

      expect( sCircuit ).toEqual( sExpectedCircuit );

    });


   it("should be able to translate '------\\-/-/-\\-----#-------\\--/----------------\\--\\----\\---/---' properly", function() {

      var circuit, sCircuit, sExpectedCircuit;

      circuit = new CircuitCreator('------\\-/-/-\\-----#-------\\--/----------------\\--\\----\\---/---');
      sCircuit = circuit.output();


      sExpectedCircuit = "/---------\\\n";
      sExpectedCircuit += "|         |\n";
      sExpectedCircuit += "|       /-/\n";
      sExpectedCircuit += "|       |\n";
      sExpectedCircuit += "\\----\\  \\-----#-------\\\n";
      sExpectedCircuit += "     |                |\n";
      sExpectedCircuit += "     |                |\n";
      sExpectedCircuit += "     \\----------------/";

      expect( sCircuit ).toEqual( sExpectedCircuit );
    });
  });


});
