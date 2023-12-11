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
    {/* ТЕКСТ ОШИБКИ */}
    <p className="error-text">{errors}</p>
  </div>
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
  type: PropTypes.oneOf(['email', 'password', 'text']),
  /**
   * Текст плейсхолдера
   */
  placeholder: PropTypes.string,
  /**
   * Наличие иконки и ее расположение в инпуте (has-icons-left, has-icons-right)
   */
  icon: PropTypes.string,
  /**
   * Вложенный элемент (иконка)
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
