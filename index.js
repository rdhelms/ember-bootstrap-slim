'use strict';
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-bootstrap-slim',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    let target = (parentAddon || app);
    target.import('vendor/bootstrap.min.css');
  },

  treeForVendor() {
    return new Funnel(`${this.project.root}/node_modules/bootstrap/dist/css`, {
      files: ['bootstrap.min.css']
    });
  }
};
