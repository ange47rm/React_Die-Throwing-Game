### GITHUB REPOSITORY
The project can be found in my Github profile (https://github.com/ange47rm/React_Die-Throwing-Game).

### PREREQUISITES
1. Download and install Node.JS and NPM (https://nodejs.org/en/download/) - Node v18.4.0 and NPM v8.12.1 were used for this project.
2. You may require Git to be installed locally to clone from the repository (`git clone https://github.com/ange47rm/React_Die-Throwing-Game.git`), alternatively you should be able to download the .zip file from the repository link.

### RUNNING INSTRUCTIONS
1. Access the root folder of the project ("die-throwing-game"), where the package.json file is located, and run `npm i` to install project dependencies. This might take a few minutes. 
2. Run the command `npm start` to start the development server/project. The application will be hosted by default on http://localhost:3000/ .
3 A few basic tests have been added, you can run those by using the command `npm test`.

### POTENTIAL WARNING - Warning (6:29521) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
If you get the above warning while running the application, access the file "bootstrap.min.css" (should be located at "node_modules/bootstrap/dist/css/bootstrap.min.css"), press ALT + SHIFT + F to format the css file correctly and find the ".form-check-input" CSS selector. This will contain a "color-adjust" option. Replace `color-adjust` with `print-color-adjust` and save the file.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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