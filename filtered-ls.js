// # LEARN YOU THE NODE.JS FOR MUCH WIN!

//  ## FILTERED LS (Exercise 5 of 13)

//   Create a file named filtered-ls.js.

//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.

//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.

//   Keep in mind that the first arguments of your program are not the first
//   values of the process.argv array, as the first two values are reserved for
//   system info by Node.

//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.

//  ─────────────────────────────────────────────────────────────────────────────

//  ## HINTS

//   The fs.readdir() method takes a pathname as its first argument and a
//   callback as its second. The callback signature is:

//      function callback (err, list) { /* ... */ }

//   where list is an array of filename strings.

//   Documentation on the fs module can be found by pointing your browser here:
//   file://C:\Users\Parker\AppData\Roaming\npm\node_modules\learnyounode\docs-
//   nodejs\fs.html

//   You may also find node's path module helpful, particularly the extname
//   method.

//   Documentation on the path module can be found by pointing your browser
//   here:
//   file://C:\Users\Parker\AppData\Roaming\npm\node_modules\learnyounode\docs-
//   nodejs\path.html

//   Check to see if your program is correct by running this command:

//      $ learnyounode verify filtered-ls.js

//  ─────────────────────────────────────────────────────────────────────────────

//    » To print these instructions again, run: learnyounode print
//    » To execute your program in a test environment, run: learnyounode run filtered-ls.js
//    » To verify your program, run: learnyounode verify filtered-ls.js
//    » For help run: learnyounode help
//  ─────────────────────────────────────────────────────────────────────────────
// make sure file is running

const fs = require("fs");
const process = require("process");
const path = require("path");
const directory = process.argv[2];
const extension = `.${process.argv[3]}`;
fs.readdir(directory, (err, list) => {
  list.map((file) => {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
