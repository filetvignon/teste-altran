const readline = require("readline");

class Terminal {
  constructor(input = process.stdin, output = process.stdout) {
    this.console = readline.createInterface({
      input,
      output,
    });
  }

  getInput() {
    return new Promise((resolve, reject) => {
      this.console.question("Digite os CEPs: ", (answer) => {
        resolve(answer.trim());
      });
      // this.console.prompt("Digite os CEPs: ", (answer) => {
      //   resolve(answer);
      // });
    });
  }

  close() {
    this.console.close();
  }
}

module.exports = Terminal;
