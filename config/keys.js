//keys.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  console.log('here');
  module.export = require('./dev');
}
