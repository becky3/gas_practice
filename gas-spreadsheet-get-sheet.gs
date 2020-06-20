function myFunction() {
  const sheetName = "シート1"
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  console.log(`[${sheetName}]=${sheet.getName()}`);
  
  const avtiveSheet = SpreadsheetApp.getActiveSheet();
  console.log(`アクティブシート：${avtiveSheet.getName()}`);

}
