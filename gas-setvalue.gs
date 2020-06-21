function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  for(let i=2; i <= lastRow; i++) {
    if (sheet.getRange(i, 4).getValue()) {
      continue;
    }
    console.log(sheet.getRange(i,1).getValue());
    sheet.getRange(i, 4).setValue(true);
  }
}
