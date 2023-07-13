

// import inquirer from 'inquirer';

import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"type the url", 
    name:"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));




fs.writeFile("message.txt", url, (err)=>{
if(err) throw err;
console.log("file saved");
});


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




 
// var qr_svg = qr.image(url);
// qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });