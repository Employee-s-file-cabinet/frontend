import { useNavigate, Link } from 'react-router-dom';

function ReturnButton() {
  const navigate = useNavigate();

  return (
    <Link to={navigate('/')} className="button is-primary">
      На Главную
    </Link>
  );
}

export default ReturnButton;
