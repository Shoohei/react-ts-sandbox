import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

const MyLink = ({ active, children, onLinkClicked }) => {
  return (
    <Link
      align="center"
      color={active ? "secondary" : ""}
      variant="body1"
      style={{ cursor: "pointer" }}
      onClick={onLinkClicked}
    >
      {children}
    </Link>
  );
};

MyLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onLinkClicked: PropTypes.func.isRequired
};

export default MyLink;
