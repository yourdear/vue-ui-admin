
function FileListPlugin() {}

FileListPlugin.prototype.apply = function(compiler) {
  // compiler 代表webpack的环境配置
  // compilation 对象代表了一次资源版本的构建
  compiler.plugin('emit', function(compilation, callback) {
    var filelist = 'In this build:\n\n'

    for (var filename in compilation.assets) {
      filelist += ('- ' + filename + '\n')
    }

    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist
      },
      size: function() {
        return filelist.length
      }
    }

    console.log('pluginA=====')

    callback()
  })
}

module.exports = FileListPlugin

