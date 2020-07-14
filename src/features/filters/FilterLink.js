import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "./filtersSlice";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = {
  setVisibilityFilter
};

const Link = ({ active, filter, children, setVisibilityFilter }) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
