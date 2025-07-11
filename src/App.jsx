import { useState } from 'react'
import './App.css'
function App() {
  let [valueForTest, setvalueForTest] = useState(0);
  const changeVariable = () => {
    valueForTest = valueForTest + 1;
    setvalueForTest(valueForTest);
  }
  return (
    <>
      <button onClick={changeVariable}>Click</button>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
      <h1>I am okay {valueForTest}</h1>
    </>
  )
}
export default App
