import React from 'react';
import './MainButton.scss';
import PropTypes from 'prop-types';

/**
 * Main button
 */
export const MainButton = ({
  theme,
  size,
  disabled,
  extraClass,
  type,
  ...props
}) => (
  <button
    type={type}
    className={['button', size, theme, extraClass].join(' ')}
    {...props}
    disabled={disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

MainButton.propTypes = {
  /**
   * Button color: is-primary - green, is-link - blue, is-warning - yellow, is-danger - red
   */
  theme: PropTypes.oneOf([
    'is-primary',
    'is-link',
    'is-warning',
    'is-danger',
    '',
  ]),
  /**
   * Button size: is-small - small, is-normal - standard, is-medium - medium, is-large - big
   */
  size: PropTypes.oneOf(['is-small', 'is-normal', 'is-medium', 'is-large']),
  /**
   * Button availability: active or not
   */
  disabled: PropTypes.bool,
  /**
   * Additional class for button styling
   */
  extraClass: PropTypes.string,
  /**
   * Button type
   */
  type: PropTypes.oneOf(['submit', 'button']),
};

MainButton.defaultProps = {
  theme: 'is-primary',
  size: 'is-normal',
  disabled: false,
  extraClass: '',
  type: 'button',
};
