import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res){
                setError(true);
                return null;
            }
            return res.json();
        })
        .then((res)=>{
            if(res){
                setData(res);
            }
        })
        .catch(()=>{
            setData(null);
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[url])
    
  return {data,loading,error} ;
};

export default useFetch;