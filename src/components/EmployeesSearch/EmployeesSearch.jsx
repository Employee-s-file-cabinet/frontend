import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';
import { MainButton } from '../UI/Buttons/MainButton';
import { searchSchema } from '../../utils/validation/LoginAndRestorePasswordValidation';

export default function EmployeesSearch({
  setSearchFiltration,
  searchFiltration,
  setSearchQuery,
}) {
  const [isFocusedSearch, setIsFocusedSearch] = useState(false);
  const inputIconPosition = isFocusedSearch
    ? 'has-icons-right'
    : 'has-icons-left';
  const navigate = useNavigate();

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
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocusedSearch(false);
    }, 100);
  };

  const handleClickIconReset = () => {
    resetField('search');
    setSearchQuery('');
  };

  function onSubmit(data) {
    setSearchQuery(data.search);
  }

  const handleClickFiltrationTag = (event) => {
    event.preventDefault();
    switch (event.target.textContent) {
      case 'Отделы':
        setSearchFiltration('departments');
        navigate(`/employees/departments/1`);
        break;
      case 'Орг.структура':
        navigate(`/employees/structures/1`);
        setSearchFiltration('structures');
        break;
      case 'Орг.структура полная':
        navigate(`/employees/full-structures/1`);
        setSearchFiltration('full-structures');
        break;
      default:
        navigate(`/employees/alphabet/1`);
        setSearchFiltration('alphabet');
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
          icon={inputIconPosition}
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
          theme={`${searchFiltration === 'alphabet' ? '' : 'is-light'}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          От А до Я
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${searchFiltration === 'departments' ? '' : 'is-light'}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          Отделы
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${searchFiltration === 'structures' ? '' : 'is-light'}`}
          extraClass=""
          type="button"
          onClick={handleClickFiltrationTag}
        >
          Орг.структура
        </MainButton>
        <MainButton
          size="is-normal"
          theme={`${searchFiltration === 'full-structures' ? '' : 'is-light'}`}
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
