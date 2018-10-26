# Vue JS app to be deployed on Heroku

> This project provides an VueJs app that can be deployed on heroku and 
has vuetify support

## Build Setup

### Development (local)
```
# Install dependencies
npm install

# Run dev server
npm run dev

Open browser on localhost:8080
```


### Production (local)
```
# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report

# Run production server
npm start

Open browser on localhost:5000
```

### Heroku Deploy

In package.json, there is a command *postinstall* that heroku will run after npm install 
and will build the dist folder with the minified code. The production server will use this folder.

``` bash
# Clone repository
git clone https://github.com/PedroS11/vuejs-heroku-boilerplate.git

# Connect your herokuapp to the Github repository using Heroku Dashboard -> Deploy

# Enable Automatic Deploy and select the deploy branch

# Then, after each commit to the repo, Heroku will deploy your new version
```
