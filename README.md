`Create a directory with named your application folder`
`Run command npm init -y`
`Run Command npm install express cors mysql2 knex`
```shell
$ npm install --save-dev @babel/cli @babel/core @babel/preset-env
```
Then we'll create a `.babelrc` file for configuring babel.

```shell
$ touch .babelrc
```

This will host any options we might want to configure `babel` with.

```json
{
  "presets": ["@babel/preset-env"]
}
```
Make a directory called src - here will add our application source code 

With recent changes to babel, you will need to transpile your ES6 before node can run it.

So, we'll add our first script, build, in package.json.

  "scripts": {
+   "build": "babel index.js -d dist"
  }
Then we'll add our start script in package.json.

  "scripts": {
   "build": "babel ./src -d dist",
+   "start": "npm run build && node dist/app.js"
  }

mkdir src/routes src/migration src/seeds src/middleware src/controllers src/models

touch src/routes/indexRoutes.js
touch src/routes/userRoutes.js
