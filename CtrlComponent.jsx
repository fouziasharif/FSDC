import React, { useState } from 'react'

function CtrlComponent() {

    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [submitData,setSubmitData]=useState(0);

    const handleSubmit=()=>{
        setSubmitData({name,pass});
    } 
    function calc(a,b){
      return a+b;
    }
    

    
  return (
    <div>
      <h1>Form</h1>
      
      <input type='text' value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter your name'></input>
      <br/>

      <input type='password' value={pass} onChange={(event)=>setPass(event.target.value)} placeholder='Enter your password'></input>
      <br/>

      <br/>
    
      <button onClick ={handleSubmit}>Submit</button>
      {submitData && (
        <div>
          
          <p><strong>Name:</strong> {submitData.name}</p>
          <p><strong>Password:</strong> {submitData.pass}</p>
        </div>
        )}
      <h2>{calc(2,7)}</h2>
      
      

      
    </div>
  )
}

export default CtrlComponent;
