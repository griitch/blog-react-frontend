import PropTypes from "prop-types";
import React, { useState } from "react";
import Container from "./Container.jsx";

function HeaderLinksDropDown(props) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Container>
      <svg
        onClick={() => setCollapsed((old) => !old)}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      {!collapsed && props.children}
    </Container>
  );
}
HeaderLinksDropDown.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HeaderLinksDropDown;
