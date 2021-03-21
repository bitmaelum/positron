/*
 * This file must be here at ./src/index.js, because this is where create-react-app expects it. We just call the
 * index.js from our ./src/renderer to keep things more separated.
 */

// eslint-disable-next-line no-console
console.log('loading src/index.js')

require('./renderer/index')
