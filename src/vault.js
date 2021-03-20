const fs = require('fs')
const { dialog } = require('electron')

const loadVault = async () => {
  console.log('loadVault called')
  const options = {
    filters: [
      { name: 'json', extensions: ['json'] },
    ],
  }

  const fileNames = dialog.showOpenDialogSync(options)
  // eslint-disable-next-line no-console
  console.log('FILES: ', fileNames)
  if (fileNames === undefined) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('cannot find vault')
  }

  // eslint-disable-next-line no-console
  console.log('FILES: ', fileNames)

  // Read first file
  let vaultData = await fs.readFile(fileNames[0], 'utf-8')
  // eslint-disable-next-line no-console
  console.log('VAULTDATA 1: ', vaultData)
  // Check if it's a vault json

  vaultData = JSON.parse(vaultData)
  // eslint-disable-next-line no-console
  console.log('VAULTDATA 2: ', vaultData)

  // Ask for password
  dialog.showErrorBox('Cannot open vault', 'Incorrect password specified')

  return Promise.resolve('this is the vault')
}

module.exports = { loadVault }
