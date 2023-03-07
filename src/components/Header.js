import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div style={{display: "flex", flexDirection: "column"}}>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
          <NavLink to="/event/1" activeClassName="active">
            Event/:id
          </NavLink>
          <NavLink to="/tickets" activeClassName="active">
            Ticket Search
          </NavLink>
          <NavLink to="/modifyEvent" activeClassName="active">
            Modify Event
          </NavLink>
          <NavLink to="/deleteEvent" activeClassName="active">
            Delete Event
          </NavLink>
          <NavLink to="/deleteTicket" activeClassName="active">
            Delete Ticket
          </NavLink>
          <NavLink to="/ticketsBook/1" activeClassName="active">
            Ticket Book/:id
          </NavLink>
          <NavLink to="/eventToPublish" activeClassName="active">
            Event To Publish
          </NavLink>
          <NavLink to="/events/availabilities" activeClassName="active">
            Event List
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
