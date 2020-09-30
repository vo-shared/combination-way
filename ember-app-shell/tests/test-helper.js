import Application from 'ember-app-shell/app';
import config from 'ember-app-shell/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
