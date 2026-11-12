const Hexo = require("hexo");

const hexo = new Hexo(process.cwd(), {});

async function main() {
  await hexo.init();
  await hexo.call("clean", {});
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
