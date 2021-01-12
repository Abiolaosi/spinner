/*
Refactor Challenge

Refactor the logic to remove the repeated setTimeout statements.

We should instead be left with much less code (about 8 to 10 lines of code).
*/
let spinnerInput = ['\r| ', '\r/ ', '\r- ', '\r\\   ', '\r|   ', '\r/ ', '\r- ', '\r\\   ', '\r|   ', '\n']

process.stdout.write('hello from spinner1.js... \rheyyy\n');

let x = 0;
for (const element of spinnerInput) {
  setTimeout(() => {
    process.stdout.write(element);
  }, 100 + x);
  x += 200;
  if (x === spinnerInput.length) {
    break;
  }

}