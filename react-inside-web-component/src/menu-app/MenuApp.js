import React from 'react';
import { LeftMenu } from '../left-menu/LeftMenu';

export class MenuApp extends React.Component {
  onItemChanged(id) {
    this.props.onItemChanged && this.props.onItemChanged(id);
  }
  render() {
    const sampleData =[
      {
        id: 'bar',
        name: 'Bar chart',
      },{
        id: 'line',
        name: 'Line chart'
      },{
        id: 'radar',
        name: 'Radar chart'
      },{
        id: 'bubble',
        name: 'Bubble chart'
      },{
        id: 'pie',
        name: 'Pie chart'
      }
    ];
    return (
      <div className="container m-0 p-0 h-100">
        <div className="row w-100 h-100">
          <LeftMenu active={this.props.activeMenuItem} items={sampleData} onMenuItemSelected={(id) => this.onItemChanged(id)} />
        </div>
      </div>
    );
  }
}
