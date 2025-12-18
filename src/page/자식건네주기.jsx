function 자식건네주기() {

  let msg = 'Hello World';
  let obj = {title : '책 제목', content : '책 내용'};

  return (
    <>
      <h1>자식과 부모의 데이터 전달</h1>
      <자식 dataMsg={msg} dataBook={obj}/>
    </>
  )
}

export default 자식건네주기

function 자식(props) {
  return(
    <div style={{width : '100vw', height : '200px', border : '2px solid red'}}>
      <h3>자식 Component 영역</h3>
      {props.dataMsg}
      <br/>
      책 제목 : {props.dataBook.title}
      <br/>
      책 내용 : {props.dataBook.content}
    </div>
  )
}
