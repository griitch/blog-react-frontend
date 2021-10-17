import React from "react";
import Container from "./Container.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <Container>
      <h1>
        <Link to="/">{props.brand}</Link>
      </h1>
      <HeaderLinks>
        {props.links.map((link) => (
          <li key={uniqid()}>
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </HeaderLinks>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  // children : PropTypes.node.isRequired,
  brand: PropTypes.string,
  links: PropTypes.array,
};
