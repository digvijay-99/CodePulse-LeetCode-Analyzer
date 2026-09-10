import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';



const RecentSubmissions = (props) => {
    const url =  `https://alfa-leetcode-api.onrender.com/${props.submission}/acSubmission`;
    
    const { data, loading, error } = useFetch(url);


    if (loading) {
    return <Loader />;
    }

    if(error || !data){
        return <div className="text-danger p-3">Data not Found</div>
    }

  return (<div className="p-4 rounded-4 shadow-sm text-white" style={{ backgroundColor: "#22272e", border: "1px solid #30363d" }}>

    <h6 className="mb-4 text-secondary">Recent submissions</h6>
     
    <div className="d-flex flex-column">
    {data.submission.slice(0, 5).map((submission, index) => {
       
        return (
            <div key={index}
             className ="d-flex justify-content-between align-items-center py-2"
             style={{ borderColor: '#30363d' }}
            >
                <span className="fw-medium text-light" style={{ fontSize: '15px' }}>{submission.title}</span>
                <span className="fw-bold" style={{ color: '#00b8a3', fontSize: '14px' }}>{submission.statusDisplay}</span>
            </div>
        );
    })}
    </div>
</div> 
  )
};

export default RecentSubmissions;