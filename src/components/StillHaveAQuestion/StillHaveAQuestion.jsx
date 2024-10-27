import './StillHaveAQuestion.css';
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa';

const StillHaveAQuestion = () => {
  return (
    <section className="still-have-a-question">
      <h2>Still have a question?</h2>
      <p>Contact Us</p>
      <div className="socials">
        <a href="">
          <FaInstagramSquare color="#FF6397" size={50} />
          <p>Instagram</p>
        </a>
        <a href="">
          <FaFacebook color="#0866FF" size={50} />
          <p>Facebook</p>
        </a>
        <a href="">
          <FaLinkedin color="#0A66C2" size={50} />
          <p>LinkedIn</p>
        </a>
      </div>
    </section>
  );
};

export default StillHaveAQuestion;