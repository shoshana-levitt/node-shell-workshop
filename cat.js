const fs = require("fs");

module.exports = function (filename) {
  // todo : read the content of bash.js
  fs.readFile(`./${filename}`, "utf8", (err, data) => {
    console.log(data);
    process.stdout.write("\nprompt > ");
  });
};
