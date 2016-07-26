'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');
var utils = require("../utils");

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.componentPath = 'src/components/';
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('generator-vue-component') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What\'s the name of the new component?',
        default: 'my-component'
      },
      // {
      //   type: 'list',
      //   name: 'componentPath',
      //   message: 'Choose the path to create the component:',
      //   choices: [
      //     { name: 'current directory: "."', value: '.' },
      //     { name: 'component directory: "src/components/"', value: 'src/components/' }
      //   ],
      //   store: true,
      //   default: ''
      // },
      // {
      //   type: 'list',
      //   name: 'stylesheetExtension',
      //   message: 'Choose the css pre-processor you need:',
      //   choices: [
      //     { name: 'css', value: 'css' },
      //     { name: 'less', value: 'less' },
      //     { name: 'sass', value: 'sass' },
      //     { name: 'stylus', value: 'styl' }
      //   ],
      //   store: true,
      //   default: 'css'
      // }
      ];

    this.prompt(prompts, function (props) {
      props.stylesheetExtension = 'css';
      props.inputComponentName = props.componentName
      props.componentName = 'c-' + props.componentName;
      this.props = props;
      this.exportComponentName = utils.capitalize(props.componentName).replace(/-[a-z]/g, function($1){return $1.split('-')[1].toUpperCase()})
      done();
    }.bind(this));
  },

  writing: function () {
    var componentName = this.props.componentName;
    var exportComponentName = this.exportComponentName;
    var jsName = componentName + '.vue';
    var exportName = 'index.js';
    var stylesheetName = this.props.inputComponentName + '.' + this.props.stylesheetExtension;
    var jsFullPath = this.destinationPath(this.componentPath + "/" + componentName + '/' + jsName);
    var exportFullPath = this.destinationPath(this.componentPath + "/" + componentName + '/' + exportName);
    var stylesheetFullPath = this.destinationPath(this.componentPath + "/" + componentName + '/' + stylesheetName);

    utils.debug(this, jsFullPath);
    utils.debug(this, stylesheetFullPath);

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.destinationPath(this.componentPath + "/" + componentName + '/README.md')),
      {
        componentName: componentName
      }
    )

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(exportFullPath),
      {
        componentName: componentName,
        exportComponentName: exportComponentName
      }
    )

    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath(jsFullPath),
      {
        componentName: componentName,
        stylesheetExtension: this.props.stylesheetExtension,
        inputComponentName: this.props.inputComponentName
      }
    );

    if (!!this.props.stylesheetExtension) {
      this.fs.copyTpl(
        this.templatePath('component.stylesheet'),
        this.destinationPath(stylesheetFullPath),
        {
          componentName: componentName
        }
      );
    }
  }
});
