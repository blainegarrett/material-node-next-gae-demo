# material-node-next-gae-demo
A working example of running next.js on Google AppEngine's Node Standard Environment Early Access Program with [Material-UI](http://material-ui-next.com)</a>.

**Update**: This has been updated 2018-12-29 to work with:
* nodejs10 runtime on Appengine
* Next.js 7.0.2
* Material-UI 3.7.1

**View live demo at [http://material.node-next-gae-demo.blaine-garrett.appspot.com/](http://material.node-next-gae-demo.blaine-garrett.appspot.com/)**

**Important** Node.js on App Engine Standard is in Beta. It is provided without guarantee. Read below for more information.

# Development
Note: You need [node](https://nodejs.org) installed. I am using v6.10.2

**Installation:** `npm install`

**Local Development:**: `npm run dev` Point browser to localhost:3000

**Production Build:** `npm run build`

**Running Build Locally:** `npm run start` # runs `NODE_ENV=production node server.js` Point browser to localhost:8000

# Deploying to Google App Engine
This will deploy your build to a version of the `node-next-gae-demo` service (as defined in app.yaml) in your *<your_project_id>* project. Learn more about [services](https://cloud.google.com/appengine/docs/standard/python/microservices-on-app-engine) and [versions](https://cloud.google.com/appengine/docs/admin-api/deploying-apps) in GAE).

`gcloud --project your_project_id app deploy app.yaml --version version_name`
eg: `gcloud --project blaine-garrett app deploy app.yaml --version material`


**Prerequisites**:
* You must have a Google Cloud Account created. [Sign up here](https://cloud.google.com/).
* You must have a project created. Replace *your_project_id* with the id of your project.
* You must have the Google Cloud SDK command line tools installed. [Installation Instructions](https://cloud.google.com/sdk/)
* !!You must have applied and been accepted to the Early Access Program. [Apply here](https://goo.gl/forms/wAYBySsK9sc074hk2).

# Important Notes for GAE
* Unlike other runtimes supported by App Engine, you cannot run your application locally via dev_appserver.py or equivalent. You must use the node runtime installed to your machine.
* As of Dec 29th, 2018 not all Google Cloud and App Engine features are available yet in the Beta.
* Remember that Node.js on App Engine Standard is in Beta. It is provided without guarantee. You should not rely on it and only use it for testing purposes. Please do not do scale or load testing.
* Finally, If you need stable Node.js support immediately, consider using the Flexible Environment which uses dockerized containers on VMs. [More info here](https://cloud.google.com/appengine/docs/flexible/nodejs/)

# Important Notes for Next.js
* As of March 13th, 2018, files and folders are automatically skipped during deploy if they start with a `.`. This means the default .build directory must be renamed using the `distDir` setting in ./next.config

# About the Demo
This demo is a compilation of [Material UIs Next.js example](https://github.com/mui-org/material-ui/tree/v1-beta/examples/nextjs) and [node-next-gae-demo](https://github.com/blainegarrett/material-node-next-gae-demo) which itself is a combo of the [nextgram](https://github.com/now-examples/nextgram), [custom-server-express](https://github.com/zeit/next.js/tree/master/examples/custom-server-express) and [head-elements](https://github.com/zeit/next.js/tree/master/examples/head-elements) examples from Next.js

It pulls data from the Minneapolis Institute of Art's [Elastic Search api](https://github.com/artsmia/collection-elasticsearch).

It also demonstrates loading Material-UI and jss, customizing material themes, and using withStyles for custom components.

It also demonstrates resolving data dependencies server side (and client side), setting meta content, as well as returing 404 status codes serverside based on the results of the REST data.
