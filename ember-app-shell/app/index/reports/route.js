import Route from '@ember/routing/route';
import { EventBusSingleton } from 'light-event-bus'
import {tracked} from "@glimmer/tracking";

export default class IndexReportsRoute extends Route {
  @tracked eventBus = EventBusSingleton;

}
