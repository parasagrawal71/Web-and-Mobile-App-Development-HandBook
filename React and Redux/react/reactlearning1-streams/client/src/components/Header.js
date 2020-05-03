import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <Link to="/">Streamy</Link>
      </div>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
