import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';
import skybg from '../../src/images/pgbg.jpg';
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

            {/* <Form className="loginform">
                <center>
                <h3 className='logintext'>Sign In</h3>
                </center>
                

                <div className='orsignup'><h3>Not registered yet? <Link to="/signup" className="navE">Sign Up</Link></h3></div>
              
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" autoComplete='off'    ></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" autoComplete='off'></input>
            
            <center><b className='errmsg'>{errorMSG } </b></center>
            <Button variant="primary" type="submit" onClick={loginf}>
                Submit
            </Button> */}

            {/* //////////////////////////////////////////// */}

            <div class="box">
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
</div>

            {/* //////////////////////////////////////////// */}
            {/* </Form> */}
        </center>
            
        </div>
    )
}
export default Login;