const { shell } = require('electron')
const { loadVault } = require('./vault')

const MenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Vault',
        accelerator: 'CmdOrCtrl+Option+o',
        click: async () => {
          await loadVault()
        },
      },
      {
        label: 'Close Vault',
        accelerator: 'CmdOrCtrl+Option+c',
      },
      {
        type: 'separator',
      },
      {
        role: 'quit',
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'cut',
      },
      {
        role: 'copy',
      },
      {
        role: 'paste',
      },
    ],
  },

  {
    label: 'View',
    submenu: [
      {
        role: 'reload',
      },
      {
        role: 'toggledevtools',
      },
      {
        type: 'separator',
      },
      {
        role: 'resetzoom',
      },
      {
        role: 'zoomin',
      },
      {
        role: 'zoomout',
      },
      {
        type: 'separator',
      },
      {
        role: 'togglefullscreen',
      },
    ],
  },

  {
    role: 'window',
    submenu: [
      {
        role: 'minimize',
      },
      {
        role: 'close',
      },
    ],
  },

  {
    role: 'help',
    submenu: [
      {
        label: 'Learn About BitMaelum',
        click: async () => {
          await shell.openExternal('https://bitmaelum.com')
        }
      },
    ],
  },
]

module.exports = MenuTemplate
