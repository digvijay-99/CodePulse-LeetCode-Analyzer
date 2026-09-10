import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import NotFound from "../pages/NotFound";

const UserInfo = (props) => {

    const url = `https://alfa-leetcode-api.onrender.com/${props.info}`
    const {data , loading ,error} = useFetch(url)

    if(loading){
        return <Loader></Loader>
    }
    if(error || !data){
        return <NotFound/>
    }
    return (
        <div className="d-flex align-items-center p-3 "
            style={{
            backgroundColor: "#22272e",
            border: "1px solid #333638",
        }}>
            <img
            className="rounded-circle"
            style={{
            width: "55px",
            height: "55px",
            objectFit: "cover", 
            }}
            src={data.avatar} alt="DP" />

            <div className="ms-3">
               <h5 className="mb-0 fw-bold text-white">
                Username : {data.username || data.name}
               </h5>
               <small className="text-secondary">Rank: {data.ranking}</small>
            </div>
        </div>

        
    )
    
};

export default UserInfo;