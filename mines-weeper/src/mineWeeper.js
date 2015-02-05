
function minesWeeper ( BMC_TEST_INPUT_MAGIC ) {

  var aMapMines = BMC_TEST_INPUT_MAGIC.split("\n"),
      nNumRows, nNumCols, sCurrentRow,
      nRow, nCol,
      sFinalOutput = "";

  aMapMines.length = aMapMines.length-1;
  nNumRows = aMapMines.length;

  // preparing the array
  for (nRow = 0; nRow < nNumRows; nRow++ ) {

    sCurrentRow = aMapMines[nRow];
    aMapMines[nRow] = sCurrentRow.split(" ");

    nNumCols = aMapMines[nRow].length;

    for (nCol = 0; nCol < nNumCols; nCol++) {
      aMapMines[nRow][nCol] = aMapMines[nRow][nCol] != 'X' ? 0 : 'X';
    }

  }


  // mineWeeper
  for (nRow = 0; nRow < nNumRows; nRow++ ) {

    for (nCol = 0 ; nCol < nNumCols; nCol++) {

      if ( aMapMines[nRow][nCol] == "X") {

        // top
        if (nRow > 0) {
          if (nCol > 0) {
            aMapMines[nRow-1][nCol-1] != 'X' ? aMapMines[nRow-1][nCol-1]++ : null;
          }
          aMapMines[nRow-1][nCol] != 'X' ? aMapMines[nRow-1][nCol]++ : null;
          if (nCol < nNumCols-1) {
            aMapMines[nRow-1][nCol+1] != 'X' ? aMapMines[nRow-1][nCol+1]++ : null;
          }
        }


        // same row
        if (nCol > 0) {
          aMapMines[nRow][nCol-1] != 'X' ? aMapMines[nRow][nCol-1]++ : null;
        }
        if (nCol < nNumCols-1) {
          aMapMines[nRow][nCol+1] != 'X' ? aMapMines[nRow][nCol+1]++ : null;
        }

        if (nRow != nNumRows-1) { // bottom
          if (nCol > 0) {
            aMapMines[nRow+1][nCol-1] != 'X' ? aMapMines[nRow+1][nCol-1]++ : null;
          }
          aMapMines[nRow+1][nCol] != 'X' ? aMapMines[nRow+1][nCol]++ : null;
          if (nCol < nNumCols-1) {
            aMapMines[nRow+1][nCol+1] != 'X' ? aMapMines[nRow+1][nCol+1]++ : null;
          }
        }
      }

    }

  }

  // preparing output
  for (nRow = 0; nRow < nNumRows; nRow++ ) {
    sFinalOutput += aMapMines[nRow].join(" ") + "\n";
  }

  return sFinalOutput;

}