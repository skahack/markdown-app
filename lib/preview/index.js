var Vue = require('vue');
var marked = require('marked');

function Preview() {
  this.view = new Vue({
    tagName: 'div',
    id: 'preview',
    template: require('./preview.html'),
    data: {
      input: ''
    },
    filters: {
      marked: marked
    }
  });
}

module.exports = new Preview();
