const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "../src/assets/images");

const images = [
  { name: "hero-web.png", width: 1600 },
  { name: "project-barbershop.png", width: 900 },
  { name: "project-faame.png", width: 900 },
  { name: "project-koti.png", width: 900 },
  { name: "project-feelingz.png", width: 900 },
  { name: "project-delice.png", width: 900 },
  { name: "project-hartmann.png", width: 900 },
  { name: "expertise-api.png", width: 900 },
  { name: "expertise-ecommerce.png", width: 900 },
  { name: "expertise-fullstack.png", width: 900 },
  { name: "expertise-frontend.png", width: 700 },
  { name: "expertise-database.png", width: 700 },
  { name: "hero-ecommerce.jpg", width: 1400 },
  { name: "hero-fullstack.jpg", width: 1400 },
];

async function main() {
  for (const { name, width } of images) {
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
      .resize({ width, withoutEnlargement: true })
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