import React, { Component } from 'react';
import './css/BoardItem.css';

class BoardItem extends Component {
  render() {
    const { id, text } = this.props;

    return (
      <div className="board-item">
        <div>
          <div>{text}</div>
        </div>
      </div>
    );
  }
}

export default BoardItem;