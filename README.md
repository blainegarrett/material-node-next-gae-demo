# material-node-next-gae-demo
A simple working example of running [Next.js](https://nextjs.org/) on Google App Engine's [Node Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/) with [Material-UI](http://material-ui.com).

**Update**:
* v0.2.1 - 2019-07-20:
  * Adding uncommitted \_app.js tht upgrades the StylesProvider
  * Upgrading lodash, axios, js-yaml packages for security updates

* v0.2.0 - 2019-05-26:
  * Upgraded Next to v8.1.0
  * Upgraded Material-UI to 4.0.0 stable release
  * Removed pageContext concept in lieu of the ServerStyleSheets
  * Converted inline layout styles to useStyles in PageBase

* v0.1.2 - 2019-06-20
  * Upgraded axios, js-yaml, and lodash packages for security

* v0.1.1 - 2019-03-30:
  * Upgraded eslint to avoid js-yaml security vulnerability
  * Removed isopmorphic-unfetch in lieu of axios
  * Added gzip compression
  * Minor prep for PWA
  * Upgraded material-ui packages 4.0.0-alpha and removed the bootstrap requirement for core 3.9

* v0.1.0 - 2019-03-09:
  * Upgraded to Next.js 8.0.3
  * Upgraded react and react dom to 16.8.3 (aka "the one with hooks")
  * Various other package updates
  * Using new @material-ui/styles alpha to prep for MUI 4
  * Added example of using custom theme variables that are accessed in makeStyles hooks

* v0.0.4 - 2018-12-29:
  * Updated to use nodejs10 runtime on App Engine
  * Upgraded to Next.js 7.0.2
  * Material-UI 3.7.1

# Live Demo
**View live demo at [http://material.node-next-gae-demo.blaine-garrett.appspot.com/](http://material.node-next-gae-demo.blaine-garrett.appspot.com/)**


# Development
Note: You need [node](https://nodejs.org) installed. I am using v8.11.3

**Installation:** `npm install`

**Local Development:**: `npm run dev` Point browser to localhost:3000

**Production Build:** `npm run build` (Note: It is a good idea to remove your ./build dir before build/deploy to remove unused build files)

**Running Build Locally:** `npm run start` # runs `NODE_ENV=production node server.js` Point browser to localhost:8000

# Deploying to Google App Engine
This will deploy your build to a version of the `node-next-gae-demo` service (as defined in app.yaml) in your *<your_project_id>* project. Learn more about [services](https://cloud.google.com/appengine/docs/standard/python/microservices-on-app-engine) and [versions](https://cloud.google.com/appengine/docs/admin-api/deploying-apps) in GAE).

`gcloud --project your_project_id app deploy app.yaml --version version_name --verbosity=debug`
eg: `gcloud --project blaine-garrett app deploy app.yaml --version material --verbosity=debug`


**Prerequisites**:
* You must have a Google Cloud Account created. [Sign up here](https://cloud.google.com/).
* You must have a project created. Replace *your_project_id* with the id of your project.
* You must have the Google Cloud SDK command line tools installed. [Installation Instructions](https://cloud.google.com/sdk/)

# Important Notes for GAE
* Unlike other runtimes supported by App Engine (Python 2.7, etc), you cannot run your application locally via dev_appserver.py or equivalent. You must use the node runtime installed to your machine.
* As of Dec 29th, 2018 not all Google Cloud and App Engine standard features are available yet in the Beta.

# Important Notes for Next.js
* As of March 13th, 2018, files and folders are automatically skipped during deploy if they start with a `.`. This means the default .build directory must be renamed using the `distDir` setting in ./next.config

# About the Demo
This demo is a compilation of [Material UIs Next.js example](https://github.com/mui-org/material-ui/tree/v1-beta/examples/nextjs) and [node-next-gae-demo](https://github.com/blainegarrett/material-node-next-gae-demo) which itself is a combo of the [nextgram](https://github.com/now-examples/nextgram), [custom-server-express](https://github.com/zeit/next.js/tree/master/examples/custom-server-express) and [head-elements](https://github.com/zeit/next.js/tree/master/examples/head-elements) examples from Next.js

It pulls data from the Minneapolis Institute of Art's [Elastic Search api](https://github.com/artsmia/collection-elasticsearch).

It also demonstrates loading Material-UI and jss, customizing material themes, and using makeStyles hooks for custom components.

It also demonstrates resolving data dependencies server side (and client side), setting meta content, as well as returning 404 status codes server side based on the results of the REST data.
