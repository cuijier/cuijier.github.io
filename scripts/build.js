const fs = require("fs");
const path = require("path");
const Hexo = require("hexo");

const hexo = new Hexo(process.cwd(), {});

async function main() {
  await hexo.init();
  await hexo.call("clean", {});

  console.log("Site root:", process.cwd());
  console.log("Hexo source_dir:", hexo.config.source_dir);
  console.log("Hexo post_dir:", hexo.config.post_dir);
  const postDir = path.resolve(process.cwd(), hexo.config.source_dir, hexo.config.post_dir);
  console.log("Resolved post directory:", postDir);
  console.log("Post directory exists:", fs.existsSync(postDir));
  console.log("Post files:", fs.existsSync(postDir) ? fs.readdirSync(postDir) : []);

  await hexo.load();

  const posts = hexo.locals.get("posts");
  console.log("Loaded post count:", posts ? posts.length : "unavailable");
  if (posts) console.log("Loaded post sources:", posts.map((post) => post.source));
  if (!posts || posts.length === 0) throw new Error("Hexo loaded zero posts; refusing to publish an empty site.");

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
