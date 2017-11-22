# Aurelia-JavaEE-8-Stack
This is a project designed to suss out the details of integrating an Aurelia javascript client with a Java EE backend in a way that is easy to automate.

## Notes:
* In order to build this project you will need npm and aurelia-cli (au) installed
  * There is a bug in either npm 5.3 that will prevent the frontend code from installing correctly (see [here](https://github.com/aurelia/cli/issues/253)). I have have been able to get it working with npm 4.6 (downgrade with `npm install -g npm@4`)
  * install au with `npm install -g aurelia-client`
* run `npm install` in the frontend directory to install aurelia's dependencies
* run `mvm package` in the backend directory and maven will grab the latest fronted code (by running `au build --env prod`) and package it with your java backend into a .war
