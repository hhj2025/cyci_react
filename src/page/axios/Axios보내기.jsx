import axios from "axios"

function Axios보내기() {

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

  return (
    <>
      <h1>Axios 사용해보기</h1>
      
      <input type="button" value="Axios 보내기" onClick={test1} />
      <input type="button" value="Axios 보내기2" onClick={test2} />
      <input type="button" value="Axios 보내기3" onClick={test3} />
      <input type="button" value="Axios 보내기4" onClick={test4} />

      <input type="button" value="Axios post 보내기" onClick={post1} />

      <input type="button" value="Axios res 보내기" onClick={res1} />



    </>
  )
}

export default Axios보내기
