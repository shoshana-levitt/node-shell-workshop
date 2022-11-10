const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" ");
  const cmd = input[0]; //remove the newline

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    const filename = input[1];
    cat(filename);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
