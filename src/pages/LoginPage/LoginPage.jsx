import React from 'react';
import Login from '../../components/Login/Login';

export default function LoginPage() {
  return (
    <section className="login-page">
      <Login title="Добро пожаловать!" buttonLabel="Войти" flag="login" />
    </section>
  );
}
