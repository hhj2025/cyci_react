import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './page/Main'
import Calc from './page/Calc'
import Dark from './page/Dark'
import StudentInfo from './page/StudentInfo'
import 자식건네주기 from './page/자식건네주기'
import 게시판 from './page/게시판'
import 학생성적 from './page/학생성적'
import Axios보내기 from './page/axios/axios보내기'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />

          <Route path='/calc' element={<Calc />} />
          
          <Route path='/dark' element={<Dark />} />

          <Route path='/studentinfo' element={<StudentInfo />} />

          <Route path='/child' element={<자식건네주기 />} />

          <Route path='/board' element={<게시판 />} />

          <Route path='/score' element={<학생성적 />} />

          <Route path='/axios' element={<Axios보내기 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
