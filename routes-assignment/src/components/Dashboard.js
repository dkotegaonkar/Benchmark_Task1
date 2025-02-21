import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleClick}>About</button>
    </>
  );
};

export default Dashboard;
