function dataSorting(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("SUMMERVALE_2022");
  var lastRow = sheet.getRange(3,1,sheet.getLastRow()-1,8);

  lastRow.sort({column:3,ascending: true});
  lastRow.sort({column:2,ascending: true});
  lastRow.sort({column:8,ascending: false});
  lastRow.sort({column:1,ascending: true});
  
  /* 
    CONDITIONAL FORMATTING COLORS:
    1. PIN checked: Gray
    2. DONE checked: Dark blue, strikethrough
    3. P2: Orange
    4. P3: Yellow
    5. P4: Green
    6. P1: Red
  */
}
