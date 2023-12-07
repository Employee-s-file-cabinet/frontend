import React from 'react';
import './MainButton.scss';
import PropTypes from 'prop-types';

/**
 * Кнопка главная
 */

export const MainButton = ({ theme, size, label, disabled, ...props }) => (
  <button
    type="button"
    className={['button', size, theme].join(' ')}
    {...props}
    disabled={disabled}
    onClick={props.onClick}
  >
    {label}
  </button>
);

MainButton.propTypes = {
  /**
   * Цвет кнопки: is-link - синий, is-warning - желтый, is-danger - красный
   */
  theme: PropTypes.oneOf(['is-link', 'is-warning', 'is-danger']),
  /**
   * Размер кнопки: is-small - маленький, is-normal - средний, is-large - большой
   */
  size: PropTypes.oneOf(['is-small', 'is-normal', 'is-large']),
  /**
   * Надпись на кнопке
   */
  label: PropTypes.string.isRequired,
  /**
   * Доступность кнопки: активна или нет
   */
  disabled: PropTypes.bool,
};

MainButton.defaultProps = {
  theme: 'is-warning',
  size: 'is-normal',
  disabled: false,
};
