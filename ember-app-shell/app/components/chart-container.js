import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChartContainerComponent extends Component {
  @tracked activeMenu = 'pie';
  @action
  updateMenu(item){
    this.activeMenu = item.detail;
  }
}
