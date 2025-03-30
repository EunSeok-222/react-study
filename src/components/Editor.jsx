import React, { useRef, useState } from 'react';
import './Editor.css'
const Editor = ({onCreate}) => {
  const contentRef = useRef();
  const [content,setContent] = useState('');
  const onChangeContent = (e) =>{
    setContent(e.target.value);
  }

  const onKeydown = (e)=> {
    console.log(e)
    if(e.keyCode === 13){
      onSubmit()
    }
  } 
  const onSubmit = () => {
    if(content === ''){
      contentRef.current.focus();
      return;
    };
    onCreate(content);
    setContent('');

  };

  return (
    <div className='Editor'>
      <input ref={contentRef} type="text" placeholder='새로운 Todo...'
      value={content}
      onChange={onChangeContent}
      onKeyDown={onKeydown}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;