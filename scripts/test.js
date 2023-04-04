import Client from "ftp";
import * as dotenv from "dotenv";
import * as fs from "node:fs";

dotenv.config({ path: ".env.local" });

const config = {
  host: process.env.server,
  port: process.env.port,
  user: process.env.username,
  password: process.env.password,
};

if (!fs.existsSync("./files")) {
  fs.mkdirSync("./files");
}

var c = new Client();
c.on("ready", function () {
  c.list(function (err, list) {
    if (err) throw err;

    list.forEach(({ name, type }) => {
      if (name === "." || name === "..") return;

      // TODO recursion
      if (type === "d") return;

      console.log(`Trying: ${name}`);

      c.get(name, function (err, stream) {
        if (err) throw err;
        stream.pipe(fs.createWriteStream(`files/${name}`));
        console.log(`Downloaded: ${name}`);
      });
    });

    c.end();
  });
});

c.connect(config);
