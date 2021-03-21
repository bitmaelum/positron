const { ipcRenderer } = require('electron')

let vault = null

ipcRenderer.on('menu:close-vault', () => {
  console.log('closing vault menu called')
  vault = null
})

ipcRenderer.on('menu:open-vault', () => {
  console.log('opening vault menu called')

  const jsonData = ipcRenderer.sendSync('openVaultDialog')

  if (jsonData.type !== 'vault') {
    ipcRenderer.sendSync('showError', { title: 'Cannot open vault', message: 'This file does not contain a valid vault' })
    return
  }
  if (jsonData.type !== '2') {
    ipcRenderer.sendSync('showError', { title: 'Cannot open vault', message: 'This vault is not the latest version' })
    return
  }

  // ask for password
  vault = jsonData
})
