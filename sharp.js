const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/assetpng');
const target2 = path.resolve(__dirname, 'src/public/asset');
const destination = path.resolve(__dirname, 'dist/assetpng');
const destination2 = path.resolve(__dirname, 'dist/asset');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

if (!fs.existsSync(destination2)) {
  fs.mkdirSync(destination2);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.png`,
      ));
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.png`,
      ));
  });

fs.readdirSync(target2)
  .forEach((image) => {
    sharp(`${target2}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination2}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));
    sharp(`${target2}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination2}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });