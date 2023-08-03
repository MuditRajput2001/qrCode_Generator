const input = require("inquirer");
const img = require("qr-image");
const fs = require("fs");
input
  .prompt([

   {message : "Type your url : ",
    name : "URL",
},
  ])
  .then((answer) => {
   
    const url = answer.URL;
    const qr = img.image(url);
   
    qr.pipe(fs.createWriteStream("qr-imag.png"));
    

    
    

  });
  

  