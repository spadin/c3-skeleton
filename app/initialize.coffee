Application = require('application').Application

$ -> 
  application = new Application('sammy')
  application.printIt()