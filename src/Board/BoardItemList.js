import React, { Component } from 'react';
import BoardItem from './BoardItem';

class BoardItemList extends Component {
  render() {
    const { boards } = this.props;

    const boardList = boards.map(
      ({id, text}) => (
        <BoardItem
          text={text}
          key={id}
        />
      )
    );
    return (
      <div>
        {boardList}

      </div>
    );
  }
}

export default BoardItemList;