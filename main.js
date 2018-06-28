const electron = require('electron');
const {app, BrowserWindow} = electron;


function createWindow () {
  win = new BrowserWindow({width: 800, height: 600, title: "大锅饭"})

  win.loadURL('https://fanfou.com')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
// expect macOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})