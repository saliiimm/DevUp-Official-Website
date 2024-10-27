import monkeyGif from '../../assets/monkey-gif.gif';
import { useNavigate } from 'react-router-dom';
import './Error404.css';
const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-404-page">
      <img src={monkeyGif} alt="monkeyGif" />
      <p>Rak(i) Ghalet(a) wli larriere tcho</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Error404;
