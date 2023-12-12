import Login from '../../components/Login/Login';

export default function AdminPage() {
  return (
    <section className="admin-page">
      <Login title="Добро пожаловать!" buttonLabel="Войти" flag="admin-login" />
    </section>
  );
}
