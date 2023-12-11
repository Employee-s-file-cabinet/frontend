import React from 'react';
import '../../../assets/fontawesome-free-6.5.1-web/css/all.css';
import './Icons.scss';
import PropTypes from 'prop-types';

/**
 * Иконки
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
    className={[
      'icon',
      'icon__clickable',
      size,
      theme,
      position,
      extraClass,
    ].join(' ')}
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
   * Иконка из библиотеки Font Awesome (fa-home - дом, fa-lock - замок, fa-envelope - письмо, fa-phone - телефон)
   */
  icon: PropTypes.string,
  /**
   * Цвет поля: '' - черный, 'has-text-info' - синий, 'has-text-success' - зеленый, 'has-text-warning' - желтый,
   * 'has-text-danger' - красный
   */
  theme: PropTypes.oneOf([
    '',
    'has-text-info',
    'has-text-success',
    'has-text-warning',
    'has-text-danger',
  ]),
  /**
   * Размер поля: 'is-small' - маленький, '' - стандартный, 'is-medium' - средний, 'is-large' - большой
   */
  size: PropTypes.oneOf(['is-small', '', 'is-medium', 'is-large']),
  /**
   * Расположение: '' - по умолчанию, 'is-left' - слева, 'is-right' - справа
   */
  position: PropTypes.oneOf(['', '', 'is-left', 'is-right']),
  /**
   * Дополнительный класс для стилизации иконки
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
