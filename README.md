Setup
=====================

ionic start ionicCameraApp
cd ionicCameraApp/
ionic platform add android
npm install
bower install
ionic run android -lcs

# create templates/cam.html
# add route for cam.html to app.js
# add tab icon to templates/tab.html
# add controller CamCtrl to js/controllers.js
# remove disused services.js and dependency registration
# remove disused /templates
# remove disused controllers from js/controllers.js

ionic plugin add cordova-plugin-camera
ionic run android -lcs

Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then run: 

```bash
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.
