const fs = require("fs");
const path = require("path");
const Hexo = require("hexo");

const hexo = new Hexo(process.cwd(), {});

async function main() {
  await hexo.init();
  await hexo.call("clean", {});

  const postDir = path.resolve(process.cwd(), hexo.config.source_dir, "_posts");
  console.log("Site root:", process.cwd());
  console.log("Hexo source_dir:", hexo.config.source_dir);
  console.log("Resolved post directory:", postDir);
  console.log("Post directory exists:", fs.existsSync(postDir));
  console.log("Post files:", fs.existsSync(postDir) ? fs.readdirSync(postDir) : []);

  await hexo.load();

  const modelCount = await hexo.model("Post").count();
  const posts = hexo.locals.get("posts");
  console.log("Post model count:", modelCount);
  console.log("Loaded post count:", posts ? posts.length : "unavailable");
  if (!modelCount) throw new Error("Hexo did not load any post records; refusing to publish an empty site.");

  await hexo.call("generate", {});
  await hexo.exit();
}

main().catch(async (error) => {
  console.error(error);
  try {
    await hexo.exit(error);
  } finally {
    process.exitCode = 1;
  }
});
