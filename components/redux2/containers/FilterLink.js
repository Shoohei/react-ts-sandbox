import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import MyLink from "../components/MyLink";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLinkClicked: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLink);
