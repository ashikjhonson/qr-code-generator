import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
.prompt(
    [
        {
            message: "Enter URL", 
            name: "URL"
        }
    ]
)
.then((inputs)=> {
    const URL = inputs.URL;
    let qr_code = qr.image(URL);
    qr_code.pipe(fs.createWriteStream("qr_image.png"));
})
.catch((err)=> {
    console.log("Could not generate a QR Code, Error:",err);
})