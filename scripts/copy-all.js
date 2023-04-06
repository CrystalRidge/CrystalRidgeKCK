import Client from "ftp";
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream/promises";
import { ensureDir } from "fs-extra";

dotenv.config({ path: ".env.local" });

const outDir = "wp-backup";

const config = {
  host: process.env.server,
  port: parseInt(process.env.port),
  user: process.env.username,
  password: process.env.password,
};

var numFiles = 0;

const c = new Client();

const cwd = promisify(c.cwd).bind(c);
const cdup = promisify(c.cdup).bind(c);
const pwd = promisify(c.pwd).bind(c);
const list = promisify(c.list).bind(c);
const get = promisify(c.get).bind(c);

await ensureDir(outDir);

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

    const path = `${outDir}${await pwd()}`;
    if (type === "d") {
      await cwd(name);
      await ensureDir(path);
      await copyDirectory();
      await cdup();
    } else {
      const stream = await get(name);
      const outputLocation = `${path}${path.endsWith("/") ? "" : "/"}${name}`;
      console.log(outputLocation);
      await pipeline(stream, fs.createWriteStream(outputLocation));
    }
  }
}
