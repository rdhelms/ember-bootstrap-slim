'use strict';
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-bootstrap-slim',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/bootstrap.min.css');
  },

  treeForVendor(vendorTree) {
    return new Funnel(`${this.project.root}/node_modules/bootstrap/dist/css`, {
      files: ['bootstrap.min.css']
    });
  }
};
