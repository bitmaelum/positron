const fs = require('fs')
const { dialog } = require('electron')


const loadVault = async () => {
  const options = {
    filters: [
      { name: 'json', extensions: ['json'] },
    ],
  }

  const fileNames = dialog.showOpenDialogSync(options)
  if (fileNames === undefined) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('cannot find vault')
  }

  // Read first file
  let vaultData = fs.readFileSync(fileNames[0])

  // Check if it's a vault json
  vaultData = JSON.parse(vaultData)

  return Promise.resolve(vaultData)
}


module.exports = { loadVault }
