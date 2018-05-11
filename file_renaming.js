const fs = require('fs');

//fs.renameSync('./newFile.js', 'newDir/newFile2.js');

fs.renameSync('./newDir/childDir', './parentDir');