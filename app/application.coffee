class Application
    constructor: (@name) ->
    printIt: => console.log 'printIt', @name

exports.Application = Application
# module.exports = Application