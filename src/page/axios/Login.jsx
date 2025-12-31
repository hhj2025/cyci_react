import axios from 'axios';

export default function Login() {
    function 로그인() {
        const userId = document.getElementById('id');
        const userPw = document.getElementById('pw');
        const obj = {userId: userId.value, userPw: userPw.value};
        console.log(obj);

        axios.post('http://localhost:8080/api/member/login', obj)
        .then(res=> {
            console.log(res);
            const data = res.data;
            if(res.status !== 200) {
                alert('서버 오류 발생');
                return;
            }
            if(data !== '') {
                alert('로그인 성공');
            } else {
                alert('로그인 실패 (아이디 또는 비밀번호 확인)');
            }

            document.cookie = "token=" + data + "; path=/; max-age=86400"; // 토큰을 쿠키에 저장
        });
    }

    function getCookie(name){
        const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
        return value ? value.split('=')[1] : null;
    }
    function 쿠키확인(){
        const token = getCookie('token');
        console.log('쿠키에 저장된 토큰: ' + token);   
    };

    return (
        <div>
            <h1>로그인 페이지</h1>
            ID: <input type="text" id="id"/><br/>
            PW: <input type="password" id="pw"/><br/>
            <input type="button" value="로그인" onClick={로그인}/>

            <input type="button" value="쿠키 확인" onClick={쿠키확인}/>
            <다른페이지/>
        </div>
    )
}

function 다른페이지() {

  function getCookie(name){
        const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
        return value ? value.split('=')[1] : null;
    }

  function api호출() {

    const token = getCookie('token');

    axios.get('http://localhost:8080/api/main/test', {
        headers: {
          'Authorization': 'Bearer ' +token
        }
      }
    )
    .then(res=> {
        console.log(res);
    });
  }

  return (
    <div style={{width : '100vw', height : '300px', border : '3px solid red'}}>
      <h1>다른 페이지</h1>
      <input type="button" value="로그인 후 실행 버튼" onClick={api호출}/>
    </div>
  )
}