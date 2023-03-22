import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMSG, setErrorMSG] = useState("");

  const handleChange = (e) => {
    // // name=e.target.name;
    // // value=e.target.value;

    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const register = (e) => {
    toast("button Clicked");
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      toast("Please fill all fields!");
      setErrorMSG("Fill all fields");

      return;
    }
    if (user.password !== user.cpassword) {
      setErrorMSG("password you are confirming is not same");

      return;
    }
    setErrorMSG("");

    console.log(user);
    console.log(`name is ${user.name}`);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        console.log(res);
        const peeps = res.user;
        updateProfile(peeps, {
          displayName: user.name,
          // disPlayemail: user.email
        });
        toast.success("Success Notification !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate("/login");
        console.log("registered");
      })
      .catch((err) => {
        // setErrorMSG(err.message);
        console.log(err.message);
        toast.error(err.message);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMSG("already registered");
        }
      });
  };

  return (
    <div>
      <center>
        <Form
          className="loginform  rounded p-5"
          style={{ width: "30rem", background: "rgba(0,0,0,0.6)" }}
        >
          <center>
            <h3 className="logintext text-white">Sign Up</h3>
          </center>

          <div className="d-flex align-items-center">
            <FaUser size={28} color={"white"} className="center pb-2" />
            <input
              type="text"
              name="name"
              value={user.name}
              className="w-100 p-2 mb-3 "
              onChange={handleChange}
              placeholder="Enter your name"
            ></input>
          </div>

          <div className="d-flex align-items-center">
            <FaEnvelope size={28} color={"white"} className="center pb-2" />
            <input
              type="text"
              name="email"
              value={user.email}
              className="w-100 p-2 mb-3"
              onChange={handleChange}
              placeholder="Enter your Email"
            ></input>
          </div>

          <div className="d-flex align-items-center">
            <FaLock size={28} color={"white"} className="center pb-2" />
            <input
              type="password"
              name="password"
              value={user.password}
              className="w-100 p-2 mb-3"
              onChange={handleChange}
              placeholder="Enter your Password"
            ></input>
          </div>

          <div className="d-flex align-items-center">
            <FaLock size={28} color={"white"} className="center pb-2" />
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              className="w-100 p-2 mb-3"
              onChange={handleChange}
              placeholder="confirm Password"
            ></input>
          </div>

          <div className='orsignup text-white d-flex justify-content-between ml-3 pl-3'>
            <p>Already registered? 
            </p>
            <p><Link to="/login" className="navE text-decoration-none">Sign In Instead</Link></p>
        </div>

          <center>
            <b className="errmsg">{errorMSG}</b>
          </center>
          <Button
            variant="primary"
            type="submit"
            className="w-75 p-2 mb-3 rounded-pill"
            onClick={register}
          >
            Sign Up
          </Button>
        </Form>
      </center>
    </div>
  );
}
export default Signup;
