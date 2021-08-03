import { useEffect, useState } from 'react';
import './App.css';

function App() {
   
  const[value, setvalue] = useState();   // input value
  const[newValue, setnewValue] = useState("");  //storing value to be converted

  const inputCurrency = (event)=> {
        setvalue(event.target.value);
  };
  const outputCurrency = () => {
       
  };

 const convertCurrency = () => {
       setnewValue(value * 74.36);      
 };
 const cancelCurrency = () => {
    setvalue('');
    setnewValue('');
 };
  

 
 useEffect(() => {
    
 }, []);
    
  return (
    <div className="App">
         <nav className='navigation'>Currency Converter</nav>
         <div className='dollar'>
        <span>
          American Dollar
        </span>
        <input className='dollar_input' placeholder='$' type='text' onChange={inputCurrency} value={value}/>
        </div>
       
        <div className='rupee'> 
        <span>
          Indian Rupee
        </span>
        <input className='rupee_input' placeholder='Rs' type='text' value={newValue} onChange={outputCurrency}/>
        </div>          
        <div className='converter'>
        
         <button className='button_main' onClick={convertCurrency}>Convert</button>
        </div>
      
       <div className='cancel'>
       <button className='button_cancel' onClick={cancelCurrency}>Cancel</button>
       </div>
       

    </div>
    
  );
}

export default App;
