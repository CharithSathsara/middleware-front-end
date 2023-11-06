import React from 'react'

export default function BillingService() {
  return (
    <>
        <div className='row'>
            <div><h3>Billing Service</h3></div>
            <div className='container border-rounded bg-light col-auto'>
                <h4>Your Current Bill</h4>
                <div className=''>
                    <label className='text-left p-1'>Top Up Pay:</label><span>1000</span>
                <div className=''>
                    <label className='text-left p-1'>Ring Tone:</label><span>7000</span>
                </div>
                <div className=''>
                    <label className='text-left p-1'>Total:</label><span>1800</span>
                </div>
            </div>
        </div>
        <div className='border-rounded bg-light w-36 h-28 col'>
                <h4>Your Past Bill</h4>
                <div className=''>
                    <label className='text-left p-1'>Top Up Pay:</label><span>1000</span>
                <div className=''>
                    <label className='text-left p-1'>Ring Tone:</label><span>7000</span>
                </div>
                <div className=''>
                    <label className='text-left p-1'>Total:</label><span>1800</span>
                </div>
                <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Pay</button>
                </div>
            </div>
        </div>
        <div className='border-rounded bg-light col'>
                <h4>Your Total Bill</h4>
                <div className='col-auto'>
                    <label className='text-left font-bold p-1'>Top Up Pay:</label><span>1000</span>
                <div className='col-auto'>
                    <label className='text-left p-1'>Ring Tone:</label><span>7000</span>
                </div>
                <div className=''>
                    <label className='text-left p-1'>Total:</label><span>1800</span>
                </div>
                <div class="col-auto">
                <button type="submit" className="btn btn-primary mb-3 w-[100px]">Pay</button>
                </div>
            </div>
        </div>
        {/* <div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div> */}
        </div>
    </>
  )
}
