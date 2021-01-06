import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
class MenuQuatityButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
    DecreaseItem = () => {
        if(this.state.clicks>0) {
          this.setState({ clicks: this.state.clicks - 1 })
        }
    }

  render() {
    return (
      <div>
        <IconButton onClick={this.IncrementItem} color="secondary" aria-label="add an item">
          <AddCircleIcon />
        </IconButton>
        { this.state.show ? <span>{ this.state.clicks }</span> : '' }
        <IconButton onClick={this.DecreaseItem} color="secondary" aria-label="remove an item">
          <RemoveCircleIcon />
        </IconButton>
      </div>
    );
  }
}

export default MenuQuatityButton;