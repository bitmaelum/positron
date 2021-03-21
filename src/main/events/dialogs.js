const { ipcMain, dialog } = require('electron')
const { fs } = require('fs')

/**
 * Shows an error dialog box
 */
ipcMain.on('showError', (event, title, msg) => {
  dialog.showErrorBox(title, msg)
})

/**
 * Opens the vault dialog and let the user choose a vault file. Will return the vault data in JSON format
 */
ipcMain.on('openVaultDialog', () => {
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
  vaultData = JSON.parse(vaultData)

  return Promise.resolve(vaultData)
})
