// console.log("hi")
// const  my = require('./myMod/myModule')

// my.sayHello();
// my.sayBy();
// const os = require("os");

// const userName = os.userInfo();

// console.log(userName);

// console.log(__dirname)
// console.log(__filename)
// setInterval(()=>{
//   console.log("mendi50k")
// },1000)



// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, '/text');
// const textIn = fs.readFileSync(`${dirPath}/input.txt`,'utf-8');

// const arr = textIn.split('\r\n');

// console.table(arr);

// for (let i = 0; i < arr.length ; i++ ){
//   const line = arr[i].split(' ')
//   console.table(line)
// }

// const textOut = `the text was : ${textIn}`
// console.log(textOut)

// fs.writeFileSync(`${dirPath}/output.txt`,textOut);


const fs = require("fs");
const path = require("path");

// נתיב לתיקיית הקבצים
const dirPath = path.join(__dirname, "/text");

// בדיקה אם הקבצים קיימים ואם לא, יצירתם עם תוכן דוגמה
for (let i = 1; i <= 10; i++) {
  const filePath = `${dirPath}/file${i}.txt`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `File ${i} example line\n`.repeat(i).trim());
  }
}

// קובץ הפלט
const outputFilePath = `${dirPath}/output.txt`;
const outputStream = fs.createWriteStream(outputFilePath);

// קריאה והעתקת השורות מהקבצים
for (let i = 1; i <= 10; i++) {
  const filePath = `${dirPath}/file${i}.txt`;
  const numLinesToCopy = i; // שורות להעתיק מהקובץ ה-n

  if (fs.existsSync(filePath)) {
    const textIn = fs.readFileSync(filePath, "utf-8");
    const lines = textIn.split("\n");

    // כתיבה של עד numLinesToCopy שורות מתוך הקובץ הנוכחי
    for (let j = 0; j < numLinesToCopy; j++) {
      if (j < lines.length) {
        outputStream.write(lines[j] + "\n");
      } else {
        break; // אין מספיק שורות בקובץ
      }
    }
  } else {
    console.log(`File ${filePath} does not exist.`);
  }
}

outputStream.end();
console.log(`Content copied to ${outputFilePath}`);


