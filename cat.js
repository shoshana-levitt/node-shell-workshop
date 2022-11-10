const fs = require("fs");

module.exports = function (filename, done) {
  // todo : read the content of bash.js
  fs.readFile(`./${filename}`, "utf8", (err, data) => {
    done(data);
  });
};
