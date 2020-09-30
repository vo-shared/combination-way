import React from 'react';


export class MenuItem extends React.Component {
  handleClick() {
      this.props.onClick && this.props.onClick(this.props.item.id);
  }

  render() {
    return (
      <li className={this.props.active? "list-group-item active" : "list-group-item"} onClick={() => this.handleClick()}>
        {this.props.item.name}
      </li>
    );
  }
}
