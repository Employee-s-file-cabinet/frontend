import Login from '../../components/Login/Login';
import { loginSchema } from '../../utils/validation/LoginAndRestorePasswordValidation';

export default function AdminPage() {
  return (
    <section className="admin-page">
      <Login
        title="Добро пожаловать!"
        buttonLabel="Войти"
        flag="admin-login"
        schema={loginSchema}
      />
    </section>
  );
}
