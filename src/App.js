
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [one,setOne]=useState(0);
  const fun=()=>{
setOne(one+1);
  }
  const fun2=()=>{
    setOne(one-1);

  }
  return (

    <div className="App">
      {one}
      <br></br>
     <button onClick={fun}>increase</button>
     <button onClick={fun2}>decrease</button>
    </div>
  );
}

export default App;
