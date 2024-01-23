import React from 'react';
import Notification from '../../components/Notification/Notification';

export default function ResetSuccessPage() {
  return (
    <section className="reset-success-page">
      <Notification
        buttonLabel="Ввести"
        title="Пароль обновлён"
        description="Для входа в приложение необходимо ввести логин и новый пароль на странице входа."
      />
    </section>
  );
}
