import React, { useState, useEffect } from "react";
import Container from "./Container.jsx";
import HeaderLinksList from "./HeaderLinksList.jsx";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import HeaderLinksDropDown from "./HeaderLinksDropDown/index.jsx";

function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const foo = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", foo);

    return () => {
      window.removeEventListener("resize", foo);
    };
  }, []);

  const HeadersLinks = width > 600 ? HeaderLinksList : HeaderLinksDropDown;
  return (
    <Container>
      <h1>
        <Link to="/">{props.brand}</Link>
      </h1>
      <HeadersLinks>
        {props.links.map((link) => (
          <li key={uniqid()}>
            <Link to={`/${link}`}>{link}</Link>
          </li>
        ))}
      </HeadersLinks>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  brand: PropTypes.string,
  links: PropTypes.array,
};
