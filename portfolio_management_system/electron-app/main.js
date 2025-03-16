const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: false
        }
    });
    win.loadURL("http://192.168.68.113:8111"); // Django server URL
}

app.whenReady().then(createWindow);