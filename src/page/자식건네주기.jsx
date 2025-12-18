import { useState } from "react";

function 자식건네주기() {

  let msg = 'Hello World';
  let obj = {title : '책 제목', content : '책 내용'};
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>자식과 부모의 데이터 전달</h1>
      <자식 dataMsg={msg} dataBook={obj} dataCount={count}/>
      <자식2/>
      <input type="button" value="숫자 증가" onClick={ e => {
        e.preventDefault();
        setCount(count+1);
      }}/>
      <자식3 fnStudy={(val) => {
        alert('자식에게서 호출');
        alert(val)
      }}/>
    </>
  )
}

export default 자식건네주기


function 자식3(props) {
  return(
    <div style={{width : '100vw', height : '200px', border : '2px solid blue'}}>
      <h3>자식 Component 영역</h3>
      <input type="button" value='부모 호출' onClick={e => {
        props.fnStudy('1234');
      }}/>
    </div>
  )
}

function 자식2(props) {
  return(
    <div style={{width : '100vw', height : '200px', border : '2px solid blue'}}>
      <h3>자식 Component 영역</h3>
    </div>
  )
}

function 자식(props) {
  return(
    <div style={{width : '100vw', height : '200px', border : '2px solid red'}}>
      <h3>자식 Component 영역</h3>
      {props.dataMsg}
      <br/>
      책 제목 : {props.dataBook.title}
      <br/>
      책 내용 : {props.dataBook.content}
      <br/>
      count : {props.dataCount}
    </div>
  )
}
