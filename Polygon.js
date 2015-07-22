/**
 * @providesModule Path
 * @flow
 */

'use strict';

var React = require('react-native');

var {
  View,
  PropTypes,
} = React;

var Polygon = React.createClass({
  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
    points: PropTypes.string,
    transform: PropTypes.string,
  },

  render() {
    return <View />;
  },
});

module.exports = Polygon;
