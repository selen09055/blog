
//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  //let cvc = '그분의 이름';//데이터바인딩
  let [a,b] = useState(0);
  //let dont = '그분의 이름을 말해선 안돼';
  let [title,edit] = useState(['하스터','크툴루','슈브']); //[a,b]=destructuring 문법
  function change(){
    var changeData = [...title];//state 자료는 직접 건들지 않기 위해 deep copy
      edit(changeData);
  }
  return (
    <div className="App">
      <div className="Black-nav">
        황색의 왕
      </div>
      <Modal/>
      <div className="list">
      <button onClick={change}>버튼</button>
      <h3>{title[0]} <span onClick={ ()=>{
        console.log(1);
        b(a+1)
        if (a === 10){
          b('누르지마라');
        }if(a === '누르지마라'){
          b(0);
        }

        
        } }>👍</span> {a} </h3>
      <p>1월 11일</p>
      <hr/>
      </div>
      <div className="list">
      <h3>{title[1]}</h3>
      <p>2월 22일</p>
      <hr/>
      </div>
      <div className="list">
      <h3>{title[2]}   </h3>
      <p>3월 33일</p>
      <hr/>
      </div>



    </div>
  );
    
}
//Component는 무조건 대문자 시작, 반복출현하는 html덩어리, 자주변경되는 html UI를 컴포넌트로 만들자
function Modal(){
  return(
  <>
  <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  </>
)
}

export default App;
