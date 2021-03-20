const {
  ipcMain, app, dialog, BrowserWindow, Menu,
} = require('electron')

const path = require('path')
const url = require('url')
const fs = require('fs')
const menuTemplate = require('./menu')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL
    || url.format({
      pathname: path.join(__dirname, '/../public/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )

  // mainWindow.setMenu(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// ipcMain.on('openVault', (event, path) => {
//   function readFile(filepath) {
//     fs.readFile(filepath, 'utf-8', (err, data) => {
//       if (err) {
//         alert(`An error ocurred reading the file :${err.message}`)
//         return
//       }
//
//       // handle the file content
//       event.sender.send('openVaultResponse', data)
//     })
//   }
//
//   const options = {
//     filters: [
//       { name: 'json', extensions: ['json'] },
//     ],
//   }
//
//   dialog.showOpenDialog(options, (fileNames) => {
//     // fileNames is an array that contains all the selected
//     if (fileNames === undefined) {
//       console.log('No file selected')
//     } else {
//       readFile(fileNames[0])
//     }
//   })
// })
