Run the command to config heroku repository
```bash
heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

In `package.json` add the script to build assets in production.
```json
{
  "scripts": {
    "postinstall": "npm run production",
    "start": "node server.js"
  }
}
```

We need to run node server to run our project. So, we need to install express.

To install express
```bash
npm install express
```

In `server.js` file we can have this snippet to quick start

```js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/"));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```

Finally in our `Procfile` we need to configure
```
web: npm start
```

Deploy to heroku
```bash
git push heroku master
```
