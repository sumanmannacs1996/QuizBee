import React,{useState} from 'react'

const QuestionBox = ({question,options,selected}) => {
    const [answers,setAnswers] = useState(options);
    const [disable,setDesible] = useState(false);
    return (
        <div className='questionBox'>
            <div className='question'>{question}</div>
            {
                answers.length > 0 && answers.map((text)=>(
                    <button
                    key={text}
                    className='answerBtn'
                    disabled={disable}
                    onClick={()=>{
                        setAnswers([text]);
                        setDesible(true);
                        selected(text);
                    }}
                    >{text}</button>
                ))
            }
        </div>
    )
}

export default QuestionBox
