const {
  app, BrowserWindow, Menu,
} = require('electron')

const path = require('path')
const url = require('url')

// Menu
const menuTemplate = require('./menu/menu')

// Dialog IPC event handlers
require('./events/dialogs')

console.log('main/main.js called')

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
      pathname: path.join(__dirname, '/../../public/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )

  // mainWindow.setMenu(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  app.MainWindow = mainWindow
}

// app.commandLine.appendSwitch('remote-debugging-port', '9222')

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

app.on('ready', () => {
  createWindow()
})

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
