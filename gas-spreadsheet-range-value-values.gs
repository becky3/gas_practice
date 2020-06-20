function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange("A3");
  console.log(`[A3]=${range.getValue()}`);

  const range2 = sheet.getRange("A3:C4");
  console.log(`[A3:C4]=`);
  console.log(range2.getValues());

}
