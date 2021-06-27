import React, { Component } from 'react';
import BoardTemplate from './BoardTemplate';
import BoardItemList from './BoardItemList';
import Form from './Form';

class Board extends Component {
  id = 0

  state = {
    input: '',
    boards: []
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, boards } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      boards: boards.concat({
        id: this.id++,
        text: input
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input, boards } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <BoardTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <BoardItemList boards={boards}/>
      </BoardTemplate>
    );
  }
}

export default Board;