import React from 'react';
import { auth } from "./firebase";
// import Group from "./Group";
// import './style.css'
import { useEffect, useState } from "react";

function LoginName(){

    const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            setUserName(user.displayName);
            // setUseremail(user.disPlayemail);
          } else setUserName("p");
          console.log(user);
        });
      }, []);
    return(
        <div>
            <h3 className='nameatfront'>Hello  {userName} !</h3>
        </div>
    )
}

export default LoginName;