const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 550,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  //hide
  win.setMenuBarVisibility(false);

  win.on("maximize", () => {
    win.unmaximize();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
