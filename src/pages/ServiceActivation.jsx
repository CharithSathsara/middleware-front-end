import React from 'react';


function ServiceActivation() {
  return (
<>
  {/* <p style={{fontSize:'40px', marginLeft:'1rem'}}>Service Activation</p>
  <div style={{fontSize:'30px', marginLeft:'35rem'}}>
    
    <div style={{lineHeight:''}}>
      Roaming Service 
      <button style={{height:'40px',fontSize:'20px',marginLeft:'5rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Deactivate</button>
    </div> 

    <div style={{lineHeight:''}}>
     Ring Tone Service  
      <button style={{height:'40px',fontSize:'20px',marginLeft:'4.2rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Deactivate</button>
    </div> 

    <div style={{lineHeight:''}}>
     Data Top Up Service   
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2.2rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Activate</button>
      <button style={{height:'40px',fontSize:'20px',marginLeft:'2rem',backgroundColor:'#5B78F3',borderRadius:'7px',
      border:'white',cursor:'pointer'}}>Deactivate</button>
    </div> 

  </div> */}

  <div className='row'>
    <div><h3 className='text-xl font-extrabold text-slate-950'>Service Activation</h3></div>
    <div><h4 className=''>  Roaming Service </h4></div>
    <div className='container border-rounded bg-light col-auto p-3'>
    <div className="col-auto">
                <button type="submit" class="btn btn-primary mb-3 mx-3">Activate</button>
                <button type="submit" class="btn btn-danger mb-3 mx-3">Deactivate</button>
    </div>
    </div>

    <div><h4>Ring Tone Service  </h4></div>
    <div className='container border-rounded bg-light col-auto p-3'>
    <div className="col-auto">
                <button type="submit" class="btn btn-primary mb-3 mx-3">Activate</button>
                <button type="submit" class="btn btn-danger mb-3 mx-3">Deactivate</button>
    </div>
    </div>

    <div><h4> Data Top Up Service </h4></div>
    <div className='container border-rounded bg-light col-auto p-3'>
    <div className="col-auto">
                <button type="submit" class="btn btn-primary mb-3 mx-3">Activate</button>
                <button type="submit" class="btn btn-danger mb-3 mx-3">Deactivate</button>
    </div>
    </div>
  </div>


</>
  );
}

export default ServiceActivation;