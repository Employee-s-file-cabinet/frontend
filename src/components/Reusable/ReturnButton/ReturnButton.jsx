import { useNavigate } from 'react-router-dom';

function ReturnButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Link to={navigate('/')} className="button is-primary">
        На Главную
      </Link>
      <button className="button is-primary is-hovered">TEST</button>
    </div>
  );
}

export default ReturnButton;
