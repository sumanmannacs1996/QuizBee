import React from 'react'

const Result = ({score,atempt,playAgain}) => {
    return (
        <div className='score-board'>
            <div className="score">You scored {score} / {atempt} correct answer!</div>
            <button
            className='playBtn'
            onClick={playAgain}
            >Play again!</button>
        </div>
    )
}

export default Result
