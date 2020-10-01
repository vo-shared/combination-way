import Route from '@ember/routing/route';
import { EventBusSingleton } from 'light-event-bus';

export default class IndexRoute extends Route {
  init() {
    this._super(...arguments);
    window.eventBus = EventBusSingleton;
  }
}
