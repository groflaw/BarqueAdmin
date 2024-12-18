import React from "react";
import { Link, Outlet } from "react-router-dom"; 

const Guest = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Guest;
