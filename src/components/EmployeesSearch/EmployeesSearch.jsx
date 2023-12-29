import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';
import { MainButton } from '../UI/Buttons/MainButton';
import { searchSchema } from '../../utils/ValidationSchema';

export default function EmployeesSearch({
  setIsSearchFiltration,
  isSearchFiltration,
}) {
  const [isFocusedSearch, setIsFocusedSearch] = useState(false);
  const [isInputIconPosition, setInputIconPosition] =
    useState('has-icons-left');

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
    mode: 'onChange',
  });

  const handleFocus = () => {
    setIsFocusedSearch(true);
    setInputIconPosition('has-icons-right');
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocusedSearch(false);
      setInputIconPosition('has-icons-left');
    }, 100);
  };

  const handleClickIconReset = () => {
    resetField('search');
  };

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  const handleClickFiltrationTag = (event) => {
    switch (event.target.textContent) {
      case 'Отделы':
        setIsSearchFiltration('departments');
        break;
      case 'Орг.структура':
        setIsSearchFiltration('structures');
        break;
      case 'Орг.структура полная':
        setIsSearchFiltration('full-structures');
        break;
      default:
        setIsSearchFiltration('alphabet');
        break;
    }
  };

  return (
    <form className="employees-search" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="employees-search__fieldset">
        <MainField
          type="text"
          theme=""
          size="is-normal"
          extraClass="is-fullwidth"
          placeholder="Поиск"
          icon={isInputIconPosition}
          focus={handleFocus}
          blur={handleBlur}
          register={register('search')}
          errors={errors.search?.message}
        >
          {isFocusedSearch ? (
            <span>
              <Icon
                icon="fa-magnifying-glass"
                size="is-small"
                position="is-right"
                extraClass="icon__clickable"
                onClick={handleSubmit(onSubmit)}
              />
              <Icon
                icon="fa-xmark"
                size="is-small"
                position="is-right"
                extraClass="icon_margined icon__clickable"
                onClick={handleClickIconReset}
              />
            </span>
          ) : (
            <Icon
              icon="fa-magnifying-glass"
              size="is-small"
              position="is-left"
            />
          )}
        </MainField>
      </fieldset>
      <div className="employees-search__filter-container buttons has-addons">
        <MainButton
          size="is-normal"
          theme={`${isSearchFiltration === 'alphabet' ? 'is-primary' : ''}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          От А до Я
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${isSearchFiltration === 'departments' ? 'is-primary' : ''}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          Отделы
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${isSearchFiltration === 'structures' ? 'is-primary' : ''}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          Орг.структура
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${
            isSearchFiltration === 'full-structures' ? 'is-primary' : ''
          }`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          Орг.структура полная
        </MainButton>
      </div>
    </form>
  );
}
