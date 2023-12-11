import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';

export default function AccessRestorePage() {
  return (
    <section className="access-restore-page">
      <Logo />
      <Login
        title="Создайте новый пароль"
        buttonLabel="Сохранить"
        flag="access-restore"
      />
      <Footer />
    </section>
  );
}
