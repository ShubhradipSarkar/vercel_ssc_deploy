import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';
import skybg from '../../src/images/pgbg.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import {FaUser,FaEnvelope,FaLock,FaLongArrowAltRight} from "react-icons/fa"

function Login(){
    
    const [user, setUser]=useState({
        
        email:"", 
        password:""
    });
    const [errorMSG,setErrorMSG]=useState("");
    const navigate = useNavigate();
    const handleChange=(e)=>{
        
        // // name=e.target.name;
        // // value=e.target.value;
        const {name, value}=e.target;
        console.log(name,value);
        setUser({...user,[name]:value})
    }
    
    const loginf=(e)=>{
        e.preventDefault();
        if( !user.email || !user.password)
        {
            setErrorMSG("Fill all fields");
            
            return;
        }
        setErrorMSG("");
        
        
        console.log(user);
        
        signInWithEmailAndPassword(auth,user.email,user.password).then(
            (res)=>{
                console.log(res);
                
                navigate('/');
                toast.success('Success Notification !', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                console.log('welcome');
            }
        ).catch(
            (err)=>{
                // setErrorMSG(err.message);
                setErrorMSG('wrong email or password');
                // if(err.message==='Firebase: Error (auth/email-already-in-use).')
                // {
                    
                //     // console.log('it is working');
                //     // navigate("/");
                //     // console.log('welcome boi');
                // }
            }
        );
    }
    return(
        
        <div >
            {console.log(user)}
            <center>

            <Form className="loginform  rounded-3  p-5" style={{width:"30rem", background:"rgba(0,0,0,0.5)"}}>
                <center>
                <h3 className='logintext text-white'>Sign In</h3>
                </center>
                

                
            
                <div className='d-flex align-items-center'>
            <FaEnvelope size={28} color={"white"} className="center pb-2"/>
            <input type="text" name="email"  className="w-100 p-2 mb-3" value={user.email} onChange={handleChange} placeholder="Enter your Email" autoComplete='off'    ></input>
            </div>

            <div className='d-flex align-items-center'>

            <FaLock size={28} color={"white"} className="center pb-2"/>
            <input type="password" name="password"  className="w-100 p-2 mb-3" value={user.password} onChange={handleChange}  placeholder="Enter your Password" autoComplete='off'></input>
            </div>

            <div className='orsignup text-white d-flex justify-content-between m-2 pl-3'>
            <p>Not registered yet? </p>
            <p><Link to="/signup" className="navE text-decoration-none text-danger">Sign Up</Link></p>

            </div>
            
            <center><b className='errmsg'>{errorMSG } </b></center>
            <Button variant="primary" className='w-75 mt-2 ml-4 rounded-pill' type="submit" onClick={loginf}>
                Login 
            </Button>

            {/* //////////////////////////////////////////// */}

            {/* <div class="box">
  <h2>Login</h2>
  <form>
    <div class="inputBox">
      <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value=""/>
      <label>Username</label>
    </div>
    <div class="inputBox">
      <input type="password" name="password" required value=""
             onkeyup="this.setAttribute('value', this.value);"
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
             title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
      <label>Password</label>
    </div>
    <input type="submit" name="sign-in" value="Sign In"/>
  </form>
</div> */}

            {/* //////////////////////////////////////////// */}
            </Form>
        </center>
            
        </div>
    )
}
export default Login;