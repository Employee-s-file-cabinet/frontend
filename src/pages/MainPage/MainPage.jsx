import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <section className="main-page">
      <Link to="/signin">ВОЙТИ HR</Link>
      <Link to="/admin">ВОЙТИ АДМИНУ</Link>
      <Link to="/accessrestore">ВОССТАНОВИТЬ ПАРОЛЬ</Link>
      <Link to="/employees">СОТРУДНИКИ</Link>
      <Link to="/departments">СОТРУДНИКИ И ДЕПАРТАМЕНТЫ</Link>
      <Link to="/company-structure">СТРУКТУРА КОМПАНИИ</Link>
      <Link to="/employee">КАРТОЧКА СОТРУДНИКА</Link>
      <Link to="/newemployee">СОЗДАТЬ НОВОГО СОТРУДНИКА</Link>
    </section>
  );
}
