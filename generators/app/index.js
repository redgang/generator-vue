'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var extend = require('deep-extend');
var path = require('path');
var utils = require('../utils.js');

module.exports = generators.Base.extend({

  init: function () {
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  initializing: function () {
    var folderName = path.basename(this.destinationRoot());
    this.projectName = folderName || "suneee-app";
    this.version = "0.0.1";
    this.description = "suneee app项目";
    this.cssPreProcessor = "css";

    utils.debug(this, "app:initializing");
  },

  prompting: function () {
    utils.debug(this, "app:prompting");

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('generator-vue') + ' generator!'
    ));

    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What\'s the name of your project?',
        default: this.projectName
      },
      {
        type: 'input',
        name: 'version',
        message: 'What\'s the version of your project?',
        default: this.version
      },
      {
        type: 'input',
        name: 'description',
        message: 'What\'s the description of your project?',
        default: this.decription
      },
      {
        type: 'list',
        name: 'cssPreProcessor',
        message: 'Which CSS pre-processor do you need?',
        choices: [
          { name: 'css', value: 'css' },
          { name: 'postcss', value: 'postcss' },
          { name: 'less', value: 'less' },
          { name: 'sass', value: 'sass' },
          { name: 'stylus', value: 'stylus' }
        ],
        default: this.cssPreProcessor,
        store: true
      }
    ];

    this.prompt(prompts, function (props) {

      this.projectName = props.projectName;
      this.version = props.version;
      this.description = props.description;
      this.cssPreProcessor = props.cssPreProcessor;
      done();
    }.bind(this));
  },

  default: function () {
    utils.debug(this, "app:default");

    this.composeWith('vue-app:src', {
      options: {
        projectName: this.projectName,
        cssPreProcessor: this.cssPreProcessor
      }
    });
  },


  writing: function () {
    utils.debug(this, "app:writing");

    // utils.debug(this, "app:templatePath " + this.templatePath('webpack.dev.config.js'));
    // utils.debug(this, "app:destinationPath " + this.destinationPath('webpack.dev.config.js'));

    this.mkdir('src/routes');
    this.mkdir('src/themes');
    this.mkdir('src/plugins');
    this.directory('src/components', 'src/components');
    this.directory('src/store', 'src/store');
    this.directory('src/utils', 'src/utils');

    //files

    this.copy('src/index.js', 'src/index.js');
    this.copy('src/index.html', 'src/index.html');
    this.copy('src/app.vue', 'src/app.vue');


    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');

    this._copyPackageJson();
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('eslintrc', '.eslintrc');
    this.copy('babelrc', '.babelrc');
    this.copy('eslintignore', '.eslintignore');
  },

  npm: function () {
    this.npmInstall([
      "chartist",
      "is-plain-obj",
      "nd-datetime",
      "nd-promise",
      "querystring",
      "string-template",
      "vue",
      "vue-router",
      "vuex",
      "whatwg-fetch",
      "wind-dom"
    ], { save: true });
  },

  webpack: function () {
    this.npmInstall([
      "babel-cli",
      "babel-core",
      "babel-eslint",
      "babel-loader",
      "babel-plugin-add-module-exports",
      "babel-plugin-transform-async-to-generator",
      "babel-plugin-transform-runtime",
      "babel-polyfill",
      "babel-preset-es2015",
      "babel-preset-stage-0",
      "babel-runtime",
      "better-npm-run",
      "copy-webpack-plugin",
      "css-loader",
      "debug",
      "eslint",
      "eslint-friendly-formatter",
      "eslint-loader",
      "eslint-plugin-babel",
      "eslint-plugin-html",
      "eslint-plugin-vue",
      "extract-text-webpack-plugin",
      "file-loader",
      "fs-extra",
      "html-webpack-plugin",
      "json-loader",
      "karma",
      "nodemon",
      "phantomjs-polyfill",
      "postcss-browser-reporter",
      "postcss-cssnext",
      "postcss-custom-properties",
      "postcss-font-variant",
      "postcss-functions",
      "postcss-import",
      "postcss-loader",
      "postcss-mixins",
      "postcss-reporter",
      "postcss-url",
      "progress-bar-webpack-plugin",
      "rimraf",
      "sinon",
      "style-loader",
      "url-loader",
      "vue-hot-reload-api",
      "vue-html-loader",
      "vue-loader",
      "vue-style-loader",
      "webpack",
      "webpack-dev-middleware",
      "webpack-hot-middleware",
      "yargs"
    ], { saveDev: true });
    this.copy('_webpack.config.js', 'webpack.config.js');
  },

  server: function () {
    this.directory('server', 'server');
    this.directory('bin', 'bin');
    this.directory('build', 'build');
    this.directory('config', 'config');

    this.npmInstall([
      "koa",
      "koa-connect-history-api-fallback",
      "koa-convert",
      "koa-static",
      "co-request",
      "iconv-lite",
      ], { saveDev: true });
  },

  end: function () {
    utils.debug(this, "app:end");
  },

  _logFile: function (fileName) {
    this.log(chalk.green("  create ") + fileName);
  }
});
