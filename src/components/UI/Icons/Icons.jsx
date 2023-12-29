import React from 'react';
import '../../../assets/fontawesome-free-6.5.1-web/css/all.css';
import './Icons.scss';
import PropTypes from 'prop-types';

/**
 * Icons
 */
export const Icon = ({
  icon,
  theme,
  size,
  position,
  extraClass,
  onClick,
  onKeyDown,
  ...props
}) => (
  <span
    className={['icon', size, theme, position, extraClass].join(' ')}
    onClick={onClick}
    onKeyDown={onKeyDown}
    role="button"
    tabIndex={0}
  >
    <i className={['fas', icon].join(' ')} {...props} />
  </span>
);

Icon.propTypes = {
  /**
   * Icons from library Font Awesome (fa-home - home, fa-lock - lock, fa-envelope - mail, fa-phone - phone)
   */
  icon: PropTypes.string,
  /**
   * Icons color: '' - black, 'has-text-info' - blue, 'has-text-success' - green, 'has-text-warning' - yellow,
   * 'has-text-danger' - red
   */
  theme: PropTypes.oneOf([
    '',
    'has-text-info',
    'has-text-success',
    'has-text-warning',
    'has-text-danger',
  ]),
  /**
   * Button size: 'is-small' - small, '' - standard, 'is-medium' - medium, 'is-large' - big
   */
  size: PropTypes.oneOf(['is-small', '', 'is-medium', 'is-large']),
  /**
   * Location: '' - basic, 'is-left' - left, 'is-right' - right
   */
  position: PropTypes.oneOf(['', '', 'is-left', 'is-right']),
  /**
   * Additional class for icons styling
   */
  extraClass: PropTypes.string,
};

Icon.defaultProps = {
  icon: 'fa-phone',
  theme: '',
  size: '',
  position: '',
  extraClass: '',
};
