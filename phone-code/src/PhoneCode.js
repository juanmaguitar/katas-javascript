var TelephoneCoding = function() {}

TelephoneCoding.prototype.build = function( sCode ) {

	var oCodes = {
			'1' : ['.',',','!'],
			'2' : ['a','b','c'],
			'3' : ['d','e','f'],
			'4' : ['g','h','i'],
			'5' : ['j','k','l'],
			'6' : ['m','n','o'],
			'7' : ['p','q','r','s'],
			'8' : ['t','u','v'],
			'9' : ['w','x','y','z'],
			'0' : [' ']
		},
		aLengthCode = sCode.length,
		nIndexCode = 0,
		sCurrentCode, sNextCode = "", 
		sCounter = 0,
		sOutput = "";

	for (; nIndexCode < aLengthCode; nIndexCode++ ) {
		
		sCurrentCode = sCode[nIndexCode];
		sNextCode = sCode[nIndexCode+1];

		if ( sCurrentCode == '.' ) {
			// nothing
		}
		else if ( nIndexCode === aLengthCode-1 ) {
			sOutput += oCodes[sCurrentCode][sCounter];
		}
		else if ( sCurrentCode !== sNextCode ) {
			sOutput += oCodes[sCurrentCode][sCounter];
			sCounter=0;
		}
		else if ( sCurrentCode === sNextCode ) {
			sCounter++;
			sCounter = sCounter%( oCodes[sCurrentCode].length );	 	
		}
	}

	return sOutput;
	
}