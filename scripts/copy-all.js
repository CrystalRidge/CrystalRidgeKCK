import Client from "ftp";
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream/promises";

dotenv.config({ path: ".env.local" });

const outDir = "wp-backup";

const config = {
  host: process.env.server,
  port: parseInt(process.env.port),
  user: process.env.username,
  password: process.env.password,
};

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

var numFiles = 0;

const c = new Client();

const cwd = promisify(c.cwd).bind(c);
const cdup = promisify(c.cdup).bind(c);
const list = promisify(c.list).bind(c);
const get = promisify(c.get).bind(c);

c.on("ready", async function () {
  await copyDirectory();
  console.log(numFiles);
  c.end();
});

c.connect(config);

async function copyDirectory() {
  const files = await list();

  numFiles += files.filter(({ type }) => type !== "d").length;

  for (const { name, type } of files) {
    if (name === "." || name === "..") continue;

    if (type === "d") {
      await cwd(name);
      await copyDirectory();
      await cdup();
    } else {
      const stream = await get(name);
      await pipeline(stream, fs.createWriteStream(`${outDir}/${name}`));
    }
  }
}
