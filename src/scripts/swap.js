const config = require('../config');
const path = require("path")
const fs = require("fs")
const swapDir = path.join(__dirname, "../../swap")
const {protocol} = require("electron")

module.exports = [
  (win) => {
    let urls = [];
    const recursiveSwapNormal = (win, prefix = '') => {
      try {
        fs.readdirSync(path.join(swapDir, prefix), {
            withFileTypes : true
          }).forEach(dirent => {
          if (dirent.isDirectory()) {
            recursiveSwapNormal(win, `${prefix}/${dirent.name}`)
          }
          else {
            let pathname = `${prefix}/${dirent.name}`,
                isAsset = /^\/(models|sound|textures)($|\/)/.test(pathname)
            if (isAsset) {
              urls.push(`*://assets.krunker.io${pathname}`,`*://assets.krunker.io${pathname}?*`)
            }
            else {
              urls.push(`*://krunker.io${pathname}`, `*://krunker.io${pathname}?*`,`*://comp.krunker.io${pathname}`, `*://comp.krunker.io${pathname}?*`)
            }
          }
        })
      } catch (err) {
        console.error('Failed to swap resources in normal mode', err, prefix)
      }
    };
    recursiveSwapNormal(win)
    if (urls.length) {
      win.webContents.session.webRequest.onBeforeRequest(
          {urls : urls},
          (details, callback) => callback({
            redirectURL :
                'janrex:/' + path.join(swapDir, new URL(details.url).pathname)
          }))
    }
  },
  () => {protocol.registerFileProtocol('janrex', (request, callback) => callback(decodeURI(request.url.replace(/^janrex:/,''))))}, () => {
protocol.registerSchemesAsPrivileged([{scheme: 'janrex',privileges: { secure: true, corsEnabled: true }
}])}
]
