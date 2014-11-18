/**
 * Class that translates a code into a circuit according to these rules:
 *
 * INPUT
 *
 * The symbols and their meanings are:
 *   ‘#’: Defines the starting/finishing line
 *   ‘-’: Straight line, this describes a stretch of track that is straight. This means that direction doesn’t change.
 *   ‘/’: It will depend on the track’s current orientation:
 *     Horizontal: Curve to the left
 *     Vertical: Curve to the right
 *   ‘\’: It will depend on the track’s current orientation:
 *     Horizontal: Curve to the right
 *     Vertical: Curve to the left
 *
 * OUTPUT
 *
 * All the lines of the resulting graphic representation must have the same length and empty spaces may be added if needed to match the longest line length.
 * Characters used for the graphic representation:
 *   Dash ‘-’: Horizontal stretch of track.
 *   Pipe ‘|’: Vertical stretch of track.
 *   Slash ‘/’: Curve.
 *   Back-slash ‘\’: Curve.
 *   Space ‘ ‘: Empty space.
 *   Line feed (as EOL) ‘\n’: This is used to change to start next line of the drawing.
 */

// SINGLETON pattern used: http://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-singleton-in-javascript
// STATE pattern used: http://www.dofactory.com/javascript/state-design-pattern

window.CircuitCreator  = ( function()
{

	var _CircuitCreator,
		oPrototype,

		/**
		 * Object containing the logic of the current direction
		 * @type {Object}
		 */
		_oCurrentDirection,

		/**
		 * Array where the circuit it'll be built
		 * @type {Array}
		 */
		_aProcessedRoad,

		/**
		 * The current Row
		 * @type {Number}
		 */
		_nCurrentRow,

		/**
		 * The position in the row (array)
		 * @type {Number}
		 */
		_nRowPos,

		/**
		 * Total rows
		 * @type {Number}
		 */
		_nRows,

		/**
		 * Position of the Current character in the code
		 * @type {Number}
		 */
		_nCodePos,

		/**
		 * Original Code
		 * @type {String}
		 */
		_sCodeRoad,

		/**
		 * Length of the Original Code
		 * @type {Number}
		 */
		_nLengthCode;

	/**
	 * Set the new direction  and moves
	 * @param {Class} direction Direction to be changed
	 */
	function _changeDirection ( direction ) {
		_oCurrentDirection = direction;
		_oCurrentDirection.go();
	};

	/**
	 * Outputs the circuit
	 */
	function _output () {

		var sProcessedRoad = "",
			nTotalRows = _aProcessedRoad.length,
			nCounterRow = 0;

		for (; nCounterRow < nTotalRows; nCounterRow++) {
			sProcessedRoad += _aProcessedRoad[nCounterRow].join("")

			if (nTotalRows>0 && nCounterRow+1!=nTotalRows) sProcessedRoad += "\n";
		}

		return sProcessedRoad;
	}

	/**
	 * Class that handles the RIGHT movement
	 */
	function _Right ( ) {

		this.go = function() {

			var cCurrentChar = _sCodeRoad[_nCodePos];

			if ( _nCodePos < _nLengthCode ) {

				_nRowPos++;
				_aProcessedRoad[_nCurrentRow][_nRowPos] = cCurrentChar;
				_nCodePos++;

				if ( cCurrentChar !== '/' &&  cCurrentChar !== '\\') {
					this.go();
				}
				else {
					if ( cCurrentChar == '/') {
						_changeDirection( new _Up() )
					}
					else if ( cCurrentChar == '\\') {
						_changeDirection( new _Down() )
					}
				}
			}
			else {
				_output();
			}

		}
	}

	/**
	 * Class that handles the LEFT movement
	 */
	function _Left ( ) {

		this.go = function() {

			var cCurrentChar = _sCodeRoad[_nCodePos];

			if ( _nCodePos < _nLengthCode ) {

				// fill w/ blanks when go LEFTer than ever
				if ( _nRowPos === 0 ) {
					for ( var row=0; row < _nRows; row++) {
							_aProcessedRoad[row].unshift(" ");
					}
				}
				else {
					_nRowPos--; // LEFT logic
				}

				_aProcessedRoad[_nCurrentRow][_nRowPos] = cCurrentChar;
				_nCodePos++;

				if (cCurrentChar !== '/' &&  cCurrentChar !== '\\') {
					this.go();
				}
				else {
					if ( cCurrentChar == '/') {
						_changeDirection( new _Down() )
					}
					else if ( cCurrentChar == '\\') {
						_changeDirection( new _Up() )
					}
				}
			}
			else {
				_output()
			}

		}
	}

	/**
	 * Class that handles the UP movement
	 */
	function _Up() {

		this.go = function() {

			var cCurrentChar;

			if ( _nCodePos < _nLengthCode ) {

				cCurrentChar = _sCodeRoad[_nCodePos].replace("-","|");

				if ( _nCurrentRow === 0) {
					_nRows = _aProcessedRoad.unshift( Array.apply(null, new Array(_nRowPos)).map(String.prototype.valueOf," ") );
				}
				else {
					_nCurrentRow--;
				}

				_aProcessedRoad[_nCurrentRow][_nRowPos] = cCurrentChar;
				_nCodePos++;

				if ( cCurrentChar !== '/' &&  cCurrentChar !== '\\' ) {
					this.go();
				}
				else {
					if (cCurrentChar === '\\') {
						_changeDirection( new _Left() )
					}
					else if (cCurrentChar === '/') {
						_changeDirection( new _Right() )
					}
				}
			}
			else {
				_output()
			}

		}
	}

	/**
	 * Class that handles the DOWN movement
	 */
	function _Down () {

		this.go = function() {

			var cCurrentChar;

			if ( _nCodePos < _nLengthCode ) {

				sCurrentChar = _sCodeRoad[_nCodePos].replace("-","|");

				_nRows = _aProcessedRoad.push( Array.apply(null, new Array(_nRowPos)).map(String.prototype.valueOf," ") );
				_nCurrentRow++;

				_aProcessedRoad[_nCurrentRow][_nRowPos] = sCurrentChar;
				_nCodePos++;

				if ( sCurrentChar !== '/' &&  sCurrentChar !== '\\') {
					this.go();
				}
				else {
					if (sCurrentChar === '\\') {
						_changeDirection( new _Right() )
					}
					if (sCurrentChar === '/') {
						_changeDirection( new _Left() )
					}
				}
			}
			else {
				_output()
			}
		}
	}

	/**
	 * Creates an instance of the class.
	 * @param {Array} sCodeRoad Code to translate
	 */
	 function _CircuitCreator ( sCodeRoad )
	{
		_sCodeRoad = sCodeRoad;
		_nLengthCode = _sCodeRoad.length;
		_nCurrentRow = 0;
		_nRowPos = -1;
		_nCodePos = 0;

		_aProcessedRoad = [];
		_aProcessedRoad[0] = [];

		this.output = _output;

		_oCurrentDirection = new _Right();
		_oCurrentDirection.go( _nCodePos );
	};


	return _CircuitCreator;

}() );

