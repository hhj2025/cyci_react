import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Dark() {

    const [dark, setDark] = useState('white');

    const 페이지이동  = useNavigate();

  return (
    <>
      <h1>Dark Page</h1>
      <input type="button" value='다크모드 전환' onClick={ e => {
        e.preventDefault();
        console.log({dark})
        if (dark === 'white'){
          setDark('black')
        }
        else{
          setDark('white')
        }
      }}/>

      <div style={{width : '1500px', height : '600px', backgroundColor : dark, color : dark === 'white' ? 'black' : 'white', border : '1px solid red'}}>
        Hello World
      </div>

      <input type="button" value='메인 이동' onClick={ e => {
        e.preventDefault();
        페이지이동('/');
      }}/>
    </>
  )
}

export default Dark
