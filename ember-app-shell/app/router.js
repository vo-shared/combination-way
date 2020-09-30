import EmberRouter from '@ember/routing/router';
import config from 'ember-app-shell/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' }, function () {
    this.route('reports');
    this.route('charts');
    this.route('dashboard');
  });
});
