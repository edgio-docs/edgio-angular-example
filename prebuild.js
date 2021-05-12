const fs = require("fs");

const BUILD_ID = new Date().getTime();
fs.writeFileSync("BUILD_ID.txt", String(BUILD_ID));
