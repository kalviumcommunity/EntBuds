import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cinebuds from "./entbuds.png";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="left">
            <Link to="/">
              <img src={cinebuds} alt="logo" className="logo"></img>
            </Link>

            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <span>Popular</span>
            </Link>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
              <span>Top Rated</span>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="right">
              <Button
                variant="contained"
                startIcon={<PersonIcon />}
                size="small"
                style={{
                  fontSize: "1.2rem",
                  background: "red",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={logout}
              >
                Log Out {user.name}
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button
                variant="contained"
                startIcon={<PersonIcon />}
                size="small"
                style={{
                  fontSize: "1.2rem",
                  background: "red",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={loginWithRedirect}
              >
                Login
              </Button>
            </div>
          )
          }
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
