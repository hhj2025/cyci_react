import axios from "axios"

function Axios보내기() {

  function test1() {
    axios.get('http://localhost:8080/test1')
    .then(res => {
      console.log(res);
    });
  }

  return (
    <>
      <h1>Axios 사용해보기</h1>
      
      <input type="button" value="Axios 보내기" onClick={test1} />

    </>
  )
}

export default Axios보내기
