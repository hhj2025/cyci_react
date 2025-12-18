import { useState } from "react";
import lion from '../assets/img/lion.jpg'
import puppy from '../assets/img/puppy.png'

function 게시판() {


  let obj1 = {title : '귀여운 사자',
              content : '작고 귀여운 갈색 사자',
              img : lion,
              cnt : 0};

  let obj2 = {title : '귀여운 강아지',
              content : '작고 귀여운 갈색 강아지',
              img : puppy,
              cnt : 0};

  const [lists, setLists] = useState([obj1, obj2]);

  return (
    <>
      <h1>DIV 나누기</h1>
      <Component1 data={obj1}/>
      <Component1 data={obj2}/>
      <hr/>
      {lists.map((item, index) => (
        <Component1 key={index} data={item} fnGood={(index) => {
          console.log(lists[index])
          lists[index].cnt = lists[index].cnt+1;
        }} dataIndex={index}/>
      ))}
    </>
  )
}

export default 게시판

function Component1(props) {
  return(
    <div style={{border : '2px solid red', display : 'flex'}}>
      <img style={{marginRight : '20px', height : '200px', width : '200px', objectFit : 'cover', borderRadius : '50%', border : '1px solid black'}} src={props.data.img} alt="사자" />
      <div>
        <h1>{props.data.title}</h1>
        <span>{props.data.content}</span>
        <input type="button" value='부모 호출' onClick={ e => {
          e.preventDefault();
          props.fnGood(props.dataIndex);
        }}/>
        {props.data.cnt}
      </div>
    </div>
  )
}

