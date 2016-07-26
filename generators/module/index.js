'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');
var utils = require("../utils");

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.modulePath = 'src/store/modules/';
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('generator-redx-vue') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What\'s the name of the new module?',
        default: 'my-module'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var moduleName = this.props.moduleName;
    var upperModuleName = moduleName.toUpperCase()
    var jsName = moduleName + '.js';
    
    var jsFullPath = this.destinationPath(this.modulePath + "/" + moduleName + '/' + jsName);

    utils.debug(this, jsFullPath);
    // utils.debug(this, stylesheetFullPath);

    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(jsFullPath),
      {
        moduleName: moduleName,
        upperModuleName: upperModuleName
      }
    );
  }
});
