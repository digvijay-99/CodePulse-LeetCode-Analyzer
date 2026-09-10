
import React from 'react';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';

const SolvedStats = (props) => {
  const url = `https://alfa-leetcode-api.onrender.com/${props.stats}/solved`;

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return (
      <div className="text-danger">
        Failed to Load the Stats ...
      </div>
    );
  }

  const colors = {
    easy: '#00b8a3',
    medium: '#ffc01e',
    hard: '#ff375f',
    bg: '#22272e',
    trackBg: '#3e3e3e',
  };

  return (
    <div
      className="p-4 shadow-sm text-white "
      style={{
        backgroundColor: colors.bg,
        border: '1px solid #30363d',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0 text-secondary">Total Problems</h3>

        <h3 className="mb-0 fw-bold">
          {data.solvedProblem}
        </h3>
      </div>

      <div className="d-flex flex-column gap-3">

       
        <div className="d-flex align-items-center">
          <span
            style={{
              width: '60px',
              color: colors.easy,
              fontSize: '18px',
            }}
          >
            Easy
          </span>

          <div
            className="progress flex-grow-1 mx-3"
            style={{
              height: '6px',
              backgroundColor: colors.trackBg,
            }}
          >
            <div
              className="progress-bar rounded-pill"
              style={{
                width: `${(data.easySolved / 963) * 100}%`,
                backgroundColor: colors.easy,
              }}
            ></div>
          </div>

          <span className="text-secondary fw-bold" style={{ minWidth: '80px', textAlign: 'right' , fontSize:'18px' }}>{data.easySolved}/963</span>
        </div>

        <div className="d-flex align-items-center">
          <span style={{ width: '60px', color: colors.medium, fontSize: "18px" }}>Medium</span>

          <div
            className="progress flex-grow-1 mx-3"
            style={{
              height: '6px',
              backgroundColor: colors.trackBg,
            }}
          >
            <div
              className="progress-bar rounded-pill"
              style={{
                width: `${(data.mediumSolved / 2111) * 100}%`,
                backgroundColor: colors.medium,
              }}
            ></div>
          </div>
    
          <span className="text-secondary fw-bold" style={{ minWidth: '80px', textAlign: 'right', fontSize:'18px' }}>{data.mediumSolved}/{ 2111}</span>
        </div>

        <div  className="d-flex align-items-center">
          <span style={{ width: '60px', color: colors.hard, fontSize: "18px" }}>Hard</span>
        

           <div
            className="progress flex-grow-1 mx-3"
            style={{
              height: '6px',
              backgroundColor: colors.trackBg,
            }}
          >
            <div
              className="progress-bar rounded-pill"
              style={{
                width: `${(data.hardSolved / 973) * 100}%`,
                backgroundColor: colors.hard,
              }}
            ></div>
          </div>

          <span className="text-secondary fw-bold" style={{ minWidth: '80px', textAlign: 'right', fontSize:'18px' }}>{data.hardSolved}/973</span>

        </div>
      </div>
    </div>
  );
};

export default SolvedStats;

