/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./plop/component/component-generator')
const pageGenerator = require('./plop/page/page-generator')

module.exports = function (plop) {
  Object.keys(handlers).forEach((functionName) => {
    plop.setHelper(functionName, handlers[functionName])
  })

  componentGenerator(plop, handlers)
  pageGenerator(plop, handlers)
}

const handlers = {
  getPath(folder, name) {
    let path = ''
    if (folder) {
      path += `${folder.toLowerCase()}/`
    }
    path += `${name.toLowerCase()}`
    return path
  },
  createFilename(componentName) {
    return componentName
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-')
  }
}
