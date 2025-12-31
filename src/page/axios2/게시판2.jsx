import axios from "axios";
import { login } from "./api/로그인/loginService";
import { boardList } from "./api/게시판/boardService";
import { useState, useEffect } from "react";


function 게시판2() {

  return (
    <>
      <h1>게시판 페이지</h1>
      <로그인/>
      <게시판영역/>
    </>
  )
}

export default 게시판2

function 로그인() {

  function 로그인액션() {
    const userId = document.getElementById('id');
    const userPw = document.getElementById('pw');

    const obj = {userId: userId.value, userPw: userPw.value};

    login(obj)
    .then(res=> {
        console.log(res);
        
    });
  }

  return (
    <>
      <h1>로그인 페이지</h1>
      ID: <input type="text" id="id"/><br/>
      PW: <input type="password" id="pw"/><br/>
      <input type="button" value="로그인" onClick={로그인액션}/>

      
    </>
  )
}

function 게시판영역() {

  const [lists, setLists] = useState([]);

  function 게시판리스트() {
    boardList()
    .then(res=> {
        console.log(res);
        setLists(res.data);
    });
  }

  useEffect(()=> {
    alert('게시판영역 컴포넌트가 화면에 나타남');
    게시판리스트();
  }, []);

  return (
    <>
      <h1>게시판 영역</h1>
     
      {lists.map((item => <게시판판넬 key={item.boardIdx} dataInfo={item}/>))}
    </>
  )
}

function 게시판판넬(props) {
  const data = props.dataInfo;
  return (
    <>
      <div style={{width : '100vw', height : '50px', border : '3px solid red'}}>
              <h4>{data.title}</h4>
              <span>{data.userId}</span> / <span>{data.createAt}</span>
            </div>
    </>
  )
}


