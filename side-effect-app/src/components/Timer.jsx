import React,{useEffect, useState} from 'react'

function Timer(){
    const [sec, setSec] = useState(15)
    const [isActive, setIsActive] = useState(true)    
    function handlePause(){
      setIsActive(false) 
      console.log('render')
    }

     useEffect(()=>{
        let interval;
        
        if(isActive){
            interval = setInterval(()=>{
                console.log('interval')
                setSec((prev)=>{
                    if(prev <= 1){
                        setIsActive(false)
                        return 0
                    }
                    return prev-1
                })
            },1000)
            
        }

       return ()=>{
        clearInterval(interval)
       }
        
     },[isActive])

    return(
        <>
           <h2>{sec}</h2>
           <button onClick={handlePause}>Pause...</button>
        </>
    )
    
}

export default Timer