# Netlify CMS with Create React App - [DEMO](https://netlify-cms-cra.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Netlify CMS](https://www.netlifycms.org/). See official doc on [how to add](https://www.netlifycms.org/docs/add-to-your-site/) Netlify CMS to site and [configure it](https://www.netlifycms.org/docs/configuration-options/).

## Add Netlify CMS and Configure it

First thing to know that `admin` folder should in public folder. Inside that folder create `congif.yml` and `index.html` files. Use yaml file to configure CMS, collections etc. And inside `admin/index.html` actually "import" CMS and login modal widget from CDN.
![image](https://user-images.githubusercontent.com/10808241/109473304-5d768780-7a30-11eb-95c9-bb0bbb51ac3b.png)

Inside `public/index.html` file's `<head>` tag again inject Netlify CMS login modal widget (Netlify Identity Widget). Then in the same file make sure to initialize Netlify CMS before `</body>` tag.

Now, created `public/contents` folder inside of which uploaded media files and collection files will be stored. Then make sure your `media_folder`, `public_folder` and your collections' folders are set according to your folders in `contents` folder.

### Deploy Files and Configure Netlify

Commit changes and push. Later on, in [Netlify](https://netlify.com) create a new site from your git repo (e.g GitHub). Since the application is CRA application default build settings will work, `npm run build` as build command and `build/` folder as directory to deploy.

Then enable Identity, set your registration (preferably to be invite-only). Most important, enable **git gateway** whcih will let Netlify CMS to push new changes (i.e new collection entry) to be saved (pushed) to git repo.

Then from **Identity** menu on the top of the page invite new user and click on the link that is received via email to verify email.
![image](https://user-images.githubusercontent.com/10808241/109473432-8434be00-7a30-11eb-8dba-9d70b0860419.png)

Now you can log in to CMS' admin  section by going to `url/admin` and start adding your content.

### Accessing/Consuming entries

Now that you have created entries from CMS, you need to use them in your React application. 

First thing is to know the list of filenames that is created by CMS, to create that list we will add `main.js` to the root of the project. Whenever this file will be run, it will find folders inside `contents` folder (except `_uploads`) and inside them will create an `index.json` file which will list the names of the files there. Later on by calling this `index.json` file you can check what files are in that folder.

`main.js` is a file to be run in Node/server. So we will need to run this file whenever we will build the project. To achieve that we will change the build script in `package.json` to be `"build": "node main.js && react-scripts build",`
