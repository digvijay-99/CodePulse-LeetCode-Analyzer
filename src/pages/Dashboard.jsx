import React from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import SolvedStats from '../components/SolvedStats';
import RecentSubmissions from '../components/RecentSubmissions';
import ContestStats from '../components/ContestStats'

const Dashboard = () => {
  const { username } = useParams();

  return (
    
    <div className="container py-4"> 
      
      
      <div className="row justify-content-center">
        
        
        <div className="col-12 col-md-10 col-lg-7"> 
          
         
          <UserInfo info={username} />

          
          <div className="mt-4">
            <SolvedStats stats={username} />
          </div>

          <div className="mt-4">
            <RecentSubmissions submission={username} />
          </div>

          <div className="mt-4">
            <ContestStats Contstats={username} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;