import { useState } from "react";

function useHttp(requestFunction, reqType) {
  const [authState, setAuthState] = useState({});

  const sendRequest = async function (requestData) {
    const responseData = await requestFunction(requestData);
    
    if(responseData.error){
      setAuthState({status: 'error', data: responseData.error.message});
    }
    else{
      setAuthState({ status: "completed", data: responseData });
      
    }
      
  
}


  return { sendRequest, authState};
}

export default useHttp;
