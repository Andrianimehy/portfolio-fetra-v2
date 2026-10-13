
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "../src/assets/images");

const images = [
  "hero-web.png",
  "project-barbershop.png",
  "project-faame.png",
  "project-koti.png",
  "project-feelingz.png",
  "project-delice.png",
  "project-hartmann.png",
  "expertise-api.png",
  "expertise-ecommerce.png",
  "expertise-fullstack.png",
];

async function main() {
  for (const name of images) {
    const input = path.join(dir, name);

    if (!fs.existsSync(input)) {
      console.log(`Ignoré, fichier absent : ${name}`);
      continue;
    }

    const output = path.join(
      dir,
      `${path.parse(name).name}.webp`
    );

    await sharp(input)
      .resize({
        width: name === "hero-web.png" ? 1600 : 900,
        withoutEnlargement: true,
      })
      .webp({ quality: 78, effort: 5 })
      .toFile(output);

    const before = fs.statSync(input).size / 1024;
    const after = fs.statSync(output).size / 1024;

    console.log(
      `${name}: ${before.toFixed(0)} Ko → ${after.toFixed(0)} Ko`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
