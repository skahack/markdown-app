var Vue = require('vue');

function Editor() {
  this.view = new Vue({
    tagName: 'div',
    id: 'editor',
    template: require('./textarea.html'),
    data: {
      input: '# hello'
    }
  });
}

module.exports = new Editor();
