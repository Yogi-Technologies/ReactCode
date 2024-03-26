const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Replace 'your-excel-file.xlsx' with the path to your Excel file
const excelFilePath = 'src/Data_Baas.xlsx';

// Read the Excel file
const workbook = xlsx.readFile(excelFilePath);

// Get sheet names
const sheetNames = workbook.SheetNames;

// Get the project directory
const projectDirectory = __dirname;

// Convert each sheet to JSON
sheetNames.forEach(sheetName => {
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);

  // Write the JSON data to a file for each sheet in the project directory
  const jsonFilePath = path.join(projectDirectory, `${sheetName}.json`);
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

  console.log(`Conversion complete for sheet: ${sheetName}. JSON data written to ${jsonFilePath}.`);
});
