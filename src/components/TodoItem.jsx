import React from 'react';
import './TodoItem.css'
const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) => {
  const onChagneCheckbox =()=>{
    onUpdate(id)
  }
  const onDeleteButton = ()=>{
    onDelete(id)
  }
  return (
    <div className='TodoItem'>
      <input type="checkbox" checked={isDone} onChange={onChagneCheckbox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;