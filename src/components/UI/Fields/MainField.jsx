import React from 'react';
import './MainField.scss';
import PropTypes from 'prop-types';

/**
 * Main field
 */
export const MainField = ({
  theme,
  size,
  extraClass,
  type,
  placeholder,
  icon,
  children,
  focus,
  blur,
  register,
  errors,
  ...props
}) => (
  <div className="field">
    <p className={icon ? `control ${icon}` : ``}>
      <input
        type={type}
        placeholder={placeholder}
        className={['input', size, theme, extraClass].join(' ')}
        {...register}
        {...props}
        onFocus={focus}
        onBlur={blur}
      />
      {children}
    </p>
    {/* Error Text */}
    <p className="error-text">{errors}</p>
  </div>
);

MainField.propTypes = {
  /**
   * Field color: is-primary - green, is-link - blue, is-warning - yellow, is-danger - red
   */
  theme: PropTypes.oneOf(['is-primary', 'is-link', 'is-warning', 'is-danger']),
  /**
   * Field size: is-small - small, is-normal - standard, is-medium - medium, is-large - big
   */
  size: PropTypes.oneOf(['is-small', 'is-normal', 'is-medium', 'is-large']),
  /**
   * Additional class for field styling
   */
  extraClass: PropTypes.string,
  /**
   * Field style
   */
  type: PropTypes.oneOf(['email', 'password', 'text']),
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * The presence of an icon and its location in the input (has-icons-left, has-icons-right)
   */
  icon: PropTypes.string,
  /**
   * Nested element (icon)
   */
  children: PropTypes.node,
};

MainField.defaultProps = {
  theme: 'is-primary',
  size: 'is-normal',
  extraClass: '',
  type: 'email',
  placeholder: '',
  icon: '',
  children: null,
};
