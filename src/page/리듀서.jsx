import { useState, useReducer } from "react";

function 리듀서() {

    const [count, setCount] = useState(0);

    const [num, setNum] = useReducer(countReducer, 0);

    function countReducer(state, action) {
        if (action === "up") {
            return ++state;
        }
        if (action === "down") {
            return --state;
        }
        if (action === "reset") {
            return 0;
        }
    }

  return (
    <>
      <h1>리듀서 페이지</h1>
      {num}
      <input type="button" value="up" onClick={() => { setNum("up") }} />
      <input type="button" value="down" onClick={() => { setNum("down") }} />
      <input type="button" value="초기화" onClick={() => { setNum("reset") }} />

      {count}
        <input type="button" value="up" onClick={() => { setCount(count + 1) }} />
        <input type="button" value="down" onClick={() => { setCount(count - 1) }} />
    </>
  )
}

export default 리듀서

