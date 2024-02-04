const { app, BrowserWindow } = require('electron')


const createWindow = ({ width, height }) => {
    let window = new BrowserWindow({
        width,
        height,
        show: false,
        frame: false,
        minWidth: 600,
        minHeight: 800,
        titleBarStyle: 'hidden',
        backgroundColor: '#252423',
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.loadFile('./src/views/index.html')
    let splash = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false,
        center: true,
        closable: false,
        backgroundColor: '#252423'
    })

    splash.loadFile('./src/views/splash.html')
    splash.once('ready-to-show', () => {
        splash.show();
    })
    setTimeout(function () {
        splash.close();
        window.show();
    }, 4000);

}

app.whenReady().then(() => {
    const { screen } = require('electron')
    let width = screen.getPrimaryDisplay().workAreaSize.width
    let height = screen.getPrimaryDisplay().workAreaSize.height

    createWindow({
        width: width,
        height: height
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})