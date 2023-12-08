import React from 'react';
import './MainButton.scss';
import PropTypes from 'prop-types';

/**
 * Кнопка главная
 */

export const MainButton = ({
  theme,
  size,
  label,
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
    {label}
  </button>
);

MainButton.propTypes = {
  /**
   * Цвет кнопки: is-primary - зеленый, is-link - синий, is-warning - желтый, is-danger - красный
   */
  theme: PropTypes.oneOf(['is-primary', 'is-link', 'is-warning', 'is-danger']),
  /**
   * Размер кнопки: is-small - маленький, is-normal - стандартный, is-medium - средний, is-large - большой
   */
  size: PropTypes.oneOf(['is-small', 'is-normal', 'is-medium', 'is-large']),
  /**
   * Надпись на кнопке
   */
  label: PropTypes.string.isRequired,
  /**
   * Доступность кнопки: активна или нет
   */
  disabled: PropTypes.bool,
  /**
   * Дополнительный класс для стилизации кнопки
   */
  extraClass: PropTypes.string,
  /**
   * Тип кнопки
   */
  type: PropTypes.oneOf(['submit', 'button']),
};

MainButton.defaultProps = {
  theme: 'is-warning',
  size: 'is-normal',
  disabled: false,
  extraClass: '',
  type: 'button',
};
