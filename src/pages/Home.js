import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>
                Home
            </h1>
            <h3>

                <Link to="/">
                    Go to Back
                </Link>
            </h3>
        </>

    )
}

export default Home