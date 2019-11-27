/*eslint-disable no-unused-vars*/
import PropTypes from 'prop-types';

import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

class Body extends Component {
  render() {
    const {
      props: {
        children,
        body = 'no body'
        },
      } = this;
    if (children) {
      return children;
    } else {
      return (<span>{body}</span>);
    }
  }
}

Body.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
};

export default Body;
