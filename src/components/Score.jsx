

function Score({score, currentIndex, qBank}){
    return(
        <>
         {
            currentIndex && <div style={{color:"GrayText", height:"50px", marginBottom:"40px" }}>
            <h4 style={{color:"GrayText", marginBottom:"40px" }}> Current  Score is : {score}</h4>
            </div>
        } 
           
        {
          (currentIndex === qBank.length-1) && <div style={{color:"blue", height:"50px", marginBottom:"40px" }}>
          <h4 style={{color:"blue", marginBottom:"40px" }}> Final  Score is : {score}</h4>
          </div>
         
        }
        
        </>
    )
}

export default Score ;