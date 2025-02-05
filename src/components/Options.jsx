import { useState, useEffect } from "react";

function Options({ options, setSelectedAnswer, selectedAnswer }) {

    return (
        <>
            <h4 style={{marginLeft:"1px"}}>Please Choose the Correct Options:</h4>
            {
                options ? options.map((option, index) => (
                    <label style={{marginLeft:"150px"}} className="style" key={index}>
                        <br />
                        <input type="radio" name="option" value={option}
                            onChange={() => setSelectedAnswer(option)}
                            checked={selectedAnswer === option} 
                        />
                        {option}
                    </label>
                ))
                    :
                    null
            }
        </>
    )
}

export default Options;
