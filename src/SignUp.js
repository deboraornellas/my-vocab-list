import React from 'react';

export class SignUp extends React.Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
             <div id='signinContainer'>
                  <form id='form'>       
                      <input className='input' type="text"   
                       placeholder="First Name"/>
                      <input className='input' type="text"  
                       placeholder="Last Name"/>          
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Sign Up</button>
                  </form>
             </div>
        </div>
      )
   }
}