import React from 'react';
import PropTypes from 'prop-types';
import './SigninBtn.scss';

/**
 * Кнопка для подтвердждения авторизации
 */

export const SigninBtn = ({ theme, size, label, ...props }) => {
  const themeClass = `signin-btn_theme_${theme}`;
  const sizeClass = `signin-btn_size_${size}`;

  return (
    <button
      type="button"
      className={['signin-btn', sizeClass, themeClass].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

SigninBtn.propTypes = {
  /**
   * Цвет кнопки
   */
  theme: PropTypes.oneOf(['purple', 'green', 'grey']),
  /**
   * Размер кнопки
   */
  size: PropTypes.oneOf(['s', 'l', 'xl']),
  /**
   * Надпись на кнопке
   */
  label: PropTypes.string.isRequired,
};

SigninBtn.defaultProps = {
  theme: 'purple',
  size: 'l',
};
