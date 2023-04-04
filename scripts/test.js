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

var c = new Client();
c.on("ready", function () {
  c.list(function (err, list) {
    if (err) throw err;

    console.log(
      `Number of files: ${list.filter(({ type }) => type !== "d").length}`
    );

    list.forEach(({ name, type }) => {
      if (name === "." || name === "..") return;

      // TODO recursion
      if (type === "d") return;

      c.get(name, function (err, stream) {
        if (err) {
          //   console.log("ERROR:", name);
          return;
        }
        stream.pipe(fs.createWriteStream(`${outDir}/${name}`));
        // console.log("Downloaded:", name);
      });
    });

    c.end();
  });
});

c.connect(config);
