import React from 'react';
import PropTypes from 'prop-types';
import { Text as ReactNativeText } from 'react-native';

import styles from './styles';

const Text = ({ children, style, ...props }) => (
  <ReactNativeText style={[styles.text, style]} {...props}>
    {children}
  </ReactNativeText>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: ReactNativeText.propTypes.style,
};

Text.defaultProps = {
  style: {},
};

export default Text;
