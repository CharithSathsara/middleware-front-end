import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";


function Home() {

    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth )

    useEffect(() => {

        if(!user){
            navigate('/login')
        }

    }, [user, navigate])

    return (
        <>
            <h1>Welcome to Sri Care</h1>
            <br/>
            <br/>
            <Link to='/products'>
                <button className='card-btn'>service Activations</button>
            </Link>
            <Link to='/customers'>
                <button className='card-btn'>Ring Tone Personalization</button>
            </Link>
            <Link to='/distributors'>
                <button className='card-btn'>Data Top Up</button>
            </Link>
            <Link to='/incomes'>
                <button className='card-btn'>View Bills</button>
            </Link>
            {/* <Link to='/expenditures'>
                <button className='card-btn'>Go To Expenditures</button>
            </Link> */}
        </>
    )

}

export default Home