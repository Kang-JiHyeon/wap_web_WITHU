import React from 'react';
import './css/BoardTemplate.css';

const BoardTemplate = ({form, children}) => {
  return (
    <main className="board-template">
      <div className="title">
        건의 게시판
      </div>
      <section className="boards-wrapper">
        { children }
      </section>
      <section className="form-wrapper">
        {form}
      </section>
    </main>
  );
};

export default BoardTemplate;