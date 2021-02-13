import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <React.Fragment>
      <Typography align="center" variant="body1" display="inline">
        {"Show: "}
      </Typography>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

      <Typography align="center" variant="body1" display="inline">
        {", "}
      </Typography>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <Typography variant="body1" display="inline">
        {", "}
      </Typography>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </React.Fragment>
  );
};

export default Footer;
