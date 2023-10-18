import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Header = () => {
    const [auth, setAuth] = useAuth();

    const handleLogOut = () =>{
        setAuth({
            ...auth,
            user:null,
            token:""
        });
        localStorage.removeItem("auth");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src='/images/miracle.png' className='nav-img' alt='img' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item " key={1}>
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item" key={2}>
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item" key={3}>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>

                            <li className="nav-item" key={4}>
                                <NavLink className="nav-link " to='/about-us'>About Us</NavLink>
                            </li>
                            <li className="nav-item" key={5}>
                                <NavLink className="nav-link " to='/pricing'>Pricing</NavLink>
                            </li>
                            {/* <li className="nav-item" key={5}>
                                <NavLink className="nav-link " to='/contact-us'>Contact Us</NavLink>
                            </li> */}
                            {
                                !auth.user ? <>
                                    <li className="nav-item" key={6}>
                                        <NavLink className="nav-link " to='/sign-in'>Sign In</NavLink>
                                    </li>
                                </> : <>
                                    <li className="nav-item" key={6}>
                                        <NavLink className="nav-link " to='/review'>Review</NavLink>
                                    </li>
                                    <li className="nav-item" key={7}>
                                        <NavLink className="nav-link " onClick={handleLogOut} to='/sign-in'>Log Out</NavLink>
                                    </li>
                                </>
                            }


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header