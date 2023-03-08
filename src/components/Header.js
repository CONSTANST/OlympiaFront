import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {slide as Menu} from "react-burger-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <header>
      <nav className={menuOpen ? "menu-open" : "menu-closed"}>
        <div className="menu-wrapper">
          <Menu
            isOpen={menuOpen}
            onStateChange={handleMenuStateChange}
            className="bm-menu"
          >
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/event/1"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Event/:id
            </NavLink>
            <NavLink
              to="/tickets"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Ticket Search
            </NavLink>
            <NavLink
              to="/modifyEvent"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Modify Event
            </NavLink>
            <NavLink
              to="/deleteEvent"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Delete Event
            </NavLink>
            <NavLink
              to="/deleteTicket"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Delete Ticket
            </NavLink>
            <NavLink
              to="/ticketsBook/1"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Ticket Book/:id
            </NavLink>
            <NavLink
              to="/eventToPublish"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Event To Publish
            </NavLink>
            <NavLink
              to="/events/availabilities"
              activeClassName="active"
              className="bm-menu-item"
              onClick={handleMenuClick}
            >
              Event List
            </NavLink>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
