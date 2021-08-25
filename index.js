const { createConverter } = require('convert-svg-to-png');
const fs = require('fs');
const util = require('util');
const path = require('path');

 
const readdir = util.promisify(fs.readdir);
 
async function convertSvgFiles(dirPath) {
  const converter = createConverter();
 
  try {
    const filePaths = await readdir(dirPath);
 
    for (const filePath of filePaths) {
      await converter.convertFile(path.join(dirPath, filePath), {height: 128, width:128});
    }
  } finally {
    await converter.destroy();
  }
}

convertSvgFiles('./svg');