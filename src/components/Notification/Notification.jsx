import { useNavigate } from 'react-router-dom';
import { MainButton } from '../UI/Buttons/MainButton';

export default function Notification({ buttonLabel, title, description }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (buttonLabel === 'Ввести') {
      navigate('/signin');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="notification">
      <h2 className="notification__title">{title}</h2>
      <p className="notification__description">{description}</p>
      <MainButton
        size="is-medium"
        theme="is-primary"
        extraClass="login__button"
        type="button"
        onClick={handleClick}
      >
        {buttonLabel}
      </MainButton>
    </div>
  );
}
