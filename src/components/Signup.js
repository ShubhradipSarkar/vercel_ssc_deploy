import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from './firebase';

function Signup(){
    const navigate=useNavigate();
    const [user, setUser]=useState({
        name:"",
        email:"", 
        password:"",
        cpassword:""
    });
    const [errorMSG,setErrorMSG]=useState("");

    const handleChange=(e)=>{
        
        // // name=e.target.name;
        // // value=e.target.value;
        
        const {name, value}=e.target;
        console.log(name,value);
        setUser({...user,[name]:value})
    }
    
    const register=(e)=>{
        e.preventDefault();
        if(!user.name || !user.email || !user.password )
        {
            setErrorMSG("Fill all fields");
            
            return;
        }
        if(user.password!==user.cpassword )
        {
            setErrorMSG("password you are confirming is not same");
            
            return;
        }
        setErrorMSG("");
        
        
        console.log(user);
        console.log(`name is ${user.name}`);
        createUserWithEmailAndPassword(auth,user.email,user.password).then(
            (res)=>{
                console.log(res);
                const peeps = res.user;
                updateProfile(peeps,{
                    
                    displayName: user.name,
                    // disPlayemail: user.email
                });
                navigate('/login');
                console.log('registered');
            }
        ).catch(
            (err)=>{
                // setErrorMSG(err.message);
                console.log(err.message);
                if(err.message==='Firebase: Error (auth/email-already-in-use).')
                {
                    setErrorMSG('already registered');
                }
            }
        );
    }

    return(
        
        <div>
            <center>
            <Form className="loginform">
                <center>
                <h3 className='logintext'>Sign Up</h3>
                
                </center>
            
                <div className='orsignup'><h3 >Already registered? <Link to="/login" className="navE">Sign In</Link></h3></div>

            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name"></input>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <input type="password" name="cpassword" value={user.cpassword} onChange={handleChange}  placeholder="confirm Password" ></input>
           
            <center><b className='errmsg'>{errorMSG}</b></center>
            <Button variant="primary" type="submit" onClick={register}>
                Submit
            </Button>
            </Form>
        </center>
            
        </div>
    )
}
export default Signup;
