# Netlify CMS with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Netlify CMS](https://www.netlifycms.org/). See official doc on [how to add](https://www.netlifycms.org/docs/add-to-your-site/) Netlify CMS to site and [configure it](https://www.netlifycms.org/docs/configuration-options/).

## Add Netlify CMS and Configure it

First thing to know that `admin` folder should in public folder. Inside that folder create `congif.yml` and `index.html` files. Use yaml file to configure CMS, collections etc. And inside `admin/index.html` actually "import" CMS and login modal widget from CDN.

Inside `public/index.html` file's `<head>` tag again inject Netlify CMS login modal widget (Netlify Identity Widget). Then in the same file make sure to initialize Netlify CMS before `</body>` tag.

Now, created `public/contents` folder inside of which uploaded media files and collection files will be stored. Then make sure your `media_folder`, `public_folder` and your collections' folders are set according to your folders in `contents` folder.

### Deploy files and Configure Netlify

Commit changes and push. Later on, in [Netlify](https://netlify.com) create a new site from your git repo (e.g GitHub). Since the application is CRA application default build settings will work, `npm run build` as build command and `build/` folder as directory to deploy.

Then enable Identity, set your registration (preferably to be invite-only). Most important, enable **git gateway** whcih will let Netlify CMS to push new changes (i.e new collection entry) to be saved (pushed) to git repo.

Then from **Identity** menu on the top of the page invite new user and click on the link that is received via email to verify email.


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
