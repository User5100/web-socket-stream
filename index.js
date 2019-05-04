const fs = require("fs")
const through = require("through2")

fs
    .createReadStream("./text.txt")
    .pipe(through(toUpper))
    .pipe(process.stdout)

function toUpper(buf, enc, next) {
    next(null, buf.toString().toUpperCase())
}

