function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  for (let i=2; i <= lastRow; i++) {
    console.log(sheet.getRange(i, 1).getValue());
  }
}
