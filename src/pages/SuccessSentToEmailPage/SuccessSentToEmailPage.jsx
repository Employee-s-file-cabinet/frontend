import React from 'react';
import { useLocation } from 'react-router-dom';
import Notification from '../../components/Notification/Notification';

export default function SuccessSentToEmailPage() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <section className="reset-success-page">
      <Notification
        buttonLabel="Назад"
        title="Ссылка успешно отправлена"
        description={`Отправили ссылку для смены пароля на ${email}. Если письмо не пришло, проверьте папку «Спам».`}
      />
    </section>
  );
}
