import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import Topography from "@material-ui/core/Topography";

const MyLink = ({ active, children, onClick }) => {
  if (active) {
    return <Topography>{children}</Topography>;
  }

  return (
    <Link component="button" variant="body2" onClick={onClick}>
      {children}
    </Link>
  );
};

MyLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MyLink;
