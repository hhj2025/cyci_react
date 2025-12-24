import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    function memberLogin() {
        const userId = document.getElementById("userId");

         axios.post('http://localhost:8080/api/member/login', {userId : userId.value})
        .then(res => {
          console.log(res.data);
          if(res.data === false){
            alert("로그인 실패");
            return;
          }
          else{
          alert("로그인 성공");
          navigate('/axios');
          }
        })
    }

        

  return (
    <div>
        <h1>로그인 페이지</h1>
        <input type="text" placeholder="아이디" id="userId"/><br/>
        <input type="password" placeholder="비밀번호" id="userPw"/><br/>
        <input type="button" value="로그인" onClick={memberLogin}/><br/>
        <Link to="/register">회원가입 페이지 이동</Link>
    </div>
  )
}
export default Login;