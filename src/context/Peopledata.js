import { createContext,useContext,useEffect,useReducer } from "react";
import axios from "axios";
import reducer from "../reducerfold/Reducer";

const AppContext=createContext();

const API="http://localhost:4000/mens";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProd:[]
};
const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    const getMen=async(url)=>{
        dispatch({type:"API_LOADING"});
        try
        {
            const res=await axios.get(url);
            const prod=await res.data;
            dispatch({type:"MY_API_DATA", payload:prod});
            console.log(prod);
        }
        catch(error)
        {
            dispatch({type:"API_ERROR"});
        }
        

        console.log('state=');
        console.log(state);
    };
    useEffect(()=>{
        getMen(API);
    },[]);
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
};
//own hook
const useProductContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};