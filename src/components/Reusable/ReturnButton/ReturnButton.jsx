import { useNavigate } from "react-router-dom";

function ReturnButton () {
  const navigate = useNavigate()

  return (
    <button className="button is-primary" onClick={() => navigate(-1)}>Назад</button>
  )
}

export default ReturnButton;
