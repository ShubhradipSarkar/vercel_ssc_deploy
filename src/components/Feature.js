import React from "react";
import {useProductContext} from "../context/Peopledata"

function Feature(){
    const {isLoading,feature}=useProductContext();
    console.log('feature');
    console.log(feature);
    return(
        <div>
            lolol
        </div>
    );
}

export default Feature;