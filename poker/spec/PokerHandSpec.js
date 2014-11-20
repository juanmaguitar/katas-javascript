/*
Instructions

This is a simple programming exercise that we'd like you to use in order to demonstrate your coding style and ability. We think it should take about an hour, and if you find yourself taking longer then we advise you to just send us what you've got with a description of the remaining work you'd like to have done.

We're not too fussy about the programming language you use, but we commonly use JavaScript and Clojure, so if you submit an excellent Haskell / OCamL / assembler implementation, we need instructions on how to use it, and an excellent defence of why it's suitable! Feel free to make simplifying assumptions, but let us know what they are.

Create a useful model of a standard 52-card deck of cards:

4 suits - spades, hearts, diamonds, clubs
13 ranks - Ace, two to ten, Jack, Queen, King
I should be able to draw a poker hand (5 card draw, not Texas hold 'em) and identify useful properties of the hand :

Is there a pair of card? (e.g. two Aces)
Is there three of a kind?
Four of a kind?
Are there two pairs?
Is there a straight? (e.g. 4, 5, 6, 7, 8 of any suit)
Is there a flush? (e.g. 2, 4, 6, 8, King - all of Hearts)
What is the highest/lowest card?

*/

// NUMBERS
var A= 1,
    TWO= 2,
    THREE= 3,
    FOUR= 4,
    FIVE= 5,
    SIX= 6,
    SEVEN= 7,
    EIGHT= 8,
    NINE= 9,
    TEN= 10,
    J= 11,
    Q= 12,
    K= 13,

// COLOURS
    HEARTS= 1,
    DIAMONDS= 2,
    CLUBS= 3,
    SPADES= 4;

describe("Card", function() {

  var oCard;

  beforeEach(function() {
    oCard = new Card( THREE, DIAMONDS );
  })

  it("should be able to return its number", function() {

    var nExpectedNumber = 3;
    expect( nExpectedNumber ).toEqual( oCard.getNumber() );

  });

  it("should be able to return its colour", function() {

    var nExpectedColour = 2;
    expect( nExpectedColour ).toEqual( oCard.getColour() );

  });

});

describe("Hand", function() {

  var oHand,
      oFirstCard,
      oSecondCard,
      oThirdCard,
      oFourthCard,
      oFifthCard;

  beforeEach(function() {

    oFirstCard = new Card(SIX,SPADES),
    oSecondCard = new Card(J,CLUBS),
    oThirdCard = new Card(FIVE,HEARTS),
    oFourthCard = new Card(FIVE,DIAMONDS),
    oFifthCard = new Card(TWO,HEARTS);

    oHand = new Hand();

  })

  describe("has a method init that", function() {

    it ("should throw an Error if called w/o any parameters", function() {

      var sExpectedError = new Error('Hand should be intialized w/ some cards'),
          fpInputCall = function () { oHand.init() };

      expect( fpInputCall ).toThrow( sExpectedError );

    });

    it ("should throw an Error if is not called w/ an array", function() {

      var sExpectedError = new Error('Hand should be intialized w/ an array'),
          fpInputCallText = function () { oHand.init("tests") },
          fpInputCallNumbers= function () { oHand.init(1,2,3) },
          fpInputCallObjects= function () { oHand.init( { a:2, b:4}) };


      expect( fpInputCallText ).toThrow( sExpectedError );
      expect( fpInputCallNumbers ).toThrow( sExpectedError );
      expect( fpInputCallObjects ).toThrow( sExpectedError );

    });

    it ("should throw an Error if is not called w/ an array of 5 Cards", function() {

      var sExpectedError = new Error('Hand should be intialized w/ an array of 5 cards'),
          fpInputCallArrayNumbers= function () { oHand.init( [1,2,3,4,5] ) },
          fpInputCallArrayCards= function () { oHand.init( [oFirstCard, oSecondCard] ) };

      expect( fpInputCallArrayNumbers ).toThrow( sExpectedError );
      expect( fpInputCallArrayCards ).toThrow( sExpectedError );

    });

  });

  describe("has a method group_cards that", function() {

    it ("should build an object w/ occurrences of numbers", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );


      var aExpectedObject = { "2":1, "5":2, "6":1, "11":1 };

      expect( oHand.aGroupedCards ).toEqual( aExpectedObject );

    });

  });

  describe("has a method one_pair that", function() {

    it ("should return true if there is a pair in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.one_pair() ).toBeTruthy();

    });

    it ("should return false if there is a pair in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, new Card(THREE,DIAMONDS), oFifthCard] );

      expect( oHand.one_pair() ).toBeFalsy();

    });

  });

    describe("has a method three_of_a_kind that", function() {

    it ("should return true if there is three of a kind in the hand", function() {

      oHand.init( [oFirstCard, new Card(FIVE,CLUBS), oThirdCard, oFourthCard, oFifthCard] );


      expect( oHand.three_of_a_kind() ).toBeTruthy();

    });

    it ("should return false if there isn't three of a kind in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.three_of_a_kind() ).toBeFalsy();

    });

  });

  describe("has a method four_of_a_kind that", function() {

    it ("should return true if there is four of a kind in the hand", function() {

      oHand.init( [new Card(FIVE,SPADES), new Card(FIVE,CLUBS), oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.four_of_a_kind() ).toBeTruthy();

    });

    it ("should return false if there isn't four of a kind in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.four_of_a_kind() ).toBeFalsy();

    });

  });

  describe("has a method two_pairs that", function() {

    it ("should return true if there are two pairs in the hand", function() {

      oHand.init( [oFirstCard, new Card(SIX,CLUBS), oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.two_pairs() ).toBeTruthy();

    });

    it ("should return false if there aren't two pairs in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.two_pairs() ).toBeFalsy();

    });

  });

  describe("has a method straight that", function() {

    it ("should return true if there is a straight in the hand", function() {

      oHand.init( [ new Card(A,SPADES), new Card(TWO,CLUBS), new Card(THREE,HEARTS), new Card(FOUR,CLUBS), new Card(FIVE,HEARTS)] );

      expect( oHand.straight() ).toBeTruthy();

    });

    it ("should return false if there isn't a straight in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.straight() ).toBeFalsy();

    });

  });

  describe("has a method flush that", function() {

    it ("should return true if there is a flush in the hand", function() {

      oHand.init( [ new Card(A,SPADES), new Card(SIX,SPADES), new Card(THREE,SPADES), new Card(J,SPADES), new Card(K,SPADES)] );

      expect( oHand.flush() ).toBeTruthy();

    });

    it ("should return false if there isn't a flush in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.flush() ).toBeFalsy();

    });

  });

  describe("has a method lowest that", function() {

    it ("should return lowest card in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.lowest() ).toEqual(2);

    });

  });

  describe("has a method highest that", function() {

    it ("should return highest card in the hand", function() {

      oHand.init( [oFirstCard, oSecondCard, oThirdCard, oFourthCard, oFifthCard] );

      expect( oHand.highest() ).toEqual(11);

    });

  });


});