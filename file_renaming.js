const fs = require('fs');

//fs.renameSync('./newFile.js', 'newDir/newFile2.js');      //moved and renamed file

fs.renameSync('./newDir/childDir', './parentDir');      //moved and renamed directory