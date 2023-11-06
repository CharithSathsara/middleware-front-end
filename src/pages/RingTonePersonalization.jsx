import React from 'react';


function RingTonePersonalisation() {
  return (
<>
  <p style={{fontSize:'40px'}}>Ring Tone Personalisation</p>

  <p style={{fontSize:'20px', margin:'0 20rem  5rem 20rem',textAlign: 'center'}}>Customize your ringtone to express your unique style. 
  Select your preference and make it truly yours. Set the tone that resonates with you, and let it ring in your way. The choice is yours!</p>
  <div>

       <div style={{marginRight:'20px'}}>
       <h4>Set Your Ring Tone:</h4>

       <select style={{fontSize:'20px', marginLeft:'2rem',height:'40px',cursor:'pointer'}} >
       <option>My Heart Will Go Song</option>
       <option>Salli Song</option>
       <option>Moon and Light Song</option>
       <option>Despasito Song</option>
       <option>Broken Angel Song</option>
       </select>

       
               
       <button type="submit" class="btn btn-primary mb-1 mx-3">Set Song</button>        
       </div> 


  </div>
</>
  );
}

export default RingTonePersonalisation;
