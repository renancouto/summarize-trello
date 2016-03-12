module.exports.getConfig = function (type) {

  const isDev = type === 'development'

  var config = {
    entry: './app/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    debug: isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }]
    },
    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }

  if (isDev) config.devtool = 'eval'
  return config
}
