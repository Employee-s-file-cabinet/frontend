import React from 'react';
import Login from '../../components/Login/Login';

export default function AccessRestorePage() {
  return (
    <section className="access-restore-page">
      <Login
        title="Создайте новый пароль"
        buttonLabel="Сохранить"
        flag="access-restore"
      />
    </section>
  );
}
