const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19`;
const rows = csvData.split('\n').map(row => row.split(','));
const headers = rows[0].map(h => h.toLowerCase());
const dataObjects = rows.slice(1).map(row => {
    let obj = {};
    row.forEach((value, index) => obj[headers[index]] = value);
    return obj;
});
dataObjects.pop();
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
const averageAge = dataObjects.reduce((sum, obj) => sum + Number(obj.age), 0) / dataObjects.length;
const csvOutput = [
    headers.join(','),
    ...dataObjects.map(obj => headers.map(h => obj[h]).join(','))
].join('\n');
console.log(csvOutput);
console.log(`Average Age: ${averageAge}`);