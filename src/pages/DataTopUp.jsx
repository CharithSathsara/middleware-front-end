import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../index.css'

export default function DataTopUp() {
  return (
    <>
    <div className='p-3 mb-2'>
    <h3 className='text-start mt-2 mb-2'>Data Top-Up</h3>
    <div className='w-28 h-20'>
    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4 mb-2 w-28 h-20' alt='...' />
    </div>
    <form class="row g-3">
  <div class="col-auto">
    <label for="Amount" class="visually-hidden">Amount</label>
    <input type="number" class="form-control" id="amount" placeholder="Amount" />
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">TopUp</button>
  </div>
</form>
    </div>
    </>
  )
}
