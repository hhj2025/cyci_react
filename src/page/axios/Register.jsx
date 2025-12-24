import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate();

    function memberRegister() {
        const userId = document.getElementById("userId");
        const userPw = document.getElementById("userPw");
        const userEmail = document.getElementById("userEmail");

        const obj = {userId : userId.value, userPw : userPw.value, userEmail : userEmail.value};
        axios.post('http://localhost:8080/api/member/register', obj)
        .then(res => {
          console.log(res);
          alert("회원가입 성공");
          navigate('/login');})
    }

  return (
    <div>
        <h1>회원가입 페이지</h1>
        <input type="text" placeholder="아이디" id="userId"/><br/>
        <input type="password" placeholder="비밀번호" id="userPw"/><br/>
        <input type="email" placeholder="이메일" id="userEmail"/><br/>
        <input type="button" value="회원가입" onClick={memberRegister}/><br/>
        <Link to="/login">로그인 페이지 이동</Link>
    </div>
  )
}
export default Register;