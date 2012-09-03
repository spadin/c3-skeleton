exports.config =
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: [
          'vendor/js/console-helper.js',
          'vendor/js/jquery-1.7.2.js',
          'vendor/js/underscore-1.3.3.js',
          'vendor/js/backbone-0.9.2.js',
          'vendor/js/backbone-mediator.js'
        ]

    stylesheets:
      joinTo: 'css/app.css'

    templates:
      defaultExtension: 'eco'
      joinTo: 'js/templates.js'

  paths:
    public: "."
    test: "test"

  minify: no

  conventions:
    tests: /_spec\.\w+$/
