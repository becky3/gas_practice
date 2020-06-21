function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet(); 
  const lastRow = 10; // sheet.getLastRow();
  
  let i = 2;
  while(i <= lastRow) {
    if(!sheet.getRange(i, 4).getValue()){ 
      console.log(sheet.getRange(i, 1).getValue());
      sheet.getRange(i, 4).setValue(true);
      

    }
    i++;
    if(i >= lastRow) {
      console.log(sheet.getRange(2, 4, lastRow).getA1Notation());
      break;
    }
  }
}