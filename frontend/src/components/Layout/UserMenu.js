import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
        <div className="d-flex justify-content-center "> 
        <img className='p-2 profile-pic' alt="profile" src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqvJlIX64Idk8t-cSpuQVWH4YyVzhzabv6V9lcuub-1lPpOYOrUs2YrfwEbyq3POSyuI&usqp=CAU'/>
           </div>
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
