// eslint-disable-next-line global-require
export const { remote } = require('electron')
// eslint-disable-next-line global-require
export const { ipcRenderer } = require('electron')
// eslint-disable-next-line global-require
export const { ipcMain } = require('electron')

// eslint-disable-next-line global-require
// export const fs = require('file-system').fs

// eslint-disable-next-line global-require
export const currentWindow = require('electron').remote.getCurrentWindow()
// eslint-disable-next-line global-require
export const { BrowserWindow } = require('electron').remote
// eslint-disable-next-line global-require
export const AppPath = require('electron').remote.app.getAppPath()
