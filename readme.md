# Electron-React-Boilerplate
* based on a true story by https://blog.alexdevero.com/building-desktop-apps-electron-react/
* runs on URL (localhost) via dev server
* production mode as "standalone" app

### Installation
npm install

### npm-Scripts
##### npm start: 
* start dev
* "webpack-dev-server --hot --host 0.0.0.0 --config=./webpack.dev.config.js --mode development"

##### npm run prod: 
* "webpack --mode production --config webpack.build.config.js && electron --noDevServer ."

##### npm run build:
* "webpack --config webpack.build.config.js --mode production"

##### npm run package: 
* "npm run build && electron-packager ./ --out=./builds --platform=all"

### Thanks
Thanks Alexdevero for this great Tutorial. https://blog.alexdevero.com/building-desktop-apps-electron-react/
