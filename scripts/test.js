import Client from "ftp";
import * as dotenv from "dotenv";
import * as fs from "node:fs";

dotenv.config({ path: ".env.local" });

const outDir = "wp-backup";

const config = {
  host: process.env.server,
  port: process.env.port,
  user: process.env.username,
  password: process.env.password,
};

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

var numFiles = 0;

const c = new Client();
c.on("ready", function () {
  copyDirectory();
  console.log(numFiles);
  c.end();
});

c.connect(config);

function copyDirectory() {
  c.list(function (err, list) {
    if (err) throw err;

    numFiles += list.filter(({ type }) => type !== "d").length;

    list.forEach(({ name, type }) => {
      if (name === "." || name === "..") return;

      if (type === "d") {
        c.cwd(name, function () {
          copyDirectory();
        });
        return;
      }

      c.get(name, function (err, stream) {
        if (err) return;

        stream.pipe(fs.createWriteStream(`${outDir}/${name}`));
      });
    });
  });
}
