# CSS Modules Demo

Clone the repo and run `npm install`

To enable CSS Modules, append `?modules` in the `css-loader` in the webpack configuration file.

And to have readable class names generated by CSS Modules, append

```
&localIdentName=[name]__[local]___[hash:base64:5]
```

in the webpack configuration file.

### Build and Running Locally

To build,

```
npm run build
```

And to run locally,

```
npm run server
```

_You have to build it first before running the server_
