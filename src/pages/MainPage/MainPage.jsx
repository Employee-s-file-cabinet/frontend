import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <section className="main-page">
      <Link to="/signin">ВОЙТИ HR</Link>
      <Link to="/admin">ВОЙТИ АДМИНУ</Link>
      <Link to="/access-restore">ВОССТАНОВИТЬ ПАРОЛЬ</Link>
      <Link to="/success-sent-email">ССЫЛКА УСПЕШНО НАПРАВЛЕНА НА ПОЧТУ</Link>
      <Link to="/password-reset">ВВЕСТИ НОВЫЙ ПАРОЛЬ</Link>
      <Link to="/reset-success">ПАРОЛЬ ОБНОВЛЕН</Link>
      <Link to="/kartoteka_sotrudnikov">СОТРУДНИКИ</Link>
      <Link to="/departamenty">СОТРУДНИКИ И ДЕПАРТАМЕНТЫ</Link>
      <Link to="/struktura_kompanii">СТРУКТУРА КОМПАНИИ</Link>
      <Link to="/kartochka_sotrudnika">КАРТОЧКА СОТРУДНИКА</Link>
      <Link to="/novyyi_sotrudnik">СОЗДАТЬ НОВОГО СОТРУДНИКА</Link>
    </section>
  );
}
