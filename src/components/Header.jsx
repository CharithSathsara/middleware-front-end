import React from "react";
import { Link,useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {logout, reset} from "../features/authentication/authSlice";

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <header className='header'>
            <div>
                <Link to='/' style={{fontSize:'40px'}}>Sri Care</Link>
            </div>
            <ul>
                {user?(
                    <li>
                        <button className='login-btn' onClick={onLogout} >Logout</button>
                    </li>
                ):(<>
                    <li>
                        <Link to='/login'>
                            <button type='submit' className='login-btn'>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <button type='submit' className='reg-btn' style={{marginRight:'-20rem'}}>
                                Register
                            </button>
                        </Link>
                    </li>
                </>)}

            </ul>

        </header>
    )
}

export default Header;