const fs = require('fs');

const writeFile = pageMD => {

    //console.log("entered generate-readme");
    //console.log("pageMD: " + pageMD);

    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', pageMD, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  module.exports = {writeFile};