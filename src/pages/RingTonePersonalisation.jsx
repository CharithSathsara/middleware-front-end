import React from 'react'


function RingTonePersonalisation() {
  return (
<>
  <p style={{fontSize:'40px', marginLeft:'40rem'}}>Ring Tone Personalisation</p>

  <p style={{fontSize:'20px', margin:'0 20rem  5rem 20rem',textAlign: 'center'}}>Customize your ringtone to express your unique style. 
  Select your preference and make it truly yours. Set the tone that resonates with you, and let it ring in your way. The choice is yours!</p>
  <div style={{fontSize:'30px', marginLeft:'30rem'}}>

       <div>
       <label>Set Your Ring Tone:</label>

       <select style={{fontSize:'20px', marginLeft:'2rem',height:'40px',cursor:'pointer'}} >
       <option>My Heart Will Go Song</option>
       <option>Salli Song</option>
       <option>Moon and Light Song</option>
       <option>Despasito Song</option>
       <option>Broken Angel Song</option>
       </select>

       <button style={{fontSize:'20px',height:'40px', marginLeft:'2rem', backgroundColor:'#5B78F3',borderRadius:'7px',border:'white',cursor:'pointer'}}>Set Song</button>
       </div> 


  </div>
</>
  );
}

export default RingTonePersonalisation;
