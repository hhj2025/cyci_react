import { useState } from "react";

function 학생성적() {


    const [list, setList] = useState([]);

    const dataList = (name1, korean1, english1, math1) => {
        let obj = {
            name : name1,
            korean : korean1,
            english : english1,
            math : math1
        };

        setList((prev) => prev.concat(obj));
    }

  return (
    <>
      <h1>학생성적</h1>
        <입력 input = {dataList}/>
       <테이블 output = {list}/>
    </>
  )
}

export default 학생성적

function 입력(props){


    return(
        <div style={{width : '100vw', height : '150px', border : '3px solid blue'}}>
            <div style={{marginTop : '30px', marginLeft : '30px'}}>
                <h3>입력</h3>
                <input type="text" placeholder="이름" id="name"/>
                <input type="text" placeholder="국어 점수" id="korean"/>
                <input type="text" placeholder="영어 점수" id="english"/>
                <input type="text" placeholder="수학 점수" id="math"/>
                <input type="button" value='추가' onClick={ e => {
                    e.preventDefault();

                

                    const name1 = document.getElementById('name').value;
                    const korean1 = document.getElementById('korean').value;
                    const english1 = document.getElementById('english').value;
                    const math1 = document.getElementById('math').value;

                    if(name1 === '' || korean1 === '' || english1 === '' || math1 === '') {
                        alert('모든 필드를 입력해주세요.');
                        return;
                    }

                    else{
                        props.input(name1, korean1, english1, math1);

                        document.getElementById('name').value = '';
                        document.getElementById('korean').value = '';
                        document.getElementById('english').value = '';
                        document.getElementById('math').value = '';
                    }

                }}/>
            </div>
        </div>
    )
}


function 테이블(props){
    return(
        <>
         <div style={{width : '100vw', height : '300px', border : '3px solid green'}}>
                <div style={{marginTop : '30px', marginLeft : '30px'}}>
                    <h3>리스트</h3>
                    <table style={{width : '1850px', height : '200px',  border : '3px solid green'}}>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>국어</th>
                                <th>영어</th>
                                <th>수학</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.output.map( (score) => (
                                <tr>
                                    <td>{score.name}</td>
                                    <td>{score.korean}</td>
                                    <td>{score.english}</td>
                                    <td>{score.math}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

