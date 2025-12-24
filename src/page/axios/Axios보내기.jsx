import axios from "axios";
import { useState } from "react";

function Axios보내기() {

  const [list, setList] = useState([]);

  function test1() {
    axios.get('http://localhost:8080/test1')
    .then(res => {
      console.log(res);
    });
  }

  function test2() {
    axios.get('http://localhost:8080/data1', {params : {'text' : '안녕하세요'}})
    .then(res => {
      console.log(res);
    });
  }

  function test3() {
    axios.get('http://localhost:8080/data2', {params : {'name' : 'qewr', 'age' : 20}})
    .then(res => {
      console.log(res);
    });
  }

  function test4() {
    axios.get('http://localhost:8080/data3', {params : {'num1' : 1, 'num2' : 20}})
    .then(res => {
      console.log(res);
    });
  }

    function post1() {
    axios.post('http://localhost:8080/post1', {'name' : 'qewr', 'age' : 20})
    .then(res => {
      console.log(res);
    });
  }

    function res1() {
    axios.get('http://localhost:8080/res1', {params : {'name' : 'qewr', 'age' : 20}})
    .then(res => {
      console.log(res);
    });
  }

    function boardList() {
    axios.get('http://localhost:8080/api/board/list')
    .then(res => {
      console.log(res);
      if(res.status !== 200){
        console.log("error");
      }
      else{
        const list = res.data;
        console.log(list);
        setList(list);
      }
    });
  }

  function eventData(){
    boardList();
  }

  return (
    <>
      <h1>Axios 사용해보기</h1>
      
      <input type="button" value="Axios 보내기" onClick={test1} />
      <input type="button" value="Axios 보내기2" onClick={test2} />
      <input type="button" value="Axios 보내기3" onClick={test3} />
      <input type="button" value="Axios 보내기4" onClick={test4} />

      <input type="button" value="Axios post 보내기" onClick={post1} />

      <input type="button" value="Axios res 보내기" onClick={res1} />


    <h1>게시판 작성하기</h1>
    <RegisterBoard event={eventData}/>

    <h1>게시판 불러오기</h1>
    <input type="button" value="게시판 불러오기" onClick={boardList} />
    {list.map(item => (
      <div key={item.boardIdx}>
        <span>{item.title}</span>
        <span>{item.userId}</span>
        <span>{item.createAt}</span>
      </div>
    ))}

    </>
  )
}

export default Axios보내기

function RegisterBoard(){

    function BoardRegister(props) {

    const title = document.getElementById("title");
    const userId = document.getElementById("userId");
    const content = document.getElementById("content");

    const obj = {title : title.value, userId : userId.value, content : content.value};
    axios.post('http://localhost:8080/api/board/register', obj)
    .then(res => {
      console.log(res);
       props.event && props.event();
    })}
  return(
    <>
      제목 : <input type="text" id="title"/><br/>
      작성자 : <input type="text" id="userId"/><br/>
      내용 : <textarea style={{width : '300px', height : '200px'}} id="content"></textarea>
      <input type="button" value="게시판 등록" onClick={BoardRegister} />
    </>
  )
}