import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  adminRouter(this);
  this.route('contact');
  this.route('yogurt');
  this.route('gelato');
  this.route('flavor');
});

export default Router;
