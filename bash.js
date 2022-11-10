const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const date = require('./date')
//Output a prompt
process.stdout.write("prompt > ");

// todo: remove repeated work
const done = (output) => {
  console.log(output);
  process.stdout.write("\nprompt > ");
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" ");
  const cmd = input[0]; //remove the newline

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd === "cat") {
    const filename = input[1];
    cat(filename, done);
  } else if (cmd === 'date') {
    date(done)
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
