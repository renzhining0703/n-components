const fs = require("fs");
const path = require("path");

const srcDir1 = path.join(__dirname, "../cp"); // 需要复制的文件1
const srcDir2 = path.join(__dirname, "../cp-indexD"); // 需要复制的文件2
const tarDir = path.join(__dirname, "../n-ui"); // 复制到的目标文件

// 将srcPath路径的文件复制到tarPath
const copyFile = function (srcPath, tarPath, cb) {
  let rs = fs.createReadStream(srcPath);
  rs.on("error", function (err) {
    if (err) {
      console.log("read error", srcPath);
    }
    cb && cb(err);
  });

  let ws = fs.createWriteStream(tarPath);
  ws.on("error", function (err) {
    if (err) {
      console.log("write error", tarPath);
    }
    cb && cb(err);
  });
  ws.on("close", function (ex) {
    cb && cb(ex);
  });

  rs.pipe(ws);
};

// 将srcDir文件下的文件、文件夹递归的复制到tarDir下
const copyFolder = function (srcDir, tarDir, cb) {
  fs.readdir(srcDir, function (err, files) {
    let count = 0;
    let checkEnd = function () {
      ++count == files.length && cb && cb();
    };

    if (err) {
      checkEnd();
      return;
    }

    files.forEach(function (file) {
      let srcPath = path.join(srcDir, file);
      let tarPath = path.join(tarDir, file);

      fs.stat(srcPath, function (err, stats) {
        if (stats.isDirectory()) {
          fs.mkdir(tarPath, function (err) {
            if (err) {
              console.log(err);
              return;
            }
            copyFolder(srcPath, tarPath, checkEnd);
          });
        } else {
          copyFile(srcPath, tarPath, checkEnd);
        }
      });
    });
    //为空时直接回调
    files.length === 0 && cb && cb();
  });
};

/** 获取 srcDir2 路径下所有的文件夹 */
const fileDisplay = (url, cb) => {
  const filePath = path.resolve(url);
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) return console.error("Error:(spec)", err);
    files.forEach((filename) => {
      //获取当前文件的绝对路径
      const filedir = path.join(filePath, filename);
      // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
      fs.stat(filedir, (eror, stats) => {
        if (eror) return console.error("Error:(spec)", err);
        // 是否是文件
        // const isFile = stats.isFile();
        // 是否是文件夹
        const isDir = stats.isDirectory();
        // 如果是文件夹
        if (isDir) fileDisplay(filedir, cb(filedir));
      });
    });
  });
};

const copyFolderTodestinationFolderItem = () => {
  fileDisplay(tarDir, (url) => {
    copyFolder(srcDir2, url);
  });
};

/** 复制 srcDir1 文件夹内容到 n-ui */
copyFolder(srcDir1, tarDir);

/** 复制 srcDir2 文件夹内容 到 n-ui下所有的文件夹中 */
copyFolderTodestinationFolderItem();
