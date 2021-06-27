import React from 'react';
import './css/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} placeholder='건의 사항을 입력해주세요' onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        등록
      </div>
    </div>
  );
};

export default Form;