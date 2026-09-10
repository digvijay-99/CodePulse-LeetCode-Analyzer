import React from 'react';
import Loader from './Loader';
import useFetch from '../hooks/useFetch';

const ContestStats = (props) => {
  const url = `https://alfa-leetcode-api.onrender.com/${props.Contstats}/contest/history`;

  const {data , loading , error} = useFetch(url);

  if(loading){
    return <Loader/>
  }
  if(error || !data || !data.contestHistory){
    return <div className="text-danger">NO DATA AVAILABLE</div>
  }


 return (<div className="p-4 rounded-4 shadow-sm text-white" style={{ backgroundColor: "#22272e", border: "1px solid #30363d" }}>

    <h6 className="mb-4 text-secondary">Contest History</h6>
     
    <div className="d-flex flex-column">
    {[...data.contestHistory].reverse().slice(0, 5).map((Contest, index) => {
       
        return (
            <div key={index}
             className ="d-flex justify-content-between align-items-center py-2"
             style={{ borderColor: '#30363d' }}
            >
                <span className="fw-medium text-light" style={{ fontSize: '15px' }}>{Contest.contest.title}</span>
                <span className="fw-bold" style={{ color: '#00b8a3', fontSize: '14px' }}>{Contest.problemsSolved}</span>
            </div>
        );
    })}
    </div>
</div> 
  )
};

export default ContestStats;