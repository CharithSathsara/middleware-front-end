import React from 'react'


function ServiceActivation() {
  return (
<>
  <p style={{fontSize:'40px', marginLeft:'45rem'}}>Service Activation</p>
  <div style={{fontSize:'30px', marginLeft:'35rem'}}>
    
    <div style={{lineHeight:'5rem'}}>
      Roaming Service 
      <button style={{height:'40px',fontSize:'20px',marginLeft:'5rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Deactivate</button>
    </div> 

    <div style={{lineHeight:'5rem'}}>
     Ring Tone Service  
      <button style={{height:'40px',fontSize:'20px',marginLeft:'4.2rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Deactivate</button>
    </div> 

    <div style={{lineHeight:'5rem'}}>
     Data Top Up Service   
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2.2rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',border:'white'}}>Deactivate</button>
    </div> 

  </div>
</>
  );
}

export default ServiceActivation;
