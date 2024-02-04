import React,{useState} from 'react'
import Timer from './components/Timer'

function App() {
  const [show, setShow] = useState(false)
  
  

  return (
    <>
      <button onClick={()=> setShow(!show)}>Toggle</button>
      {show ? <Timer/> : <p>Please toggle to get the timer..</p>}
      
    </>
  )
}

export default App
