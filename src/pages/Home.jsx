import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {

const [ username , setUsername] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim()) {
      navigate(`/user/${username}`);
    }
}

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark text-white">

    <div className="text-center">

      <h1 className="display-4 fw-bold">CODEPULSE</h1>

      <p className="text-secondary mb-4"> Analyze your LeetCode journey</p>

      <form className="d-flex justify-content-center gap-2"
       onSubmit={handleSubmit}>

        <input
        className="form-control"
        style={{ maxWidth: "400px" }}
        type="text" 
        placeholder='Enter Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <button  className="btn btn-primary" type="submit"> <i className="bi bi-search"></i></button>
      </form>

    </div>  
    </div>
  ); 
};

export default Home;