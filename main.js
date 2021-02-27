const glob = require("glob");

const pathToContentFolders = "public/contents/!(uploads)"; // all folders in path excluding "uploads" folder

function readDirectory(dir, callback) {
  glob(dir, { sort: true }, callback);
}

readDirectory(pathToContentFolders, function (err, folders) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(folders);

    folders.forEach((folder) => {
      readDirectory(folder+"/", function (e, files) {
        if (e) {
          console.log("Error", e);
        } else {
          console.log(files);
        }
      });
    });
  }
});
