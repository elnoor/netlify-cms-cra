/*
This script will walk through the folders inside "contents" folder (except "_uploads" folder)
to create "index.json" file in each folder. These json files will have an array of file names in those folders.
"Index.json" files won't be pushed to git, they will be dynamically generated during build and will be deployed from "/build" folder.

This script will be run during build time as it will be injected into "npm run build" command.
*/

const glob = require("glob");

const contentsFolder = "public/contents/";

function readDirectory(dir, pattern, callback) {
  glob(pattern, { cwd: dir, sort: true }, callback);
}

readDirectory(contentsFolder, "!(_uploads)", function (err, folders) {
  // get list of content folders excluding "_uploads" folder
  if (err) throw err;
  console.log("FOLDERS:", folders);

  const fs = require("fs");
  folders.forEach((folder) => {
    // get all json files inside every content folder, excluding "index.json" in case they added during local development
    readDirectory(contentsFolder + folder, "!(index).json", function (er, files) {
      if (er) throw er;
      console.log(`FILES IN ${folder}:`, files);

      // create index.json file in each folder with array of file names in that folder
      fs.writeFile(
        contentsFolder + folder + "/index.json",
        JSON.stringify(files),
        function (e) {
          if (e) throw e;
        }
      );
    });
  });
});
