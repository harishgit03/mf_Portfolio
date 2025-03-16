const { app, BrowserWindow } = require('electron');
const path = require("path")
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon:path.join(__dirname,"asset","coinimage.ico"),
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL("http://192.168.1.21:8111");
}

app.whenReady().then(createWindow);