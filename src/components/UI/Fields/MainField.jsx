import React from 'react';
import './MainField.scss';
import PropTypes from 'prop-types';

/**
 * Основное поле ввода
 */

export const MainField = ({
  theme,
  size,
  extraClass,
  type,
  placeholder,
  ...props
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={['input', size, theme, extraClass].join(' ')}
    {...props}
  />
);

MainField.propTypes = {
  /**
   * Цвет поля: is-primary - зеленый, is-link - синий, is-warning - желтый, is-danger - красный
   */
  theme: PropTypes.oneOf(['is-primary', 'is-link', 'is-warning', 'is-danger']),
  /**
   * Размер поля: is-small - маленький, is-normal - стандартный, is-medium - средний, is-large - большой
   */
  size: PropTypes.oneOf(['is-small', 'is-normal', 'is-medium', 'is-large']),
  /**
   * Дополнительный класс для стилизации кнопки
   */
  extraClass: PropTypes.string,
  /**
   * Тип поля
   */
  type: PropTypes.oneOf(['email', 'password']),
  /**
   * Текст плейсхолдера
   */
  placeholder: PropTypes.string,
};

MainField.defaultProps = {
  theme: 'is-primary',
  size: 'is-normal',
  extraClass: '',
  type: 'email',
  placeholder: '',
};
