function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  let i = 2;
  while(sheet.getRange(i, 4).getValue()){
    i++;
  }
  console.log(sheet.getRange(i, 1).getValue());
  sheet.getRange(i, 4).setValue(true);
}
