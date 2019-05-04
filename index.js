const fs = require("fs")

fs
    .createReadStream("./text.txt")
    .pipe(process.stdout)

