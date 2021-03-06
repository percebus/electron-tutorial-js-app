(() => {
  'use strict'

  console.info('examples/versions/preload.js: loading...')

  function setup () {
    console.info('examples/versions/preload setup()...')

    window.addEventListener('DOMContentLoaded', () => {
      const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) {
          element.innerText = text
        }
      }

      for (const dependency of ['chrome', 'node', 'electron']) {
        const version = process.versions[dependency]
        replaceText(`${dependency}-version`, version)
      }
    })
  }

  exports.setup = setup
})()
