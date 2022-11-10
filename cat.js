const fs = require("fs");

module.exports = function () {
  // todo : read the content of bash.js
  fs.readFile("./bash.js", "utf8", (err, data) => {
    console.log(data);
    process.stdout.write("\nprompt > ");
  });
};
