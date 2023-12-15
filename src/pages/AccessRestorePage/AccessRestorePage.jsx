import React from 'react';
import Login from '../../components/Login/Login';
import { restorePasswordSchema } from '../../utils/ValidationSchema';

export default function AccessRestorePage() {
  return (
    <section className="access-restore-page">
      <Login
        title="Забыли пароль?"
        buttonLabel="Отправить"
        flag="restore"
        schema={restorePasswordSchema}
      />
    </section>
  );
}
