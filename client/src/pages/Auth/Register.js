import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Layout from '../../components/Layout/Layout'
import '../../styles/Auth.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/auth';

const Register = () => {
    const formBox = useRef(null);
    const contain = useRef(null);
    const signIn = useRef(null);
    const signUp = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // const [regEmail,setRegEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    // const [regPassword,setRegPassword] = useState("");

    const navigate = useNavigate();

    const [auth,setAuth] = useAuth();

    const handleSignUp = () => {
        formBox.current.classList.add('active')
        contain.current.classList.add('active')
        signIn.current.classList.add('active')
        signUp.current.classList.add('active')
    }

    const handleSignIn = () => {
        formBox.current.classList.remove('active')
        contain.current.classList.remove('active')
        signIn.current.classList.remove('active')
        signUp.current.classList.remove('active')
    }

    const signInFun = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/sign-in',{
                email,
                password
            });

            if(res && res.data.success){
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem("auth",JSON.stringify(res.data));
                navigate('/',toast);
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    const signUpFun = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            if (res && res.data.success) {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                handleSignIn();
            }
        } catch (error) {

        }
    }
    return (
        <Layout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div ref={contain} className="register-container">
                <div className="register-content">
                    <div className="register-glass">
                        <div className="sign-in">
                            <h1>Already have account?</h1>
                            <button onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div className="sign-in">
                            <h1>Don't have account?</h1>
                            <button onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                    <div ref={formBox} className="form-box" onSubmit={signInFun}>
                        <form ref={signIn} className='sign-in-form'>
                            <h1>Sign In</h1>
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required></input>
                            <label>password</label>
                            <input
                                name='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required></input>
                            <button type='submit' className='sign-in-button' >Sign In</button>
                        </form>
                        <form ref={signUp} className='sign-up-form' onSubmit={signUpFun}>
                            <h1>Sign Up</h1>
                            <label>Name</label>
                            <input
                                name='name'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required></input>
                            <label>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required></input>
                            <label>Phone no</label>
                            <input
                                name='phone_no'
                                type='text'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required></input>
                            <label>Address</label>
                            <input
                                name='address'
                                type='text'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required></input>
                            <label>password</label>
                            <input
                                name='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            ></input>
                            <button type='submit' className='sign-up-button' >Sign Up</button>

                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register