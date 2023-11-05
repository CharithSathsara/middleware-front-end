import React, {useState} from 'react';
import "../components/model/model.css";

function Payment() {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <section className='heading'>
                <p>Pay Your Bill Here !</p>
            </section>
            <section className='sub-heading'>
                <p>Total : $300</p>
            </section>

            <section className='form'>
                {/* <form> */}
                    <div className='form-group'>
                        <label htmlFor="accNumber">Account Number</label>
                        <input
                            type="number"
                            name='accountNumber'
                            id='accountNumber'
                            placeholder='Enter Your Account Number'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="number"
                            name='cvc'
                            id='cvc'
                            placeholder='Enter Your CVC Number of Your Card'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exp">Expiry Date</label>
                        <input
                            type="date"
                            name='expDate'
                            id='expDate'
                            placeholder='Enter the Expiry Date of Your Card'
                        />
                    </div>
                    <div className='form-group'>
                        <button 
                            onClick={toggleModal}
                            className = 'submit-btn'
                            type='submit'>
                            PAY
                        </button>

                    </div>
                {/* </form> */}
            </section>

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>Payment Successful !</h2>
                    <p>
                    Your payment of this month has been successfully done. Thank you for your payment.
                    </p>
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                </div>
                </div>
            )}
            
        </>
    )
}

export default  Payment