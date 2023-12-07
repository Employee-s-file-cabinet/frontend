import { useNavigate } from 'react-router-dom';

function ReturnButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className="button is-primary" onClick={handleClick}>
      На Главную
    </button>
  );
}

export default ReturnButton;
