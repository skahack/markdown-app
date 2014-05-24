var Vue = require('vue');
var editor = require('editor');
var preview = require('preview');

preview.view.$data.input = editor.view.$data.input;
editor.view.$watch('input', function(input){
  preview.view.$data.input = input;
});

editor.view.$appendTo('body');
preview.view.$appendTo('body');
