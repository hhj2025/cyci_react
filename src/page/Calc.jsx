import { useState } from "react";

function Calc() {

    const [rs, setRs] = useState(0);


  return (
    <>
      <h1>Calc Page</h1>
      <input type="text" id="num1"/>
      <select id="op">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="text" id="num2"/>
      <input type="button" value="계산" onClick={ e => {
            e.preventDefault();
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);
            let op = document.getElementById('op').value;

            switch(op){
                case '+' : 
                    setRs(num1 + num2);
                    break;
                case '-' : 
                    setRs(num1 - num2);
                    break;
                case '*' : 
                    setRs(num1 * num2);
                    break;
                case '/' : 
                    setRs(num1 / num2);
                    break;
            }

      }}/>

      <p>{rs}</p>

    </>
  )
}

export default Calc
