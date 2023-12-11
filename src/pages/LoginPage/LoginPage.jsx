import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';

export default function LoginPage() {
  return (
    <section className="login-page">
      <Logo />
      <Login title="Добро пожаловать!" buttonLabel="Войти" flag="login" />
      <Footer />
    </section>
  );
}
