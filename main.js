const electron = require('electron');
const {app, BrowserWindow, Menu} = require('electron');


// Modules to control application life and create native browser window
//const {app, BrowserWindow} = require('electron')
//require('electron-debug')();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 886, height: 680})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  
  
  
 /********************/

//https://electronjs.org/docs/api/menu-item

              var application_menu = [
                {
                  label: 'radioMenu',
                  submenu: [
                    {
                      label: 'Reload',
                      accelerator: 'CmdOrCtrl+R',
                      role: 'forceReload'
                    },
                    {
                      label: 'Undo',
                      accelerator: 'CmdOrCtrl+Z',
                      role: 'undo'
                    },
                    {
                      label: 'Open',
                      accelerator: 'CmdOrCtrl+O',
                      click: () => {
                        electron.dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]});
                      }
                    },
                    {
                      label: 'DevTools',
                      submenu: [
                        {
                          label: 'openDev',
                          accelerator: 'CmdOrCtrl+A',
                          click: () => {
                            mainWindow.openDevTools();
                          }
                        },
                        {
                          label: 'CloseDev',
                          accelerator: 'CmdOrCtrl+B',
                          click: () => {
                            mainWindow.closeDevTools();
                          }
                        }
                      ]
                    },
                    {
                      label: 'Exit',
                      accelerator: 'CmdOrCtrl+Q',
                      role: 'quit'
                    }
                  ]
                }
              ];
/*              
              if (process.platform == 'darwin') {
                const name = app.getName();
                application_menu.unshift({
                  label: name,
                  submenu: [
                    {
                      label: 'About ' + name,
                      role: 'about'
                    },
                    {
                      type: 'separator'
                    },
                    {
                      label: 'Services',
                      role: 'services',
                      submenu: []
                    },
                    {
                      type: 'separator'
                    },
                    {
                      label: 'Hide ' + name,
                      accelerator: 'Command+H',
                      role: 'hide'
                    },
                    {
                      label: 'Hide Others',
                      accelerator: 'Command+Shift+H',
                      role: 'hideothers'
                    },
                    {
                      label: 'Show All',
                      role: 'unhide'
                    },
                    {
                      type: 'separator'
                    },
                    {
                      label: 'Quit',
                      accelerator: 'Command+Q',
                      click: () => { app.quit(); }
                    },
                  ]
                });
              }

 */
 menu = Menu.buildFromTemplate(application_menu);
              Menu.setApplicationMenu(menu);



/*****************************/ 
  
  
  
  
  
  
  
  
  
  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
