const withImages = require('next-images')

module.exports = withImages({
  esModule: true, // now i can import images with import ... from '...'
})