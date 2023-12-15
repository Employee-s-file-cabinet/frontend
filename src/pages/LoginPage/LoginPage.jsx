import React from 'react';
import Login from '../../components/Login/Login';
import { loginSchema } from '../../utils/ValidationSchema';

export default function LoginPage() {
  return (
    <section className="login-page">
      <Login
        title="Добро пожаловать!"
        buttonLabel="Войти"
        flag="login"
        schema={loginSchema}
      />
    </section>
  );
}
