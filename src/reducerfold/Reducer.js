const reducer=(state,action)=>{
    if(action.type==="API_LOADING")
    {
        return{
            ...state,
            isLoading:true,
        };
    }
    if(action.type==="API_ERROR")
    {
        return{
            ...state,
            isLoading:true,
        };
    }
    if(action.type==="MY_API_DATA")
    {
        const allmen=action.payload.filter((curElem)=>{
            return curElem.__v===0;
        });
        console.log('allmen');
        console.log(allmen);
        return{
            ...state,
            isLoading:false,
            products:action.payload, // all data is present in products... i.e peoples data
            featureProd:allmen,
        }
        
    }
    
};


export default reducer;