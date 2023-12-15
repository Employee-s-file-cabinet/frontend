import React from 'react';
import Login from '../../components/Login/Login';
import { resetPasswordSchema } from '../../utils/ValidationSchema';

export default function AccessRestorePage() {
  return (
    <section className="access-restore-page">
      <Login
        title="Создайте новый пароль"
        buttonLabel="Сохранить"
        flag="reset"
        schema={resetPasswordSchema}
      />
    </section>
  );
}
