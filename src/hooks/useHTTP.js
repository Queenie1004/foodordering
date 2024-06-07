import { useEffect, useState, useCallback } from "react";

async function sendingHttpRequest(url,config){
    const response = await fetch(url,config);
    const resData = await response.json();

    if (!response.ok){
        throw new Error(resData.message || 'Something went wrong, failed to send request');
    }

    return resData;
}

export default function useHTTP(url, config,initialData){
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    function clearData(){
        setData(initialData);
    }

   const sendingRequest = useCallback(
    async function sendingRequest(data){
    setIsLoading(true);

    try {
        const resData = await sendingHttpRequest(url, {...config, body: data});
        setData(resData);
    } catch(error){
        setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
   },[url, config])

   useEffect(()=>{
    if(config && (config.method === 'GET' || !config.method) || !config){
        sendingRequest();
    }
   },[sendingRequest, config]);

   return{
    data,
    isLoading,
    error,
    sendingRequest,
    clearData,
   }
    
}