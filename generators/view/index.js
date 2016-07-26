'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');
var utils = require("../utils");

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.viewPath = 'src/views/';
    this.viewThemePath = 'src/themes/default/views/'
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
        name: 'viewName',
        message: 'What\'s the name of the new view?',
        default: 'my-view'
      },
      {
        type: 'list',
        name: 'stylesheetExtension',
        message: 'Choose the css pre-processor you need:',
        choices: [
          { name: 'css', value: 'css' },
          { name: 'less', value: 'less' },
          { name: 'sass', value: 'sass' },
          { name: 'stylus', value: 'styl' }
        ],
        store: true,
        default: 'css'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var viewName = this.props.viewName;
    var jsName = viewName + '.vue';
    var stylesheetName = viewName + '.' + this.props.stylesheetExtension;
    var jsFullPath = this.destinationPath(this.viewPath + "/" + viewName + '/' + jsName);
    var stylesheetFullPath = this.destinationPath(this.viewThemePath + "/" + viewName + '/' + stylesheetName);

    utils.debug(this, jsFullPath);
    utils.debug(this, stylesheetFullPath);

    // this.fs.copyTpl(
    //   this.templatePath('README.md'),
    //   this.destinationPath(this.destinationPath(this.viewPath + "/" + viewName + '/README.md')),
    //   {
    //     viewName: viewName
    //   }
    // )

    // this.fs.copyTpl(
    //   this.templatePath('index.js'),
    //   this.destinationPath(exportFullPath),
    //   {
    //     viewName: viewName,
    //     exportviewName: exportviewName
    //   }
    // )

    this.fs.copyTpl(
      this.templatePath('view.vue'),
      this.destinationPath(jsFullPath),
      {
        viewName: viewName,
        stylesheetExtension: this.props.stylesheetExtension,
      }
    );

    if (!!this.props.stylesheetExtension) {
      this.fs.copyTpl(
        this.templatePath('view.stylesheet'),
        this.destinationPath(stylesheetFullPath),
        {
          viewName: viewName
        }
      );
    }
  }
});
