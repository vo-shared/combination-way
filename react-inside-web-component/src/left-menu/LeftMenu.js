import React from 'react';
import { MenuItem } from '../menu-item/MenuItem';

export class LeftMenu extends React.Component {
  render() {
    const menuStyle = {
      width: "200px"
    };
    return (
        <ul id="menu-list" className="list-group" style={menuStyle}>
          {(this.props.items || []).map((item) => {return this.renderMenu(item);})}
        </ul>
    );
  }
  renderMenu(item){
    return (<MenuItem active={item.id === this.props.active}
                      item={item}
                      key={item.id}
                      onClick={()=>{this.props.onMenuItemSelected(item.id)}}/>)
  }
}
