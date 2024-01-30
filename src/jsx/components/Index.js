import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <ul>
                <Link to="/">  <li><a href="">Home</a></li></Link>
                <Link to="/about"> <li><a href="">About</a></li></Link>
                <Link to="/contact"><li><a href="">Contact</a></li></Link>
            </ul>
            <div>

            </div>
        </div>
    )
}

export default Index