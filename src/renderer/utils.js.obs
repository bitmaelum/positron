const { BrowserWindow, app } = require('electron')
const path = require('path')
const url = require('url')

function createModal(html, options) {
  const modalWindow = new BrowserWindow({
    parent: app.MainWindow,
    resizable: false,
    'skip-taskbar': true,
    ...options,
  })

  modalWindow.loadURL(url.format({
    pathname: html,
    protocol: 'file:',
    slashes: true,
  }))

  modalWindow.setMenu(null)
}

async function askPassword() {
  createModal(path.join(__dirname, 'modal-password.html'), {
    width: 400,
    height: 300,
  })
}

module.exports = { askPassword }
