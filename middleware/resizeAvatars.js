const Jimp = require("jimp");

const resizeFile = async (fullPathToFile) => {
  const avatar = await Jimp.read(fullPathToFile);
  avatar.resize(250, 250); 
  await avatar.writeAsync(fullPathToFile);
};

module.exports = resizeFile;