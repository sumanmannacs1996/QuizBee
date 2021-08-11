import React, {useState,useEffect} from 'react';
import './App.css';
import quizService from './quizService/index';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

let initalState={
  questions:[],
  score:0,
  atempt:0
}

function App() {
  const [data,setData] = useState(initalState);

  const getQustion=()=>{
    quizService().then(resppone=>{
      let questions =resppone.map(p=>({...p,answers:p.answers.sort(()=>0.5 - Math.random())}))
      setData({...data,questions,score:0,atempt:0});
    })
  }

  const computeAnswer=(selected,correct)=>{
    (selected === correct) ?
      setData({...data,score: data.score+1,atempt:data.atempt+1}) : 
      setData({...data,atempt:data.atempt+1})
  }

  useEffect(()=>{
    getQustion();
  },[])

  return (
    <div className="container">
      <div className="title">QuizBee</div>
      {
        data.questions.length > 0 &&
        data.atempt < 5 &&
        data.questions.map(({question,answers,correct,questionId})=>
        <QuestionBox
        question={question}
        options={answers}
        key={questionId}
        selected={(text)=>computeAnswer(text,correct)}
        ></QuestionBox>)
      }
      {
        data.atempt === 5 &&
        <Result 
        score={data.score}
        atempt={data.atempt}
        playAgain={()=>getQustion()}
        />
      }
    </div>
  );
}

export default App;
