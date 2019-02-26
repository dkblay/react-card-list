import React, { Component } from "react";
import PropTypes from "prop-types";
import PaginationItem from "../components/PaginationItem";

class Pagination extends Component {
  state = {
    selected: 1
  };

  onPaginate = selected => {
    this.setState({ selected });
    this.props.onClick(selected);
  };
  renderItems() {
    const { total, size } = this.props;
    const count = Math.ceil(total / size);

    return Array.from({ length: count }, (v, i) => {
      const data = i + 1;
      return (
        <PaginationItem
          key={i}
          selected={this.state.selected}
          data={data}
          onClick={this.onPaginate}
        />
      );
    });
  }

  render() {
    return <ul className="pagination">{this.renderItems()}</ul>;
  }
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Pagination;
